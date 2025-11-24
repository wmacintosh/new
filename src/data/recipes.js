import { Utensils, Soup, Croissant, ChefHat, Carrot, CakeSlice, GlassWater } from 'lucide-react';

export const categories = [
  { id: "appetizers", name: "Appetizers & Dips", icon: "Utensils" },
  { id: "soups", name: "Soups & Salads", icon: "Soup" },
  { id: "breads", name: "Breads & Muffins", icon: "Croissant" },
  { id: "mains", name: "Main Dishes", icon: "ChefHat" },
  { id: "sides", name: "Side Dishes", icon: "Carrot" },
  { id: "desserts", name: "Desserts & Baked Goods", icon: "CakeSlice" },
  { id: "extras", name: "Sauces, Condiments & Extras", icon: "GlassWater" }, // <--- Changed icon here
];

export const recipes = [
  // --- CHAPTER 1: APPETIZERS & DIPS ---
  {
    id: "cactus-dip",
    title: "Cactus Dip (Boston Pizza Style)",
    category: "Appetizers & Dips",
    yields: "1.75 cups",
    prepTime: "Overnight chill",
    ingredients: [
      "1 cup sour cream",
      "1/2 cup creamy Caesar dressing",
      "1/4 cup shredded Parmesan cheese",
      "1/4 cup finely chopped green onion",
      "1/2 - 1 tsp crushed chilies/red pepper flakes (to taste)"
    ],
    instructions: [
      "In a bowl, whisk together the sour cream, Caesar dressing, Parmesan cheese, green onion, and crushed chilies until well combined.",
      "Cover and chill in the refrigerator until ready to use. For best flavor, chill ideally overnight.",
      "Serve chilled with chips, crackers, or vegetables."
    ]
  },
  {
    id: "classic-deviled-eggs",
    title: "Classic Deviled Eggs",
    category: "Appetizers & Dips",
    yields: "12 halves",
    prepTime: "15 mins",
    cookTime: "15 mins",
    ingredients: [
      "6 large eggs",
      "1/4 cup mayonnaise",
      "1 tsp Dijon mustard",
      "1 tsp white vinegar",
      "1/8 tsp salt",
      "Pinch of black pepper",
      "Paprika (for garnish)"
    ],
    instructions: [
      "Hard-Boil: Place eggs in saucepan, cover with water. Boil, cover, remove from heat, let sit 12-15 mins. Cool in ice bath.",
      "Filling: Peel eggs, slice in half. Mash yolks with mayo, mustard, vinegar, salt, and pepper.",
      "Assemble: Pipe yolk mixture into whites.",
      "Sprinkle with paprika and serve."
    ]
  },
  {
    id: "crab-dip-appetizer",
    title: "Crab Dip Appetizer",
    category: "Appetizers & Dips",
    cookTime: "1 min (Broil)",
    ingredients: [
      "1 cup mayonnaise",
      "1/2 cup shredded cheddar cheese",
      "1/2 cup chopped onion",
      "1/2 tsp curry powder",
      "4 dashes Tabasco sauce",
      "1 can (6-7 oz) crab meat, drained",
      "French bread, sliced"
    ],
    instructions: [
      "Preheat broiler.",
      "Mix mayo, cheddar cheese, onion, curry powder, Tabasco, and crab meat in a bowl.",
      "Arrange French bread slices on a baking sheet. Spread crab mixture evenly onto bread slices.",
      "Broil for approximately 1 minute until hot, bubbly, and lightly browned. Watch carefully!"
    ]
  },
  {
    id: "spicy-ranch-dip",
    title: "Homemade Spicy Ranch Dip",
    category: "Appetizers & Dips",
    yields: "1.5 cups",
    ingredients: [
      "1/2 cup mayonnaise",
      "1/2 cup sour cream",
      "1/4 - 1/2 cup buttermilk",
      "Seasonings: 1 tsp dried dill, 1 tsp dried parsley, 1/2 tsp dried chives, 1/2 tsp garlic powder, 1/2 tsp onion powder, 1/2 tsp salt, 1/4 tsp black pepper",
      "Spicy Elements: 1 small jalapeño (minced), 1/4 tsp cayenne pepper, 1-2 tsp hot sauce"
    ],
    instructions: [
      "Whisk together mayonnaise, sour cream, and 1/4 cup buttermilk.",
      "Add all seasonings and chosen spicy elements. Whisk until smooth.",
      "Adjust consistency with more buttermilk if needed.",
      "Refrigerate for at least 30 minutes before serving."
    ]
  },
  {
    id: "hot-crabmeat-appetizer",
    title: "Hot Crabmeat Appetizer",
    category: "Appetizers & Dips",
    temp: "375°F",
    cookTime: "15 mins",
    ingredients: [
      "8 oz cream cheese, softened",
      "7.5 oz can crabmeat, drained & flaked",
      "2 tsp finely chopped onions",
      "2 Tbsp milk",
      "1/2 tsp horseradish",
      "1/4 tsp salt & pepper",
      "1/2 cup sliced almonds, toasted"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Combine all ingredients except almonds. Mix well.",
      "Spoon into oven-safe dish. Sprinkle toasted almonds on top.",
      "Bake for 15 minutes. Serve warm with crackers."
    ]
  },
  {
    id: "lobster-dip",
    title: "Lobster Dip (Donnetta's)",
    category: "Appetizers & Dips",
    cookTime: "20 mins",
    temp: "325°F",
    ingredients: [
      "1 can (6 oz) lobster, thawed, drained & chopped",
      "8 oz cream cheese, softened",
      "1 cup mayonnaise",
      "1 cup grated cheddar cheese",
      "1/2 cup diced onion",
      "2 tsp dill weed (optional)"
    ],
    instructions: [
      "Preheat oven to 325°F.",
      "Beat cream cheese until smooth. Add mayonnaise, cheddar, onion, and dill. Mix well.",
      "Gently fold in the lobster.",
      "Spread mixture into a small baking dish.",
      "Bake for 20 minutes until hot and bubbly."
    ]
  },
  {
    id: "party-cheese-ball",
    title: "Party Cheese Ball",
    category: "Appetizers & Dips",
    prepTime: "Chill 1 hr",
    ingredients: [
      "2 packages (8 oz each) cream cheese, softened",
      "1 cup shredded cheddar cheese",
      "1 Tbsp Worcestershire sauce",
      "1 tsp garlic powder",
      "1 tsp onion powder",
      "Chopped pecans or parsley (for rolling)"
    ],
    instructions: [
      "Combine softened cream cheese, cheddar, Worcestershire, garlic powder, and onion powder. Mix well.",
      "Shape mixture into a ball.",
      "Roll the ball in chopped pecans or parsley until coated.",
      "Wrap tightly in plastic wrap and chill for at least 1 hour."
    ]
  },
  {
    id: "spicy-guacamole",
    title: "Spicy Guacamole",
    category: "Appetizers & Dips",
    ingredients: [
      "3 ripe Hass avocados",
      "1/4 cup finely diced red onion",
      "1/4 cup chopped fresh cilantro",
      "1-2 Serrano peppers, minced",
      "Juice of 1-2 limes",
      "1/2 tsp salt"
    ],
    instructions: [
      "Halve avocados, remove pits, and scoop flesh into a bowl.",
      "Squeeze lime juice over avocado and mash gently.",
      "Add onion, cilantro, peppers, and salt. Mix gently.",
      "Serve immediately with chips."
    ]
  },
  {
    id: "spicy-queso",
    title: "Spicy Queso Dip",
    category: "Appetizers & Dips",
    ingredients: [
      "1 Tbsp butter",
      "1/4 cup onion, chopped",
      "1-2 cloves garlic, minced",
      "12 oz can evaporated milk",
      "8 oz Velveeta or white American cheese, cubed",
      "8 oz Pepper Jack cheese, shredded",
      "10 oz can diced tomatoes & green chilies (Rotel), undrained",
      "1 fresh jalapeño, minced"
    ],
    instructions: [
      "Sauté onion in butter until soft. Add garlic and jalapeño; cook 1 minute.",
      "Add evaporated milk and heat until steaming (do not boil).",
      "Reduce heat to low. Add cubed cheese, stirring until melted. Add shredded cheese gradually.",
      "Stir in tomatoes and chilies. Heat through and serve warm."
    ]
  },

  // --- CHAPTER 2: SOUPS & SALADS ---
  {
    id: "classic-carrot-salad",
    title: "Carrot Salad (Classic)",
    category: "Soups & Salads",
    yields: "Serves 12",
    prepTime: "Chill overnight",
    ingredients: [
      "2 lbs carrots, peeled, sliced, cooked, and drained",
      "1 red onion, sliced thin",
      "1/2 green pepper, sliced thin",
      "1 can (8 oz) tomato sauce",
      "1/2 cup white sugar",
      "1/2 cup white vinegar",
      "1/3 cup oil",
      "1 tsp salt",
      "1 tsp dry mustard",
      "1/2 tsp pepper"
    ],
    instructions: [
      "Whisk together sugar, tomato sauce, vinegar, oil, mustard, salt, and pepper in a large bowl.",
      "Add cooked carrots, onion, and green pepper. Stir to coat.",
      "Cover and chill overnight before serving."
    ]
  },
  {
    id: "macaroni-salad",
    title: "Macaroni Salad",
    category: "Soups & Salads",
    ingredients: [
      "3 cups cooked macaroni",
      "3 hard-boiled eggs, chopped",
      "1 can (6-7 oz) salmon, drained and flaked",
      "1 onion, chopped",
      "1-2 stalks celery, chopped",
      "Miracle Whip (as needed)",
      "Salt, pepper, garlic powder to taste"
    ],
    instructions: [
      "Season cooked macaroni with salt, pepper, and garlic powder.",
      "Add eggs, salmon, onion, and celery.",
      "Add enough Miracle Whip to moisten. Chill for 30 minutes."
    ]
  },
  {
    id: "marcellas-diet-soup",
    title: "Marcella's Diet Soup",
    category: "Soups & Salads",
    yields: "6 quarts",
    ingredients: [
      "2 cans (28 oz each) tomatoes",
      "1 packet onion soup mix",
      "5-6 carrots, chopped",
      "8 stalks celery, chopped",
      "2 green peppers, chopped",
      "5 onions, chopped",
      "1-2 lbs boneless chicken breast",
      "24 cups water",
      "2-3 handfuls macaroni (added at end)"
    ],
    instructions: [
      "Combine all ingredients (except pasta) in a very large stockpot.",
      "Bring to a boil, reduce heat, and simmer covered for 1-2 hours until vegetables are tender.",
      "10 minutes before serving, add macaroni and cook until al dente."
    ]
  },
  {
    id: "minestrone-soup",
    title: "Minestrone Soup",
    category: "Soups & Salads",
    ingredients: [
      "1.5 lb ground beef",
      "1 cup diced zucchini",
      "1 cup cubed potatoes",
      "1/2 cup celery, chopped",
      "14 oz can tomatoes, undrained",
      "1/4 cup rice OR 1/2 cup macaroni",
      "6 cups water",
      "1 cup diced onions",
      "1/2 cup diced okra",
      "1 cup sliced carrots",
      "1 cup cabbage, shredded",
      "Seasonings: Thyme, bay leaf, salt, Worcestershire sauce"
    ],
    instructions: [
      "Brown beef in a large pot; drain fat.",
      "Add all vegetables, water, and seasonings. Bring to a boil.",
      "Add rice or macaroni. Reduce heat and simmer for at least 1 hour.",
      "Serve topped with Parmesan cheese."
    ]
  },
  {
    id: "minted-fruit-rice-salad",
    title: "Minted Fruit Rice Salad",
    category: "Soups & Salads",
    ingredients: [
      "2/3 cup pineapple juice",
      "1/3 cup water",
      "1 cup instant rice",
      "11 oz can mandarin oranges, drained",
      "8 oz can crushed pineapple, undrained",
      "1/2 cup chopped cucumber",
      "1/3 cup chopped red onion",
      "3 Tbsp fresh mint, chopped"
    ],
    instructions: [
      "Boil juice and water. Stir in rice. Remove from heat, cover, stand 10 mins.",
      "Fluff rice. Add oranges, pineapple, cucumber, onion, and mint.",
      "Mix gently. Chill 30 mins."
    ]
  },
  {
    id: "pineapple-spinach-salad",
    title: "Pineapple Spinach Salad",
    category: "Soups & Salads",
    ingredients: [
      "20 oz can pineapple chunks, drained",
      "4 cups fresh spinach leaves",
      "1/2 cup sliced red onion",
      "1/2 cup toasted sliced almonds",
      "1/2 cup Italian dressing"
    ],
    instructions: [
      "Combine pineapple, spinach, onion, and almonds in a bowl.",
      "Toss with Italian dressing just before serving."
    ]
  },
  {
    id: "spicy-vegetable-soup",
    title: "Spicy Vegetable Soup",
    category: "Soups & Salads",
    ingredients: [
      "1 Tbsp olive oil",
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "6-8 cups vegetable broth",
      "28 oz can diced tomatoes",
      "1 cup corn, 1 cup green beans",
      "Spices: Chili powder, cumin, smoked paprika, red pepper flakes"
    ],
    instructions: [
      "Sauté onion, carrots, and celery in oil until soft. Add spices.",
      "Add broth and tomatoes. Simmer 20 minutes.",
      "Add corn and green beans. Simmer until tender."
    ]
  },
  {
    id: "evangeline-soup",
    title: "The Evangeline Vegetable Soup",
    category: "Soups & Salads",
    cookTime: "2 hours",
    ingredients: [
      "1 1/2 cups turnips, chopped",
      "1 1/2 cups carrots, chopped",
      "1 1/2 cups potatoes, chopped",
      "1 can tomato sauce (or Heinz tomato soup)",
      "1 small can peas",
      "1 onion, chopped",
      "1 small can string beans",
      "1/2 cup dry vegetable soup mix",
      "1/2 tbsp beef soup mix (Bovril)",
      "2 tsp salt",
      "1 tbsp butter",
      "Water (to cover)"
    ],
    instructions: [
      "Combine all ingredients in a large soup pot.",
      "Add enough water to cover the ingredients well.",
      "Bring to a gentle boil, then reduce heat.",
      "Simmer for 2 hours."
    ]
  },
  {
    id: "three-bean-salad",
    title: "Three Bean Salad",
    category: "Soups & Salads",
    ingredients: [
      "14 oz can red kidney beans, drained",
      "14 oz can green beans, drained",
      "14 oz can yellow wax beans, drained",
      "1 cup celery, chopped",
      "1/2 cup green pepper, chopped",
      "1/2 cup onion, chopped",
      "Dressing: 3/4 cup sugar, 1/2 cup vinegar, 1/4 cup oil, 1 tsp salt"
    ],
    instructions: [
      "Combine beans and vegetables.",
      "Whisk dressing ingredients until sugar dissolves. Pour over beans.",
      "Chill overnight. Drain before serving."
    ]
  },

  // --- CHAPTER 3: BREADS & MUFFINS ---
  {
    id: "banana-bread",
    title: "Banana Bread",
    category: "Breads & Muffins",
    cookTime: "45 mins",
    temp: "300°F",
    ingredients: [
      "1/4 cup shortening",
      "1 cup brown sugar",
      "1 egg, beaten",
      "4 large ripe bananas, mashed",
      "1.5 cups flour",
      "1 tsp baking soda",
      "1 tsp baking powder",
      "1 tsp salt"
    ],
    instructions: [
      "Preheat oven to 300°F.",
      "Cream shortening and sugar. Add egg and bananas; mix well.",
      "Sift dry ingredients together and add to wet mixture. Mix until just combined.",
      "Bake for approx 45 minutes."
    ]
  },
  {
    id: "banana-chip-muffins",
    title: "Banana Chip Muffins",
    category: "Breads & Muffins",
    temp: "350°F",
    cookTime: "15-20 mins",
    ingredients: [
      "1/2 cup margarine",
      "3/4 cup white sugar",
      "2 eggs",
      "1 tsp vanilla",
      "2 bananas, mashed",
      "2 cups flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1.5 cups chocolate chips"
    ],
    instructions: [
      "Cream margarine and sugar. Add eggs, vanilla, and bananas.",
      "Mix dry ingredients separately, then add to wet. Fold in chips.",
      "Fill muffin cups. Bake at 350°F for 15-20 mins."
    ]
  },
  {
    id: "blueberry-muffins",
    title: "Blueberry Muffins",
    category: "Breads & Muffins",
    temp: "425°F",
    cookTime: "15-20 mins",
    ingredients: [
      "1/4 cup butter",
      "1/2 cup sugar",
      "1 egg",
      "2 cups flour",
      "4 tsp baking powder",
      "1/2 tsp salt",
      "1/2 cup milk",
      "1 cup blueberries"
    ],
    instructions: [
      "Cream butter and sugar. Add egg.",
      "Sift dry ingredients and add alternately with milk.",
      "Fold in blueberries. Bake at 425°F for 15-20 minutes."
    ]
  },
  {
    id: "cinnamon-loaf",
    title: "Cinnamon Loaf",
    category: "Breads & Muffins",
    cookTime: "1 hour",
    temp: "350°F",
    ingredients: [
      "Batter: 1/4 cup margarine, 1 cup sugar, 2 eggs, 2 cups flour, 1/2 tsp salt, 1 tsp baking powder, 1/4 tsp baking soda, 1 cup sour milk, 2 tsp vanilla",
      "Filling: 3 Tbsp brown sugar, 1 Tbsp cinnamon"
    ],
    instructions: [
      "Cream margarine and sugar. Add eggs.",
      "Mix dry ingredients and add alternately with sour milk and vanilla.",
      "Pour half batter into loaf pan. Sprinkle with filling. Top with remaining batter.",
      "Bake at 350°F for 1 hour."
    ]
  },
  {
    id: "classic-buttermilk-biscuits",
    title: "Classic Buttermilk Biscuits",
    category: "Breads & Muffins",
    temp: "425°F",
    cookTime: "13-17 mins",
    ingredients: [
      "2.5 cups flour",
      "1 Tbsp baking powder",
      "1/2 tsp baking soda",
      "1 tsp salt",
      "1/2 cup cold butter, cubed",
      "1 cup cold buttermilk"
    ],
    instructions: [
      "Whisk dry ingredients. Cut in butter until coarse crumbs form.",
      "Stir in buttermilk to form shaggy dough.",
      "Fold dough on floured surface 2-3 times. Pat to 3/4-inch thick. Cut biscuits.",
      "Bake 13-17 minutes until golden."
    ]
  },
  {
    id: "lemon-bread",
    title: "Lemon Bread",
    category: "Breads & Muffins",
    temp: "350°F",
    cookTime: "45-55 mins",
    ingredients: [
      "1/2 cup butter",
      "1 cup sugar",
      "2 eggs",
      "1.5 cups flour",
      "1 tsp baking powder",
      "1/2 tsp salt",
      "1/3 cup milk",
      "Rind and juice of 1 lemon (plus sugar for glaze)"
    ],
    instructions: [
      "Cream butter and sugar. Add eggs. Add dry ingredients alternately with milk.",
      "Stir in lemon rind and 2 Tbsp juice. Bake at 350°F.",
      "Glaze hot bread with remaining lemon juice mixed with 1/4 cup sugar."
    ]
  },
  {
    id: "selmas-tea-biscuits",
    title: "Selma's Tea Biscuits",
    category: "Breads & Muffins",
    temp: "350°F",
    cookTime: "10-15 mins",
    ingredients: [
      "2 cups flour",
      "4 tsp baking powder",
      "1/2 tsp salt",
      "1/2 tsp cream of tartar",
      "2 tsp sugar",
      "1/2 cup oil",
      "1/2 cup milk",
      "1 egg"
    ],
    instructions: [
      "Mix dry ingredients in a bowl.",
      "Whisk wet ingredients (oil, milk, egg) separately.",
      "Pour wet mixture into dry, stir until just combined.",
      "Roll out dough and cut into biscuits.",
      "Bake at 350°F for 10-15 minutes."
    ]
  },
  {
    id: "whole-wheat-bread",
    title: "Whole Wheat Bread with Honey",
    category: "Breads & Muffins",
    yields: "2 loaves",
    temp: "375°F",
    cookTime: "30-40 mins",
    ingredients: [
      "3 cups warm water",
      "2 pkg dry yeast",
      "1/3 cup honey (proofing) + 1/3 cup honey (dough)",
      "5 cups white bread flour",
      "3.5 cups whole wheat flour",
      "3 Tbsp melted butter",
      "1 Tbsp salt"
    ],
    instructions: [
      "Proof yeast with water and 1/3 cup honey.",
      "Stir in white flour to make sponge. Rest 30 mins.",
      "Add butter, rest of honey, salt, and wheat flour. Knead 8-10 mins.",
      "Rise until doubled. Shape into loaves. Rise again.",
      "Bake at 375°F for 30-40 minutes."
    ]
  },

  // --- CHAPTER 4: MAIN DISHES ---
  {
    id: "antosh-rice",
    title: "Antosh Rice",
    category: "Main Dishes",
    temp: "325°F",
    ingredients: [
      "1 cup uncooked rice",
      "1 envelope onion soup mix",
      "1 can mushroom soup",
      "1/2 soup can water",
      "1/4 cup melted butter"
    ],
    instructions: [
      "Combine rice, soups, and water in a casserole dish.",
      "Drizzle with butter. Cover.",
      "Bake at 325°F for 45 mins. Uncover and bake 30 mins more."
    ]
  },
  {
    id: "chicken-vindaloo",
    title: "Authentic Chicken Vindaloo",
    category: "Main Dishes",
    ingredients: [
      "Paste: Dry chilies, vinegar, garlic, ginger, cumin, peppercorns, mustard seeds, cloves, cinnamon, turmeric",
      "Curry: 1.5 lbs chicken, onion, salt, sugar, hot water"
    ],
    instructions: [
      "Blend paste ingredients. Marinate chicken 30 mins.",
      "Brown onion. Add chicken and cook until sealed.",
      "Add water. Simmer covered 20-30 mins until tender."
    ]
  },
  {
    id: "salmon-crust",
    title: "Baked Salmon in Crust (Antosh)",
    category: "Main Dishes",
    temp: "400°F",
    cookTime: "25 mins",
    ingredients: [
      "Crust: 2.5 cups flour, 1 tsp salt, 3.5 tsp baking powder, 1/4 lb lard, egg, milk",
      "Filling: Spinach, 1 lb salmon fillet, Havarti cheese"
    ],
    instructions: [
      "Make dough like biscuits. Roll out.",
      "Layer spinach, salmon, cheese, and spinach on one half. Fold over and seal.",
      "Bake at 400°F for 25 minutes."
    ]
  },
  {
    id: "wife-saver",
    title: "Christmas Morning Wife Saver",
    category: "Main Dishes",
    temp: "350°F",
    cookTime: "1 hour",
    ingredients: [
      "16 slices bread (crusts removed)",
      "Ham or bacon slices",
      "Cheddar cheese slices",
      "4 eggs, 3 cups milk",
      "Seasonings: Salt, pepper, mustard, Worcestershire, Tabasco",
      "Topping: 1/2 cup melted butter, crushed cornflakes"
    ],
    instructions: [
      "Layer bread, meat, cheese, and bread in 9x13 pan.",
      "Whisk eggs, milk, and seasonings. Pour over layers. Chill overnight.",
      "Top with butter and cornflakes. Bake at 350°F for 1 hour."
    ]
  },
  {
    id: "ham-potatoes-au-gratin",
    title: "Ham & Potatoes Au Gratin",
    category: "Main Dishes",
    temp: "350°F",
    cookTime: "30 mins",
    ingredients: [
      "3 cups cooked diced potatoes",
      "2 cups cooked diced ham",
      "Sauce: Butter, flour, milk, 1 cup cheddar, 1/4 cup mayo"
    ],
    instructions: [
      "Make a white sauce with butter, flour, and milk.",
      "Stir in cheese and mayo until melted.",
      "Combine with potatoes and ham. Bake at 350°F for 30 minutes."
    ]
  },
  {
    id: "hodge-podge",
    title: "Hodge Podge",
    category: "Main Dishes",
    notes: "A Maritime Classic",
    ingredients: [
      "New potatoes (scraped/scrubbed)",
      "Baby carrots",
      "Green beans (trimmed)",
      "Yellow beans (trimmed)",
      "Fresh peas (shelled)",
      "1/4 - 1/2 cup butter",
      "1/2 - 1 cup cream",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Boil or steam vegetables in a small amount of salted water until just tender. Start with carrots and potatoes, adding beans and peas later as they cook faster.",
      "Drain most of the water, leaving a small amount in the pot.",
      "Add butter and cream. Heat gently (do not boil vigorously).",
      "Season generously with salt and pepper. Serve hot."
    ]
  },
  {
    id: "lasagna",
    title: "Lasagna",
    category: "Main Dishes",
    temp: "350°F",
    ingredients: [
      "Lasagna noodles",
      "Meat sauce (beef, onions, tomatoes, spices)",
      "Cheese mixture (cottage cheese, egg, parmesan)",
      "Mozzarella cheese"
    ],
    instructions: [
      "Layer noodles, cheese mix, meat sauce, and mozzarella in 9x13 pan.",
      "Repeat layers. Bake covered at 350°F for 30 mins, then uncovered for 15 mins."
    ]
  },
  {
    id: "meat-pie-traditional",
    title: "Meat Pie (Traditional)",
    category: "Main Dishes",
    temp: "450°F / 350°F",
    ingredients: [
      "1 lb pork, 1/2 lb beef (cubed)",
      "1 onion, chopped",
      "Spices: Summer savory, mace, salt, pepper",
      "Pastry for double crust pie"
    ],
    instructions: [
      "Simmer meats with onion, savory, mace, and water until tender.",
      "Remove meat from broth (save broth) and let cool.",
      "Line a pie plate with pastry. Fill with meat.",
      "Add some of the reserved broth to moisten (thickened with a little flour if desired).",
      "Top with pastry crust. Cut vents.",
      "Bake at 450°F for 15 minutes, then reduce to 350°F for 45 minutes."
    ]
  },
  {
    id: "pate-acadien",
    title: "Pâté Acadien (Acadian Meat Pie)",
    category: "Main Dishes",
    temp: "375°F",
    ingredients: [
      "Meats: 3 lbs beef, 3 lbs pork, 3 lbs chicken",
      "4 onions",
      "Pastry: 8 cups flour, 1 lb lard, baking powder, salt, milk"
    ],
    instructions: [
      "Stew meats with onions and spices until falling off bone. Remove bones and shred meat.",
      "Make pastry. Line large dish or multiple pie plates.",
      "Fill with meat and some broth. Top with crust.",
      "Bake at 375°F for 45-60 minutes."
    ]
  },
  {
    id: "sweet-sour-meatballs",
    title: "Sweet & Sour Meatballs (Version 1)",
    category: "Main Dishes",
    ingredients: [
      "1.5 lb ground beef meatballs (cooked)",
      "1/2 cup brown sugar",
      "2 Tbsp cornstarch",
      "1/2 cup ketchup",
      "1/4 cup vinegar",
      "1 cup liquid (pineapple juice + water)",
      "Soy sauce to taste",
      "Optional: Pineapple chunks, green pepper, onion"
    ],
    instructions: [
      "Mix sugar, cornstarch, ketchup, vinegar, juice/water, and soy sauce in a saucepan.",
      "Simmer until thickened.",
      "Add vegetables and pineapple if using.",
      "Pour sauce over cooked meatballs in a serving dish or slow cooker and heat through."
    ]
  },
  {
    id: "sweet-sour-meatballs-2",
    title: "Sweet & Sour Meatballs (Version 2)",
    category: "Main Dishes",
    temp: "325°F",
    ingredients: [
      "1 lb hamburger (meatballs)",
      "Sauce: 11 oz ketchup, 9 oz apple jelly, 2 Tbsp brown sugar, 1 tsp lemon juice, 1 small onion"
    ],
    instructions: [
      "Brown meatballs.",
      "Simmer sauce ingredients for 10 minutes.",
      "Combine meatballs and sauce in baking dish. Bake at 325°F for 30 minutes."
    ]
  },
  {
    id: "dal-makhani",
    title: "Authentic Dal Makhani",
    category: "Main Dishes",
    ingredients: [
      "3/4 cup whole black lentils, 1/4 cup kidney beans (soaked overnight)",
      "Masala: Butter/Ghee, ginger-garlic paste, 1 cup tomato puree, chili powder, garam masala",
      "Finish: 2-4 Tbsp butter, 1/2 cup cream, Kasuri Methi"
    ],
    instructions: [
      "Cook soaked lentils/beans until soft. Mash slightly.",
      "Sauté masala spices and tomato puree until oil separates.",
      "Add lentils to masala. Simmer 30 mins to 2 hours.",
      "Finish with butter and cream."
    ]
  },
  {
    id: "homemade-perogies",
    title: "Homemade Perogies",
    category: "Main Dishes",
    yields: "Approx 60",
    ingredients: [
      "Dough: 4.5 cups flour, 2 tsp salt, 2 cups sour cream, 2 eggs + 1 yolk, 2 Tbsp melted butter, 2 Tbsp oil",
      "Filling: 8 potatoes (boiled & mashed)",
      "1 cup grated cheddar cheese",
      "2 Tbsp Cheez Whiz",
      "Onion salt to taste"
    ],
    instructions: [
      "Mix dough ingredients together. Knead gently and let rest for 20 minutes.",
      "While potatoes are hot, mash with cheeses and onion salt. Let cool.",
      "Roll dough thin and cut into circles.",
      "Place a spoonful of filling in center, fold over, and seal edges tightly.",
      "Boil in large pot of salted water. They are done when they float (3-5 minutes)."
    ]
  },
  {
    id: "lazy-cabbage-rolls",
    title: "Lazy Cabbage Roll Casserole",
    category: "Main Dishes",
    temp: "350°F",
    ingredients: [
      "1.5-2 lbs ground beef",
      "1 large onion, chopped",
      "1 medium cabbage, chopped",
      "1 cup uncooked rice",
      "1 can (28 oz) tomato sauce",
      "2 cans beef broth"
    ],
    instructions: [
      "Brown beef and onion.",
      "Mix cabbage, rice, tomato sauce, and seasonings in a large bowl. Add beef.",
      "Spread in 9x13 pan. Pour broth over top.",
      "Bake covered at 350°F for 1 hour. Stir, cover, bake 20-30 mins more."
    ]
  },
  {
    id: "peppered-steak",
    title: "Peppered Steak",
    category: "Main Dishes",
    ingredients: [
      "1.5 lb steak strips",
      "1 onion, chopped",
      "2 cans beef consommé",
      "3 Tbsp soy sauce, garlic powder",
      "2 green peppers, sliced",
      "2 tomatoes, chopped",
      "2 Tbsp cornstarch (thickener)"
    ],
    instructions: [
      "Brown steak. Add onion.",
      "Add consommé, soy, garlic. Simmer 10 mins.",
      "Add peppers (simmer 10 mins). Thicken with cornstarch. Add tomatoes (simmer 10 mins)."
    ]
  },
  {
    id: "saucy-chicken-asparagus",
    title: "Saucy Chicken & Asparagus",
    category: "Main Dishes",
    temp: "375°F",
    cookTime: "40 mins",
    ingredients: [
      "1 lb asparagus",
      "4 chicken breasts",
      "Sauce: 1 can cream of chicken soup, 1/2 cup mayo, 1 tsp lemon juice, 1/2 tsp curry powder",
      "1 cup cheddar cheese"
    ],
    instructions: [
      "Layer asparagus and browned chicken in pan.",
      "Top with sauce. Bake covered 40 mins at 375°F.",
      "Top with cheese, let stand 5 mins."
    ]
  },
  {
    id: "saucy-pepper-steak-crockpot",
    title: "Saucy Pepper Steak (Crock Pot)",
    category: "Main Dishes",
    cookTime: "6-8 hours",
    ingredients: [
      "1.5 lbs round steak strips (dredged in flour)",
      "Onion, garlic, green peppers",
      "16 oz can tomatoes, 1 Tbsp beef bouillon, soy sauce, Worcestershire"
    ],
    instructions: [
      "Place steak, onion, garlic, and half peppers in slow cooker.",
      "Pour tomato mixture over. Cook Low 6-8 hours.",
      "Add remaining peppers 1 hour before serving."
    ]
  },
  {
    id: "scallop-casserole",
    title: "Scallop Casserole",
    category: "Main Dishes",
    temp: "350°F",
    ingredients: [
      "1 lb scallops",
      "Vegetables: Onion, mushrooms, celery, green pepper (sautéed)",
      "White sauce (butter, flour, milk)",
      "Bread crumbs"
    ],
    instructions: [
      "Sauté vegetables. Make white sauce. Combine with scallops.",
      "Top with crumbs. Bake at 350°F for 20 minutes."
    ]
  },
  {
    id: "ribs-chicken-sauce",
    title: "Spareribs or Chicken with Sauce",
    category: "Main Dishes",
    temp: "400°F / 350°F",
    ingredients: [
      "Meat: Spareribs or Chicken",
      "Sauce: 1 cup ketchup, 2 Tbsp vinegar, 2 Tbsp lemon juice, water (to make 1 cup liquid), 1 Tbsp Worcestershire, 1 onion (fried)"
    ],
    instructions: [
      "Bake ribs at 400°F for 30 mins.",
      "Reduce to 350°F. Pour sauce over. Bake 1 hour."
    ]
  },
  {
    id: "steak-peppers-onions",
    title: "Steak with Peppers and Onions",
    category: "Main Dishes",
    ingredients: [
      "Steak strips (dusted with paprika)",
      "Garlic, green pepper, green onions, tomatoes",
      "1 cup beef broth, 2 Tbsp cornstarch, 2 Tbsp soy sauce"
    ],
    instructions: [
      "Brown steak and garlic.",
      "Add vegetables and broth. Simmer 15 mins.",
      "Thicken with cornstarch/soy slurry. Serve over rice."
    ]
  },
  {
    id: "tuna-casserole",
    title: "Tuna Casserole",
    category: "Main Dishes",
    temp: "350°F",
    ingredients: [
      "1 can (14 oz) tomatoes",
      "1 can mushroom soup",
      "2 tins tuna",
      "Crushed potato chips",
      "Cheese slices"
    ],
    instructions: [
      "Mix tomatoes and soup.",
      "Layer chips, tuna, soup mix, tuna, soup mix, cheese in casserole.",
      "Bake at 350°F for 1 hour."
    ]
  },

  // --- CHAPTER 5: SIDE DISHES ---
  {
    id: "calico-beans",
    title: "Calico Beans (Laurie's)",
    category: "Side Dishes",
    temp: "350°F",
    ingredients: [
      "1 lb bacon, cooked and crumbled",
      "1 onion, chopped",
      "Canned beans: Kidney, Lima, Chickpeas, Pork & Beans",
      "Sauce: 3/4 cup brown sugar, 1/2 cup vinegar, 1.5 tsp dry mustard"
    ],
    instructions: [
      "Sauté onion. Add sauce ingredients.",
      "Mix with all beans and bacon.",
      "Bake at 350°F for 1 hour."
    ]
  },
  {
    id: "onion-rings",
    title: "French Fried Onion Rings",
    category: "Side Dishes",
    ingredients: [
      "Large onions, sliced into rings",
      "Milk",
      "Flour (seasoned with salt/pepper)",
      "Eggs, beaten",
      "Oil for frying"
    ],
    instructions: [
      "Dip onion rings in milk.",
      "Dredge in seasoned flour.",
      "Dip into beaten egg.",
      "Dredge in flour again.",
      "Let dry on a rack briefly.",
      "Deep fry at 370°F until golden brown. Drain on paper towels."
    ]
  },
  {
    id: "hash-brown-casserole",
    title: "Hash Brown Casserole",
    category: "Side Dishes",
    temp: "350°F",
    ingredients: [
      "1 bag frozen hash browns (thawed)",
      "1 can mushroom soup",
      "1 cup sour cream",
      "1 onion, chopped",
      "1/2 cup melted butter",
      "1 cup grated cheddar"
    ],
    instructions: [
      "Mix all ingredients in a bowl.",
      "Spread in 9x13 pan. Top with parmesan if desired.",
      "Bake at 350°F for 1 hour."
    ]
  },
  {
    id: "scalloped-potatoes",
    title: "Scalloped Potatoes",
    category: "Side Dishes",
    cookTime: "1 hour",
    temp: "350°F",
    ingredients: [
      "4 cups sliced potatoes",
      "1 onion, sliced",
      "Flour (for dredging)",
      "Butter (for dotting)",
      "Salt and pepper",
      "Milk (enough to cover)",
      "Grated cheese (optional topping)"
    ],
    instructions: [
      "Grease a casserole dish.",
      "Layer potatoes and onions. Sprinkle each layer with flour, salt, and pepper. Dot with butter.",
      "Repeat layers until dish is full.",
      "Pour milk over the potatoes until they are just covered.",
      "Top with grated cheese if desired.",
      "Bake at 350°F for 1 hour or until potatoes are tender."
    ]
  },
  {
    id: "roasted-veg-seasoning",
    title: "Seasoning for Roasted Root Vegetables",
    category: "Side Dishes",
    temp: "325-350°F",
    ingredients: [
      "Potatoes, carrots, turnips (chopped)",
      "Butter (melted)",
      "Seasoning salt, onion salt, garlic salt"
    ],
    instructions: [
      "Toss vegetables with butter and salts.",
      "Roast at 325-350°F for 1 hour, shaking halfway through."
    ]
  },

  // --- CHAPTER 6: DESSERTS ---
  {
    id: "apple-crisp",
    title: "Apple Crisp",
    category: "Desserts & Baked Goods",
    cookTime: "45-55 mins",
    temp: "350°F",
    ingredients: [
      "6-8 medium tart apples (Granny Smith), peeled/cored/sliced",
      "1 Tbsp lemon juice",
      "Filling spices: 1/3 cup sugar, 1 tsp cinnamon, 2 Tbsp flour",
      "Topping: 1 1/4 cups rolled oats",
      "3/4 cup flour",
      "1/2 cup brown sugar",
      "1 tsp cinnamon",
      "1/2 tsp salt",
      "3/4 cup cold butter, cubed"
    ],
    instructions: [
      "Preheat oven to 350°F.",
      "Toss apples with lemon juice, sugar, flour, and cinnamon. Spread in greased baking dish.",
      "Mix oats, flour, brown sugar, cinnamon, and salt.",
      "Cut in cold butter until crumbly.",
      "Sprinkle topping over apples.",
      "Bake 45-55 minutes until bubbling and golden."
    ]
  },
  {
    id: "apple-fritters",
    title: "Apple Fritters",
    category: "Desserts & Baked Goods",
    ingredients: [
      "2 cups flour, 2 Tbsp baking powder, salt, sugar",
      "2 eggs, 1/3 cup milk",
      "5-6 apples, chopped"
    ],
    instructions: [
      "Make batter with dry ingredients, eggs, and milk. Fold in apples.",
      "Drop spoonfuls into hot oil. Fry until golden.",
      "Roll in sugar/cinnamon."
    ]
  },
  {
    id: "apple-pie-bars",
    title: "Apple Pie Bars",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "Pastry: 8 oz cream cheese, 1 cup butter, 3 cups flour, 1 cup sugar",
      "Filling: 10 Granny Smith apples (sliced), sugar, cinnamon",
      "Glaze: 3/4 cup icing sugar, 1 Tbsp water"
    ],
    instructions: [
      "Make dough, chill. Roll half for bottom of 10x15 pan.",
      "Top with apples mixed with sugar/cinnamon. Top with remaining crust.",
      "Bake at 375°F for 35-45 mins. Glaze while warm."
    ]
  },
  {
    id: "aunt-jennies-pudding",
    title: "Aunt Jennie's Pudding",
    category: "Desserts & Baked Goods",
    ingredients: [
      "2.5 cups flour, spices, 3/4 cup shortening, 1 cup molasses, 1 cup milk, raisins, currants"
    ],
    instructions: [
      "Mix batter. Pour into greased mold (juice can).",
      "Steam for 3 hours. Serve with Brown Sugar Sauce."
    ]
  },
  {
    id: "baked-toblerone-cheesecake",
    title: "Baked Toblerone Cheesecake",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "Crust: 1.5 cups chocolate crumbs, butter",
      "Filling: 24 oz cream cheese, 3/4 cup sugar, 3 eggs, 1 cup sour cream, 200g Toblerone (melted)"
    ],
    instructions: [
      "Bake crust 10 mins at 325°F.",
      "Beat filling ingredients, folding in melted chocolate.",
      "Bake in water bath at 325°F for 55-65 mins. Cool gradually."
    ]
  },
  {
    id: "black-white-brownies",
    title: "Black & White Brownies",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1/3 cup butter, 1 cup sugar, 2 eggs",
      "1 cup flour, 1/2 tsp baking powder, vanilla, coconut",
      "2 oz unsweetened chocolate (melted)"
    ],
    instructions: [
      "Mix batter. Divide in half.",
      "Add chocolate to one half.",
      "Drop by spoonfuls into 8x8 pan to marble. Bake at 350°F."
    ]
  },
  {
    id: "blueberry-kuchen",
    title: "Blueberry Kuchen",
    category: "Desserts & Baked Goods",
    temp: "350°F / 325°F",
    ingredients: [
      "Base: 1.5 cups flour, sugar, butter, baking powder, salt, 2 egg yolks",
      "Topping: 2 egg whites, sugar, 2 cups blueberries"
    ],
    instructions: [
      "Mix base ingredients and pat into pan. Bake 15 mins at 350°F.",
      "Beat egg whites and sugar for meringue. Fold in berries.",
      "Spread over base and bake 30 mins at 325°F."
    ]
  },
  {
    id: "butterscotch-cheesecake",
    title: "Butterscotch Cheesecake Bars",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1 pkg butterscotch chips, 1/3 cup margarine, 2 cups graham crumbs, nuts",
      "Filling: 8 oz cream cheese, 1 can sweetened condensed milk, 1 egg, vanilla"
    ],
    instructions: [
      "Melt chips and margarine. Mix with crumbs/nuts. Press half into 9x13 pan.",
      "Beat filling. Pour over base. Top with remaining crumbs.",
      "Bake at 350°F for 30 mins. Chill."
    ]
  },
  {
    id: "butterscotch-pie",
    title: "Butterscotch Pie (Filling)",
    category: "Desserts & Baked Goods",
    ingredients: [
      "1 cup brown sugar, 2 Tbsp flour, pinch salt",
      "1.25 cups milk, 2 egg yolks, 1 Tbsp butter, vanilla"
    ],
    instructions: [
      "Cook sugar/flour/milk until thick.",
      "Temper yolks. Cook 1 min more.",
      "Stir in butter/vanilla. Pour into baked shell."
    ]
  },
  {
    id: "carrot-cake",
    title: "Carrot Cake",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "2 cups sugar, 4 eggs, 1.5 cups oil, 2 cups flour, spices, 2 cups carrots, pineapple, walnuts",
      "Icing: 3 oz cream cheese, 6 Tbsp butter, orange peel, icing sugar"
    ],
    instructions: [
      "Beat sugar, eggs, oil. Add dry ingredients, carrots, pineapple, nuts.",
      "Bake at 350°F for 35-40 mins (9x13). Frost when cool."
    ]
  },
  {
    id: "chipit-bars",
    title: "Chipit Bars",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "2 cups graham crumbs, 1 cup coconut, 1 cup choc chips, 2 tsp baking powder",
      "1 can sweetened condensed milk"
    ],
    instructions: [
      "Mix dry ingredients. Stir in condensed milk.",
      "Press into pan. Bake at 350°F for 25 mins."
    ]
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies (Donnetta's)",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "1 cup butter",
      "3/4 cup brown sugar, 3/4 cup white sugar",
      "2 eggs, 1 tsp vanilla",
      "2.25 cups flour, 1 tsp soda, 1 tsp salt",
      "1 pkg chocolate chips"
    ],
    instructions: [
      "Cream butter and sugars. Add eggs and vanilla.",
      "Add dry ingredients. Stir in chips.",
      "Bake at 375°F for 8-10 minutes."
    ]
  },
  {
    id: "choc-swirl-cheesecake",
    title: "Chocolate Swirl Cheesecake Squares",
    category: "Desserts & Baked Goods",
    temp: "300°F",
    ingredients: [
      "Crust: Graham crumbs, butter, sugar",
      "Filling: 8 oz cream cheese, 3/4 cup evap milk, sugar, egg, flour, vanilla",
      "1/2 cup choc chips (melted)"
    ],
    instructions: [
      "Bake crust in 8x8 pan.",
      "Blend filling. Reserve 1/2 cup and mix with melted chocolate.",
      "Pour plain filling, swirl in chocolate. Bake at 300°F for 45 mins."
    ]
  },
  {
    id: "christmas-fruit-cake",
    title: "Christmas Fruit Cake (Version 2)",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    cookTime: "2.5 - 3 hours",
    ingredients: [
      "6 cups raisins, 6 cups currants, dates, cherries, pineapple, peel, nuts",
      "3 cups shortening, 5 cups brown sugar, 10 eggs (separated), 7 cups flour, spices, 1 cup sour milk"
    ],
    instructions: [
      "Cream fat/sugar/yolks. Add dry ingredients alternating with milk. Fold in stiff whites.",
      "Stir in fruit/nuts. Bake at 325°F for 2.5 - 3 hours."
    ]
  },
  {
    id: "christmas-squares",
    title: "Christmas Squares",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Base: 1/2 cup melted margarine, 2 cups graham crumbs",
      "Filling: 2 pkgs cream cheese, egg, icing sugar, vanilla, cherries"
    ],
    instructions: [
      "Press 2/3 crumbs in 8x8 pan.",
      "Top with cheese filling, then remaining crumbs.",
      "Bake at 350°F for 25 mins."
    ]
  },
  {
    id: "cinnabon-cake",
    title: "Cinnabon Cinnamon Roll Cake",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Cake: 3 cups flour, sugar, milk, 2 eggs, 4 Tbsp melted butter",
      "Swirl: 1 cup butter, 1 cup brown sugar, cinnamon, flour"
    ],
    instructions: [
      "Mix cake batter. Pour into 9x13 pan.",
      "Drop swirl mixture on top and swirl with knife.",
      "Bake at 350°F for 25-30 mins. Glaze while warm."
    ]
  },
  {
    id: "classic-cheesecake",
    title: "Classic New York Style Cheesecake",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "Crust: Graham crumbs, butter",
      "Filling: 4 blocks (32 oz) cream cheese, 1.5 cups sugar, 4 eggs, 2/3 cup sour cream/heavy cream, vanilla"
    ],
    instructions: [
      "Bake crust 10 mins.",
      "Beat cheese and sugar. Add eggs one at a time (do not overmix). Stir in cream.",
      "Bake in water bath at 325°F for 70-90 mins. Turn off oven, cool 1 hr in oven."
    ]
  },
  {
    id: "classic-pound-cake",
    title: "Classic Pound Cake",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "1 cup butter, 1.5 cups sugar, 4 eggs, 1.75 cups flour, vanilla"
    ],
    instructions: [
      "Cream butter/sugar well. Add eggs one at a time.",
      "Fold in flour. Bake at 325°F for 60-75 mins."
    ]
  },
  {
    id: "crispy-chews",
    title: "Crispy Chews (Jean's)",
    category: "Desserts & Baked Goods",
    ingredients: [
      "1/2 cup brown sugar, 2/3 cup corn syrup, 2/3 cup peanut butter",
      "2.5 cups Rice Krispies, 1 cup coconut"
    ],
    instructions: [
      "Heat sugar and syrup. Stir in peanut butter.",
      "Add cereal and coconut. Drop onto wax paper."
    ]
  },
  {
    id: "date-squares",
    title: "Date Squares",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "Filling: Dates, water, brown sugar (cooked until thick)",
      "Base: Flour, oats, brown sugar, butter"
    ],
    instructions: [
      "Press half oat mix in pan. Spread date filling. Top with crumbs.",
      "Bake at 375°F."
    ]
  },
  {
    id: "drumstick-squares",
    title: "Drumstick Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Base: Graham crumbs, nuts, butter, peanut butter (Bake 5 mins)",
      "Filling: Cream cheese, icing sugar, peanut butter, eggs, Cool Whip"
    ],
    instructions: [
      "Beat filling ingredients (except Cool Whip), then fold in Cool Whip.",
      "Pour over base. Freeze. Serve with chocolate sauce."
    ]
  },
  {
    id: "fresh-berry-pie",
    title: "Fresh Berry Pie",
    category: "Desserts & Baked Goods",
    temp: "450°F / 350°F",
    ingredients: [
      "Pastry for double crust",
      "4 cups berries, 3/4 cup sugar, flour, butter"
    ],
    instructions: [
      "Fill crust with berries/sugar. Top with crust.",
      "Bake 450°F for 15 mins, then 350°F for 50 mins."
    ]
  },
  {
    id: "fruit-pizza",
    title: "Fruit Pizza",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Crust: Sugar cookie dough",
      "Sauce: 8 oz cream cheese + 1/2 cup sugar",
      "Topping: Assorted sliced fruit",
      "Glaze: Orange juice, water, sugar, cornstarch (thickened)"
    ],
    instructions: [
      "Press dough onto pizza pan. Bake until golden. Cool.",
      "Spread with cream cheese mixture. Arrange fruit.",
      "Drizzle with cooled glaze. Chill."
    ]
  },
  {
    id: "fudgy-brownies",
    title: "Fudgy Brownies",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1 cup butter (melted), 1 cup cocoa, 2 cups sugar, 4 eggs, 1.3 cups flour, nuts"
    ],
    instructions: [
      "Mix melted butter and cocoa. Add sugar and eggs.",
      "Stir in flour and nuts.",
      "Bake at 350°F for 30-35 mins (9x13 pan)."
    ]
  },
  {
    id: "graham-wafer-squares",
    title: "Graham Wafer Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Graham wafers (whole)",
      "Filling: 1/2 cup milk, 1 cup brown sugar, butter, coconut, walnuts, cherries"
    ],
    instructions: [
      "Line pan with wafers.",
      "Boil filling ingredients. Pour over wafers. Top with more wafers. Chill."
    ]
  },
  {
    id: "gumdrop-cake",
    title: "Gumdrop Cake",
    category: "Desserts & Baked Goods",
    temp: "300°F",
    ingredients: [
      "1 cup shortening, 2 cups sugar",
      "4 eggs",
      "4 cups flour, spices (nutmeg, cloves, cinnamon)",
      "1/2 cup milk",
      "1 lb gumdrops (no black ones), 1 lb raisins"
    ],
    instructions: [
      "Cream shortening and sugar. Add eggs.",
      "Dredge gumdrops/raisins in some flour.",
      "Mix batter. Fold in candy/fruit.",
      "Bake in tube pan at 300°F for 1.5-2 hours."
    ]
  },
  {
    id: "hello-dolly-bars",
    title: "Hello Dolly Bars",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Base: Margarine, graham crumbs",
      "Layers: Coconut, chocolate chips, walnuts, condensed milk"
    ],
    instructions: [
      "Layer ingredients in order in 8x8 pan.",
      "Pour condensed milk over all.",
      "Bake at 350°F."
    ]
  },
  {
    id: "highland-cake",
    title: "Highland Cake (Oatmeal Cake)",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1.5 cups flour, spices, 1 cup boiling water, 1 cup oats, lard, sugar, eggs",
      "Topping: Butter, brown sugar, coconut"
    ],
    instructions: [
      "Soak oats. Mix batter. Bake at 350°F for 40-45 mins.",
      "Top with coconut mixture while warm."
    ]
  },
  {
    id: "homemade-ice-cream",
    title: "Homemade Ice Cream (Noreen's)",
    category: "Desserts & Baked Goods",
    ingredients: [
      "5 eggs, 1.5 cups sugar, 1 can evap milk, 1 pint whipping cream, 2 pints coffee cream, vanilla"
    ],
    instructions: [
      "Cook milk/creams and egg/sugar mixture to make custard (don't boil).",
      "Cool, add vanilla. Churn in ice cream maker."
    ]
  },
  {
    id: "mars-bar-squares",
    title: "Homemade Mars Bars Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "4 Mars bars",
      "1/2 cup butter",
      "2 cups Rice Krispies",
      "1/2 cup coconut",
      "Chocolate chips (for topping)"
    ],
    instructions: [
      "Melt Mars bars with butter.",
      "Stir in Rice Krispies and coconut. Press into pan.",
      "Top with melted chocolate chips."
    ]
  },
  {
    id: "hot-molasses-cake",
    title: "Hot Molasses Cake",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1 cup shortening, 1 cup brown sugar, 1 cup molasses",
      "1 egg",
      "3 cups flour, spices (ginger, cinnamon), 2 tsp soda",
      "1 cup boiling water"
    ],
    instructions: [
      "Cream shortening, sugar, molasses, egg.",
      "Add dry ingredients. Stir in boiling water last.",
      "Bake at 350°F for 35-45 mins."
    ]
  },
  {
    id: "jelly-roll",
    title: "Jelly Roll (Mom's)",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "4 eggs, 1 cup sugar, 3 tsp milk, soda, water, 1 cup flour, baking powder"
    ],
    instructions: [
      "Beat eggs/sugar until thick. Add liquids/dry.",
      "Bake in jelly roll pan 375°F for 12-15 mins.",
      "Roll in sugar-dusted towel while hot. Cool, fill with jam."
    ]
  },
  {
    id: "layered-brownie-squares",
    title: "Layered Brownie Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Baked brownie base (9x13)",
      "Marshmallow fluff layer",
      "Topping: Peanut butter, chocolate chips, Rice Krispies (melted together)"
    ],
    instructions: [
      "Spread fluff over brownies. Spread crispy topping over fluff. Chill."
    ]
  },
  {
    id: "lemon-delight",
    title: "Lemon Delight Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Crust: 2 cups flour, 1 cup butter, pecans (Bake 16 mins)",
      "Filling: Cream cheese, icing sugar, lemon pie filling (canned)"
    ],
    instructions: [
      "Spread cream cheese mix over cooled crust.",
      "Top with lemon pie filling. Chill."
    ]
  },
  {
    id: "lemon-meringue-pie",
    title: "Lemon Meringue Pie",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Filling: Sugar, cornstarch, water, lemon juice/zest, butter, yolks",
      "Meringue: Egg whites, sugar"
    ],
    instructions: [
      "Cook filling until thick. Pour into baked shell.",
      "Top with meringue, sealing edges.",
      "Bake at 350°F until meringue is golden."
    ]
  },
  {
    id: "lemonade-cookies",
    title: "Lemonade Cookies",
    category: "Desserts & Baked Goods",
    temp: "400°F",
    ingredients: [
      "1 cup shortening, 1 cup sugar",
      "2 eggs",
      "3 cups flour, 1 tsp soda",
      "1 can frozen lemonade concentrate"
    ],
    instructions: [
      "Cream fat and sugar. Add eggs.",
      "Add flour and 1/2 cup lemonade concentrate.",
      "Bake at 400°F for 8 mins.",
      "Brush warm cookies with remaining lemonade and sprinkle with sugar."
    ]
  },
  {
    id: "microwave-rice-pudding",
    title: "Microwave Rice Pudding",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Sugar, cornstarch, milk, eggs, raisins, cooked rice"
    ],
    instructions: [
      "Cook milk mix in microwave. Temper eggs.",
      "Add rice/raisins. Microwave until thick."
    ]
  },
  {
    id: "molasses-cookies-shirley",
    title: "Molasses Cookies (Shirley MacIntosh's)",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "3/4 cup butter",
      "1 cup brown sugar",
      "1 egg",
      "1/4 cup molasses",
      "2 cups flour",
      "2 tsp baking soda",
      "Spices: Ginger, cinnamon, cloves (to taste)",
      "Sugar (for rolling)"
    ],
    instructions: [
      "Cream butter and brown sugar.",
      "Add egg and molasses; mix well.",
      "Stir in flour, baking soda, and spices.",
      "Chill dough if too soft.",
      "Roll into balls, then roll in sugar.",
      "Bake at 375°F for 8-10 minutes. Do not overbake; they should be soft."
    ]
  },
  {
    id: "molasses-spice-cake",
    title: "Molasses Spice Cake",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "1 cup lard, 2 cups molasses, 2 eggs, milk, water",
      "4 cups flour, spices, raisins"
    ],
    instructions: [
      "Cream lard. Add wet and dry ingredients alternately.",
      "Bake at 325°F."
    ]
  },
  {
    id: "molasses-taffy",
    title: "Molasses Taffy",
    category: "Desserts & Baked Goods",
    temp: "270°F",
    ingredients: [
      "1.5 cups sugar, 1 cup molasses, butter, soda"
    ],
    instructions: [
      "Boil to 270°F (soft crack). Add soda.",
      "Pour, cool, pull until light. Cut."
    ]
  },
  {
    id: "monster-cookies",
    title: "Monster Peanut Butter Oat Cookies",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1 cup butter, 3 cups peanut butter, 2 cups sugar, 2.5 cups brown sugar, 6 eggs",
      "5 cups oats, 5 cups Rice Krispies, choc chips"
    ],
    instructions: [
      "Mix all ingredients. Drop on sheet.",
      "Bake at 350°F for 8-10 mins."
    ]
  },
  {
    id: "no-bake-blueberry-cheesecake",
    title: "No-Bake Blueberry Cheesecake",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Graham crust",
      "Filling: Cream cheese, sugar, lemon, Cool Whip, fresh blueberries"
    ],
    instructions: [
      "Mix filling, fold in berries. Chill in crust."
    ]
  },
  {
    id: "no-bake-dream-whip",
    title: "No-Bake Dream Whip Cheesecake",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Graham crust",
      "Filling: 8 oz cream cheese, 1 cup sugar, 1 envelope Dream Whip (prepared)"
    ],
    instructions: [
      "Beat cheese and sugar.",
      "Fold in whipped Dream Whip. Chill."
    ]
  },
  {
    id: "no-bake-toblerone",
    title: "No-Bake Toblerone Cheesecake",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Chocolate cookie crust",
      "Filling: 200g Toblerone (melted), 1 cup whipping cream (whipped), 2 blocks cream cheese, sugar"
    ],
    instructions: [
      "Beat cheese and sugar. Add melted chocolate. Fold in whipped cream. Chill."
    ]
  },
  {
    id: "orange-mandarin-cake",
    title: "Orange Mandarin Cake",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Baked white cake (crumbled)",
      "Orange Jello, mandarin oranges, Dream Whip"
    ],
    instructions: [
      "Mix jello (partially set) with whipped topping and oranges.",
      "Fold in cake crumbs. Press into pan. Chill."
    ]
  },
  {
    id: "orange-pineapple-squares",
    title: "Orange Pineapple Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Base: Graham crumbs, butter, sugar (Bake 8 mins)",
      "Filling: Crushed pineapple, orange jello, sugar (cooked). Cool Whip"
    ],
    instructions: [
      "Cook filling, cool. Fold in Cool Whip.",
      "Spread over base. Chill."
    ]
  },
  {
    id: "peanut-butter-balls",
    title: "Peanut Butter Balls",
    category: "Desserts & Baked Goods",
    ingredients: [
      "1 cup peanut butter",
      "1/2 cup butter, softened",
      "2 cups icing sugar",
      "2 cups Rice Krispies",
      "Coating: Chocolate chips and paraffin wax"
    ],
    instructions: [
      "Mix peanut butter and butter together.",
      "Add icing sugar and mix well.",
      "Add Rice Krispies. Roll into balls and chill.",
      "Dip chilled balls into melted chocolate mixture."
    ]
  },
  {
    id: "peanut-butter-cake",
    title: "Peanut Butter Cake",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "Cake: Butter, peanut butter, sugar, egg, flour, sour milk",
      "Frosting: PB, butter, icing sugar, milk"
    ],
    instructions: [
      "Bake cake at 375°F. Frost when cool."
    ]
  },
  {
    id: "peanut-butter-fudge",
    title: "Peanut Butter Fudge",
    category: "Desserts & Baked Goods",
    ingredients: [
      "1 cup white sugar, 1 cup brown sugar, evap milk, butter",
      "Peanut butter, marshmallows, vanilla"
    ],
    instructions: [
      "Boil sugars/milk/butter to soft ball.",
      "Add peanut butter, marshmallows, vanilla. Beat until smooth."
    ]
  },
  {
    id: "pb-rice-krispie-squares",
    title: "Peanut Butter Rice Krispie Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Corn syrup, brown sugar, peanut butter (melted)",
      "Rice Krispies"
    ],
    instructions: [
      "Mix melted syrup mix with cereal. Press into pan."
    ]
  },
  {
    id: "pecan-date-tarts",
    title: "Pecan/Date Tarts",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Pastry shells (unbaked)",
      "Filling: Dates, water, sugar, lemon (cooked)",
      "Icing: Brown sugar, butter, milk, icing sugar"
    ],
    instructions: [
      "Bake shells.",
      "Fill with date mix. Top with icing."
    ]
  },
  {
    id: "praline-pumpkin-pie",
    title: "Praline Topped Pumpkin Pie",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Pumpkin pie filling (spiced)",
      "Topping: Butter, brown sugar, pecans"
    ],
    instructions: [
      "Bake pie. Add topping in last few minutes and broil briefly."
    ]
  },
  {
    id: "pulled-taffy",
    title: "Pulled Taffy",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Brown sugar, molasses, water, vinegar, butter"
    ],
    instructions: [
      "Boil to soft crack stage. Add soda.",
      "Pour onto slab. Pull until light and stiff. Cut."
    ]
  },
  {
    id: "raisin-cookies",
    title: "Raisin Cookies",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "Boiled raisin mixture (raisins + water)",
      "Shortening, sugar, eggs, flour, spices"
    ],
    instructions: [
      "Mix dough with cooled raisins. Bake 325°F."
    ]
  },
  {
    id: "raspberry-pinwheels",
    title: "Raspberry Pinwheels",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Dough: Flour, margarine, sugar, egg",
      "Filling: Jam, coconut, nuts"
    ],
    instructions: [
      "Roll dough, spread filling, roll up log. Chill.",
      "Slice cookies. Bake 350°F."
    ]
  },
  {
    id: "rhubarb-crumble",
    title: "Rhubarb Crumble",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "Filling: 4 cups rhubarb, orange zest, sugar, flour",
      "Topping: Flour, oats, brown sugar, cinnamon, butter"
    ],
    instructions: [
      "Toss filling, place in dish. Top with crumble.",
      "Bake at 325°F for 35 mins."
    ]
  },
  {
    id: "rice-krispies-squares",
    title: "Rice Krispies Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Butter, marshmallows, vanilla, Rice Krispies"
    ],
    instructions: [
      "Melt butter/marshmallows. Stir in cereal. Press into pan."
    ]
  },
  {
    id: "shortbread-dee",
    title: "Shortbread Cookies (Dee's)",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Butter, cornstarch, icing sugar, flour"
    ],
    instructions: [
      "Whip butter. Add dry. Bake 350°F."
    ]
  },
  {
    id: "skor-bars",
    title: "Skor Bars",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Ritz crackers (crushed), condensed milk, Skor bits"
    ],
    instructions: [
      "Mix and bake 20 mins at 350°F."
    ]
  },
  {
    id: "skor-toffee-bars",
    title: "Skor Toffee Chocolate Bars",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Base: Margarine, brown sugar, flour",
      "Topping: Condensed milk, chocolate chips, Skor bits"
    ],
    instructions: [
      "Bake base. Pour heated milk/butter over. Top with chips/bits.",
      "Bake again."
    ]
  },
  {
    id: "strawberry-squares",
    title: "Strawberry Squares",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Base: Crumble crust (coconut, flour, butter)",
      "Filling: Strawberry Jello, frozen strawberries, Dream Whip"
    ],
    instructions: [
      "Bake base. Top with jello/berry mix folded with whip. Chill."
    ]
  },
  {
    id: "ultimate-chocolate-cake",
    title: "Ultimate Chocolate Cake",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "Flour, sugar, cocoa, soda/powder, eggs, milk, oil, boiling water"
    ],
    instructions: [
      "Mix all, add boiling water last (thin batter). Bake 350°F."
    ]
  },
  {
    id: "wades-shortbread",
    title: "Wade's Buttery Shortbread Cookies",
    category: "Desserts & Baked Goods",
    notes: "Melt-in-your-mouth",
    temp: "350°F",
    ingredients: [
      "3/4 cup butter, softened",
      "1/2 cup cornstarch",
      "1/2 cup icing sugar",
      "1 cup flour"
    ],
    instructions: [
      "Whip butter until very light and fluffy.",
      "Sift cornstarch, icing sugar, and flour together.",
      "Gradually blend dry ingredients into the butter.",
      "Drop by spoonfuls onto baking sheet (or pipe).",
      "Bake at 350°F for 10 minutes. Do not let them brown."
    ]
  },
  {
    id: "wades-oatmeal-cookies",
    title: "Wade's Chewy Oatmeal Cookies",
    category: "Desserts & Baked Goods",
    temp: "350°F",
    ingredients: [
      "1/2 cup butter, 1/2 cup brown sugar, 1/2 cup white sugar",
      "1 egg, 1 Tbsp milk, vanilla",
      "1 cup flour, baking powder, soda, salt",
      "1 cup oats, 1/2 cup raisins, 1/2 cup chocolate chips, 1/2 cup coconut"
    ],
    instructions: [
      "Cream butter and sugars. Add egg/milk/vanilla.",
      "Add dry ingredients and mix-ins.",
      "Bake at 350°F for 8-10 minutes."
    ]
  },
  {
    id: "wades-molasses-cookies",
    title: "Wade's Spicy Molasses Cookies",
    category: "Desserts & Baked Goods",
    temp: "375°F",
    ingredients: [
      "3/4 cup butter",
      "1 cup brown sugar",
      "1 egg, 1/4 cup molasses",
      "2 cups flour, 2 tsp soda, salt, ginger, cinnamon, cloves"
    ],
    instructions: [
      "Cream butter and sugar. Add egg and molasses.",
      "Mix in dry ingredients. Chill if soft.",
      "Roll in balls, coat in sugar.",
      "Bake at 375°F for 8-10 mins."
    ]
  },
  {
    id: "war-cake",
    title: "War Cake",
    category: "Desserts & Baked Goods",
    notes: "Boiled Raisin Cake",
    ingredients: [
      "1 package raisins",
      "2 cups brown sugar",
      "2 Tbsp shortening (or butter)",
      "2 cups hot water",
      "1 tsp cinnamon",
      "1 tsp cloves",
      "1 tsp salt",
      "3 cups flour",
      "1 tsp baking soda"
    ],
    instructions: [
      "In a saucepan, combine raisins, sugar, shortening, water, cinnamon, cloves, and salt.",
      "Boil for 5 minutes. Remove from heat and let COOL COMPLETELY.",
      "Once cold, stir in flour and baking soda.",
      "Pour into a greased tube pan or loaf pans.",
      "Bake at 325°F-350°F for approx 45-60 minutes (check with toothpick)."
    ]
  },
  {
    id: "werthers-bars",
    title: "Werther's Caramel Dessert Bars",
    category: "Desserts & Baked Goods",
    ingredients: [
      "Shortbread crust",
      "Topping: Melted Werther's caramels, cream"
    ],
    instructions: [
      "Bake crust. Pour caramel over. Cool."
    ]
  },
  {
    id: "whipped-shortbread",
    title: "Whipped Shortbread (Bernice's)",
    category: "Desserts & Baked Goods",
    temp: "325°F",
    ingredients: [
      "Soft margarine, cornstarch, icing sugar, flour"
    ],
    instructions: [
      "Whip margarine very well. Add dry. Pipe or drop. Bake 325°F."
    ]
  },

  // --- CHAPTER 7: SAUCES & EXTRAS ---
  {
    id: "greek-tzatziki",
    title: "Authentic Greek Tzatziki Sauce",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Greek yogurt, cucumber (grated/drained), garlic, olive oil, vinegar, dill"
    ],
    instructions: [
      "Mix all ingredients. Chill 1-2 hours."
    ]
  },
  {
    id: "big-mac-sauce",
    title: "Big Mac Sauce",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Mayo, relish, mustard, vinegar, paprika, onion/garlic powder"
    ],
    instructions: [
      "Whisk together. Chill."
    ]
  },
  {
    id: "bread-butter-pickles",
    title: "Bread & Butter Pickles",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "16 cups cucumbers, 6 onions, peppers, salt",
      "Brine: 5 cups sugar, 3 cups vinegar, turmeric, celery seed, mustard seed"
    ],
    instructions: [
      "Salt veg and let stand 3 hours. Drain well.",
      "Heat brine to boil. Pour over veg.",
      "Heat to boil point. Jar."
    ]
  },
  {
    id: "brown-sugar-sauce",
    title: "Brown Sugar Sauce",
    category: "Sauces, Condiments & Extras",
    notes: "For Puddings",
    ingredients: [
      "2 tbsp butter",
      "2 tbsp flour",
      "1 cup brown sugar",
      "2 cups boiling water",
      "1 tsp vanilla",
      "1 tsp vinegar"
    ],
    instructions: [
      "Melt butter, blend in flour and sugar.",
      "Add boiling water gradually, stirring constantly.",
      "Cook until thickened.",
      "Remove from heat and add vanilla and vinegar.",
      "Serve hot over steamed pudding or cake."
    ]
  },
  {
    id: "classic-strawberry-jam",
    title: "Classic Strawberry Jam",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Strawberries, lemon juice, pectin, sugar"
    ],
    instructions: [
      "Boil fruit/pectin. Add sugar. Boil hard 1 min. Can."
    ]
  },
  {
    id: "cream-cheese-icing",
    title: "Cream Cheese Icing",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Cream cheese, butter, icing sugar, vanilla"
    ],
    instructions: [
      "Beat until smooth."
    ]
  },
  {
    id: "cucumber-relish",
    title: "Cucumber Relish",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "4-6 sweet red peppers, 10 good size onions, 8-10 large cucumbers",
      "Dressing: 2 lbs brown sugar, 1 tbsp turmeric, 2 tbsp mustard seed, 2 tbsp dry mustard, 2 tbsp flour, 1 quart vinegar"
    ],
    instructions: [
      "Grind peppers, onions, cucumbers. Sprinkle with salt. Stand 2-3 hours. Drain.",
      "Mix dry dressing ingredients with 1 pint vinegar. Heat remaining vinegar with sugar mix.",
      "Add drained vegetables. Simmer 5 mins. Bottle and seal."
    ]
  },
  {
    id: "donair-sauce",
    title: "Donair Sauce (East Coast Style)",
    category: "Sauces, Condiments & Extras",
    notes: "Sweet Garlic Sauce",
    ingredients: [
      "1 can (12 oz) evaporated milk",
      "3/4 - 1 cup white sugar",
      "2 tsp garlic powder",
      "1/4 - 1/3 cup white vinegar"
    ],
    instructions: [
      "Mix evaporated milk, sugar, and garlic powder in a bowl until sugar is dissolved.",
      "Gradually add vinegar while stirring gently.",
      "The mixture will thicken as the vinegar reacts with the milk.",
      "Chill for at least 1 hour before serving. Serve with garlic fingers or donair meat."
    ]
  },
  {
    id: "fish-batter",
    title: "Fish Batter",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Flour, baking powder, salt, eggs, milk"
    ],
    instructions: [
      "Whisk to batter consistency. Dip fish and fry."
    ]
  },
  {
    id: "fudgy-cocoa-frosting",
    title: "Fudgy Cocoa Frosting",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Melted butter, cocoa, milk, vanilla, icing sugar"
    ],
    instructions: [
      "Mix until smooth."
    ]
  },
  {
    id: "garam-masala",
    title: "Garam Masala",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Coriander, cumin, peppercorns, cloves, cardamom, cinnamon, nutmeg"
    ],
    instructions: [
      "Toast spices, cool, grind."
    ]
  },
  {
    id: "green-tomato-chow",
    title: "Green Tomato Chow",
    category: "Sauces, Condiments & Extras",
    notes: "Traditional Maritime Chow",
    ingredients: [
      "2.5 quarts green tomatoes, chopped",
      "2 quarts onions, chopped",
      "1/4 cup salt",
      "Syrup: 1 quart vinegar, 2 cups brown sugar, 1 cup white sugar",
      "1/4 cup pickling spices (tied in cheesecloth bag)"
    ],
    instructions: [
      "Mix tomatoes, onions, and salt. Let stand overnight. Drain well.",
      "In a large pot, combine vinegar, sugars, and spice bag. Bring to a boil.",
      "Add drained vegetables. Simmer until tender (approx 20-30 mins).",
      "Remove spice bag.",
      "Pack into hot sterilized jars and seal."
    ]
  },
  {
    id: "hot-fudge-sauce",
    title: "Hot Fudge Sauce",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Corn syrup, cocoa, salt, butter, vanilla"
    ],
    instructions: [
      "Cook syrup/cocoa. Stir in butter/vanilla."
    ]
  },
  {
    id: "lebanese-garlic-sauce",
    title: "Lebanese Garlic Sauce (Toum)",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Garlic, salt, oil, lemon juice"
    ],
    instructions: [
      "Emulsify garlic paste with oil and lemon juice slowly in processor."
    ]
  },
  {
    id: "mussel-liquid",
    title: "Mussel Steaming Liquid",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Wine, water, salsa, dressing, vinegar (or Italian dressing base)"
    ],
    instructions: [
      "Boil. Add mussels. Steam until open."
    ]
  },
  {
    id: "pumpkin-preserve",
    title: "Pumpkin Preserve",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "3 lbs pumpkin (sliced thin), 3 lbs sugar",
      "1 orange, 2 lemons"
    ],
    instructions: [
      "Layer pumpkin and sugar. Stand 24 hrs.",
      "Boil drained syrup. Add fruit. Cook until thick."
    ]
  },
  {
    id: "ripe-cucumber-pickles",
    title: "Ripe Cucumber Pickles",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "4 large ripe cucumbers",
      "Syrup: 1.5 cups vinegar, 1.5 cups sugar, 1 tsp mustard seed, 1/2 tsp celery seed, 1 tsp turmeric"
    ],
    instructions: [
      "Pare cucumbers, remove seeds, chunk. Salt, stand 3 hrs, drain.",
      "Mix syrup. Add cucumbers. Simmer until translucent.",
      "Pack in jars."
    ]
  },
  {
    id: "steak-marinade",
    title: "Steak Marinade",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "Dry: Steak spice, pepper, onion salt, garlic salt",
      "Wet: 1/2 part BBQ sauce, 1/4 part soy sauce, 1/2 part oil, 1/4 part Worcestershire"
    ],
    instructions: [
      "Apply dry rub to steak. Let stand.",
      "Mix wet ingredients. Marinate steak 12-24 hours."
    ]
  },
  {
    id: "wanda-sweet-sour",
    title: "Wanda's Sweet & Sour Sauce",
    category: "Sauces, Condiments & Extras",
    ingredients: [
      "3/4 cup ketchup",
      "1/4 cup vinegar",
      "1/4 cup H.P. sauce",
      "1 onion, cut up",
      "3 Tbsp brown sugar",
      "1 Tbsp cornstarch"
    ],
    instructions: [
      "Mix all ingredients in a saucepan.",
      "Simmer until thickened. Use to glaze meat."
    ]
  }
];