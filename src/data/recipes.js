export const categories = [
  { id: "appetizers", name: "Appetizers & Dips", icon: "Utensils" },
  { id: "soups", name: "Soups & Salads", icon: "Soup" },
  { id: "breads", name: "Breads & Muffins", icon: "Croissant" },
  { id: "mains", name: "Main Dishes", icon: "ChefHat" },
  { id: "sides", name: "Side Dishes", icon: "Carrot" },
  { id: "desserts", name: "Desserts & Baked Goods", icon: "CakeSlice" },
  { id: "extras", name: "Sauces & Extras", icon: "Jar" },
];

export const recipes = [
  // --- CHAPTER 1: APPETIZERS ---
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
    id: "spicy-queso",
    title: "Spicy Queso Dip",
    category: "Appetizers & Dips",
    notes: "Perfect for Game Day",
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
    id: "classic-carrot-salad",
    title: "Carrot Salad (Classic)",
    category: "Soups & Salads",
    yields: "Serves 12",
    notes: "Chill overnight",
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

  // --- CHAPTER 3: BREADS ---
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
    id: "selmas-tea-biscuits",
    title: "Selma's Tea Biscuits",
    category: "Breads & Muffins",
    temp: "350°F",
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

  // --- CHAPTER 4: MAINS ---
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
    id: "meat-pie-traditional",
    title: "Meat Pie (Traditional)",
    category: "Main Dishes",
    temp: "450°F / 350°F",
    ingredients: [
      "1 lb pork, cubed",
      "1/2 lb beef, cubed",
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
    id: "sweet-sour-meatballs",
    title: "Sweet & Sour Meatballs",
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
      "Boil in large pot of salted water. They are done when they float (3-5 minutes).",
      "Serve with sautéed onions and bacon/sour cream."
    ]
  },

  // --- CHAPTER 5: SIDES ---
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
    id: "wades-shortbread",
    title: "Wade's Buttery Shortbread",
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

  // --- CHAPTER 7: SAUCES & EXTRAS ---
  {
    id: "donair-sauce",
    title: "Donair Sauce (East Coast Style)",
    category: "Sauces & Extras",
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
    id: "green-tomato-chow",
    title: "Green Tomato Chow",
    category: "Sauces & Extras",
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
    id: "brown-sugar-sauce",
    title: "Brown Sugar Sauce",
    category: "Sauces & Extras",
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
  }
];