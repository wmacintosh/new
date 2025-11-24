import { useState, useEffect } from 'react';
import { 
  Search, ChefHat, Heart, ArrowLeft, 
  Sparkles, Clock, Users, ChevronRight, Utensils, Soup, Croissant, Carrot, CakeSlice, GlassWater 
} from 'lucide-react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { categories, recipes } from './data/recipes';

// --- ICON MAPPER ---
const IconMap = {
  Utensils, Soup, Croissant, ChefHat, Carrot, CakeSlice, GlassWater
};

export default function App() {
  // --- STATE ---
  const [view, setView] = useState('home'); // home, category, recipe, favorites
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('shirleys-favorites');
    return saved ? JSON.parse(saved) : [];
  });
  
  // AI State
  const [chefTip, setChefTip] = useState('');
  const [loadingTip, setLoadingTip] = useState(false);

  // --- EFFECTS ---
  useEffect(() => {
    localStorage.setItem('shirleys-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // --- ACTIONS ---
  const toggleFavorite = (id, e) => {
    e?.stopPropagation();
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]
    );
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setChefTip(''); // Reset tip
    setView('recipe');
  };

  const goBack = () => {
    if (view === 'recipe') {
      // If we were searching or in favorites, go back there, else category
      if (searchQuery) setView('home'); 
      else if (activeCategory) setView('category');
      else setView('home');
    } else {
      setView('home');
      setActiveCategory(null);
      setSearchQuery('');
    }
  };

  // --- GEMINI AI INTEGRATION ---
  const getChefTip = async () => {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      setChefTip("Please add your Gemini API Key to .env to use this feature!");
      return;
    }
    
    setLoadingTip(true);
    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
      
      const prompt = `You are an expert chef consisting of the spirit of a grandmother. 
      Give me one specific, short, and warm "secret tip" or variation for cooking "${selectedRecipe.title}". 
      Keep it under 50 words. Be encouraging.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setChefTip(response.text());
    } catch (error) {
      console.error("AI Error:", error);
      setChefTip("Nan is busy right now! (Check your API Key or Internet)");
    }
    setLoadingTip(false);
  };

  // --- FILTERING ---
  const filteredRecipes = searchQuery 
    ? recipes.filter(r => r.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : activeCategory 
      ? recipes.filter(r => r.category === activeCategory.name)
      : recipes;

  const favoriteRecipes = recipes.filter(r => favorites.includes(r.id));

  return (
    <div className="min-h-screen pb-20">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-deep-blue/95 backdrop-blur border-b border-blue-900 p-4 shadow-lg">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          {view !== 'home' && (
            <button onClick={goBack} className="p-2 hover:bg-card-blue rounded-full text-blue-300">
              <ArrowLeft size={24} />
            </button>
          )}
          
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search Nan's recipes..." 
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); if(e.target.value) setView('home'); }}
              className="w-full bg-card-blue border border-blue-900 rounded-full py-2 pl-10 pr-4 text-ice-blue placeholder-blue-300/50 focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <button 
            onClick={() => { setView('favorites'); setActiveCategory(null); setSearchQuery(''); }}
            className={`p-2 rounded-full transition-colors ${view === 'favorites' ? 'text-red-400 bg-red-400/10' : 'text-blue-300 hover:bg-card-blue'}`}
          >
            <Heart fill={view === 'favorites' ? "currentColor" : "none"} size={24} />
          </button>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="max-w-3xl mx-auto p-4 pt-6">
        
        {/* VIEW: RECIPE DETAIL */}
        {view === 'recipe' && selectedRecipe ? (
          <div className="animate-fade-in space-y-6">
            <div className="bg-card-blue rounded-2xl p-6 border border-blue-800 shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">{selectedRecipe.category}</span>
                  <h1 className="text-3xl font-serif font-bold text-ice-blue mt-1">{selectedRecipe.title}</h1>
                </div>
                <button onClick={(e) => toggleFavorite(selectedRecipe.id, e)}>
                  <Heart 
                    className={favorites.includes(selectedRecipe.id) ? "text-red-400 fill-current" : "text-blue-300"} 
                    size={28} 
                  />
                </button>
              </div>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-blue-300">
                {selectedRecipe.prepTime && <div className="flex items-center gap-1"><Clock size={16}/> Prep: {selectedRecipe.prepTime}</div>}
                {selectedRecipe.cookTime && <div className="flex items-center gap-1"><Utensils size={16}/> Cook: {selectedRecipe.cookTime}</div>}
                {selectedRecipe.yields && <div className="flex items-center gap-1"><Users size={16}/> Yields: {selectedRecipe.yields}</div>}
                {selectedRecipe.temp && <div className="flex items-center gap-1"><Sparkles size={16}/> Temp: {selectedRecipe.temp}</div>}
              </div>

              {/* AI Chef Tip */}
              <div className="mb-8 p-4 bg-deep-blue/50 rounded-xl border border-blue-500/30">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="flex items-center gap-2 text-blue-400 font-bold">
                    <Sparkles size={18} /> 
                    Nan's Secret Tip
                  </h3>
                  {!chefTip && (
                    <button 
                      onClick={getChefTip}
                      disabled={loadingTip}
                      className="text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-full text-white transition-colors"
                    >
                      {loadingTip ? "Asking Nan..." : "Ask Nan"}
                    </button>
                  )}
                </div>
                {chefTip && (
                  <p className="text-ice-blue/90 italic leading-relaxed border-l-2 border-blue-500 pl-3">
                    "{chefTip}"
                  </p>
                )}
              </div>

              <hr className="border-blue-900 mb-6"/>

              {/* Ingredients */}
              <h3 className="text-xl font-bold mb-4 text-blue-200">Ingredients</h3>
              <ul className="space-y-3 mb-8">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-500 group-hover:bg-warm-gold transition-colors" />
                    <span className="text-ice-blue/90 leading-relaxed">{ing}</span>
                  </li>
                ))}
              </ul>

              {/* Instructions */}
              <h3 className="text-xl font-bold mb-4 text-blue-200">Instructions</h3>
              <div className="space-y-6">
                {selectedRecipe.instructions.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center font-bold text-sm border border-blue-800">
                      {i + 1}
                    </span>
                    <p className="text-ice-blue/90 leading-relaxed pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          
          /* VIEW: LISTS & GRIDS */
          <div className="space-y-8 animate-fade-in">
            
            {/* Categories Grid (Only on Home & No Search) */}
            {view === 'home' && !searchQuery && (
              <>
                <div className="text-center mb-8 space-y-2">
                  <h2 className="text-4xl font-serif font-bold text-ice-blue">Shirley's Kitchen</h2>
                  <p className="text-blue-300">A cherished collection of recipes passed down through generations.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {categories.map(cat => {
                    const Icon = IconMap[cat.icon] || ChefHat;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => { setActiveCategory(cat); setView('category'); }}
                        className="p-6 bg-card-blue border border-blue-900 rounded-2xl hover:border-blue-500 hover:shadow-blue-900/20 hover:shadow-lg transition-all group text-left flex flex-col items-center justify-center gap-3"
                      >
                        <Icon size={32} className="text-blue-400 group-hover:text-white transition-colors" />
                        <span className="font-semibold text-ice-blue">{cat.name}</span>
                      </button>
                    )
                  })}
                </div>
              </>
            )}

            {/* Recipe List (Category, Search, or Favorites) */}
            {(view === 'category' || view === 'favorites' || searchQuery) && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-2xl font-serif font-bold text-ice-blue">
                    {searchQuery ? `Searching "${searchQuery}"` : 
                     view === 'favorites' ? 'My Favorites' : 
                     activeCategory?.name}
                  </h2>
                  <span className="text-blue-400 text-sm bg-blue-900/30 px-2 py-1 rounded-md">
                    {view === 'favorites' ? favoriteRecipes.length : filteredRecipes.length}
                  </span>
                </div>

                <div className="grid gap-4">
                  {(view === 'favorites' ? favoriteRecipes : filteredRecipes).map(recipe => (
                    <div 
                      key={recipe.id}
                      onClick={() => handleRecipeSelect(recipe)}
                      className="group bg-card-blue border border-blue-900 rounded-xl p-4 hover:border-blue-500 transition-all cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <h3 className="font-bold text-lg text-ice-blue group-hover:text-blue-300 transition-colors">
                          {recipe.title}
                        </h3>
                        <p className="text-sm text-blue-400 mt-1 flex items-center gap-3">
                          {recipe.cookTime && <span className="flex items-center gap-1"><Clock size={12}/> {recipe.cookTime}</span>}
                          {recipe.yields && <span className="flex items-center gap-1"><Users size={12}/> {recipe.yields}</span>}
                        </p>
                      </div>
                      <ChevronRight className="text-blue-900 group-hover:text-blue-500 transition-colors" />
                    </div>
                  ))}
                  
                  {/* Empty State */}
                  {(view === 'favorites' ? favoriteRecipes : filteredRecipes).length === 0 && (
                    <div className="text-center py-12 text-blue-400">
                      <p>No recipes found here.</p>
                      {view === 'favorites' && <p className="text-sm mt-2">Tap the heart icon on any recipe to save it!</p>}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}