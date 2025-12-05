// START HELPERS
function setTextById(id, text) {
  var element = document.getElementById(id);
  if (element) {
    element.innerText = text;
  } else {
    console.warn('Element with id "' + id + '" not found in DOM.');
  }
}
// END   HELPERS
// START FUNCTIONS
function pickRandomRecipeExceptId(recipes, id = null) {
  var recipe = recipes[Math.floor(Math.random() * recipes.length)];
  if (id == null || recipe.id != id) {
    return recipe;
  } else {
    return pickRandomRecipeExceptId(recipes, id);
  }
}
function updateReciteData(recipe) {
  document.getElementById("recipe-name").innerText = recipe.name;
  document.getElementById("recipe-description").innerText = recipe.description;
  document.getElementById("difficulty-badge").innerText = recipe.difficulty;
  document.getElementById("category-badge").innerText = recipe.category;
  document.getElementById("rating-average").innerText = recipe.rating.average;
  document.getElementById(
    "rating-quantity"
  ).innerText = `(${recipe.rating.count} reviews)`;
  document.getElementById("preptime").innerText = `${recipe.preptime} mins`;
  document.getElementById("cooktime").innerText = `${recipe.cooktime} mins`;
  document.getElementById("servings").innerText = `${recipe.servings} people`;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("ingredients-list").innerHTML = recipe.ingredients
    .map((ingredient, index) => {
      return `<li class="d-flex align-items-center gap-2-half">
                <div class="d-flex align-items-center justify-content-center rounded-circle text-white fs-8 fw-bold">
                    ${index + 1}
                </div>
                <span class="text-gray-body">${ingredient}</span>
            </li>`;
    })
    .join("");
  document.getElementById("instructions-list").innerHTML = recipe.instructions
    .map((instruction, index) => {
      return `<li class="d-flex align-items-center justify-content-start gap-3">
                <div class="d-flex align-items-center justify-content-center rounded-4 text-white fs-5 fw-bold flex-shrink-0">
                    ${index + 1}
                </div>
                <span class="text-gray-body d-block">${instruction}</span>
            </li>`;
    })
    .join("");

  setTextById("calories", recipe.nutrition.calories);
  setTextById("carbohydrates", recipe.nutrition.carbohydrates);
  setTextById("protein", recipe.nutrition.protein);
  setTextById("fat", recipe.nutrition.fat);
  setTextById("fiber", recipe.nutrition.fiber);
  setTextById("sodium-value", recipe.nutrition.sodium);
  document.getElementById("tips-list").innerHTML = recipe.tips
    .map((tip) => {
      return `
    <div class="alert alert-warning d-flex flex-row align-items-center gap-2-half mb-3 rounded-3">
        <div class="alert-warning-icon">
            <i class="fa-solid fa-circle-check fs-5"></i>
        </div>
        <div>
            <p class="fs-6 fw-normal m-0 text-gray-body">
                ${tip}
            </p>
        </div>
    </div>`;
    })
    .join("");
    if (+recipe.cooktime + +recipe.preptime >= 45) {
        document.getElementById("time-warning").classList.remove("d-none");
    } else {
        document.getElementById("time-warning").classList.add("d-none");
    }
}
// END   FUNCTIONS
// START DATA
var recipes = [
  {
    id: 1,
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    category: "Italian",
    difficulty: "Easy",
    image: "./img/creamy-spaghetti-carbonara.webp",
    rating: {
      average: 4.5,
      count: 120,
    },
    preptime: 15,
    cooktime: 20,
    servings: 4,
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    nutrition: {
      calories: "520kcal",
      carbohydrates: "28g",
      protein: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    id: 2,
    name: "Classic Beef Lasagna",
    description:
      "Layers of pasta, rich meat sauce, and creamy béchamel, baked to perfection.",
    category: "Italian",
    difficulty: "Medium",
    image: "./img/classic-beef-lasagna.webp",
    rating: {
      average: 4.7,
      count: 250,
    },
    preptime: 45,
    cooktime: 60,
    servings: 8,
    ingredients: [
      "12 lasagna noodles",
      "500g ground beef",
      "1 can (400g) crushed tomatoes",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "250g ricotta cheese",
      "100g Parmesan cheese, grated",
      "500ml béchamel sauce",
      "200g mozzarella cheese, shredded",
    ],
    instructions: [
      "Preheat oven to 180°C (350°F). Cook lasagna noodles according to package directions.",
      "Brown the ground beef with onion and garlic. Stir in crushed tomatoes and simmer for 15 minutes.",
      "In a bowl, combine ricotta and Parmesan cheese.",
      "Spread a thin layer of meat sauce in a baking dish. Layer with noodles, ricotta mixture, béchamel, and mozzarella.",
      "Repeat layers until ingredients are used, finishing with béchamel and mozzarella.",
      "Bake for 45-60 minutes, or until bubbling and golden brown.",
    ],
    nutrition: {
      calories: "650kcal",
      carbohydrates: "45g",
      protein: "40g",
      fat: "35g",
      fiber: "4g",
      sodium: "800mg",
    },
    tips: [
      "Let the lasagna rest for 10 minutes after baking before slicing.",
      "Use fresh basil in the meat sauce for extra flavor.",
      "The béchamel sauce should be relatively thick.",
    ],
  },
  {
    id: 3,
    name: "Hearty Lentil Soup (Vegan)",
    description:
      "A nutritious, comforting, and flavorful vegan soup packed with vegetables and lentils.",
    category: "Vegan",
    difficulty: "Easy",
    image: "./img/hearty-lentil-soup.webp",
    rating: {
      average: 4.3,
      count: 95,
    },
    preptime: 15,
    cooktime: 40,
    servings: 6,
    ingredients: [
      "1 tbsp olive oil",
      "1 onion, chopped",
      "2 carrots, diced",
      "2 celery stalks, diced",
      "2 cloves garlic, minced",
      "1 cup brown or green lentils, rinsed",
      "6 cups vegetable broth",
      "1 can (400g) diced tomatoes",
      "1 tsp dried thyme",
      "Salt and pepper to taste",
    ],
    instructions: [
      "In a large pot, heat olive oil over medium heat. Sauté onion, carrots, and celery until softened, about 8 minutes.",
      "Add garlic and cook for 1 minute.",
      "Stir in rinsed lentils, vegetable broth, diced tomatoes, and thyme.",
      "Bring to a boil, then reduce heat and simmer, covered, for 30-40 minutes, or until lentils are tender.",
      "Season with salt and pepper. Serve hot with crusty bread.",
    ],
    nutrition: {
      calories: "280kcal",
      carbohydrates: "45g",
      protein: "15g",
      fat: "5g",
      fiber: "15g",
      sodium: "450mg",
    },
    tips: [
      "Add a splash of lemon juice before serving for brightness.",
      "For a thicker soup, mash a portion of the lentils against the side of the pot.",
      "You can add spinach or kale during the last 10 minutes of simmering.",
    ],
  },
  {
    id: 4,
    name: "Chicken Tikka Masala",
    description:
      "Tender chunks of chicken marinated in yogurt and spices, served in a creamy, vibrant tomato sauce.",
    category: "Indian",
    difficulty: "Medium",
    image: "./img/chicken-tikka-masala.webp",
    rating: {
      average: 4.8,
      count: 310,
    },
    preptime: 30,
    cooktime: 35,
    servings: 4,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tbsp Tikka Masala paste",
      "1 tbsp ginger-garlic paste",
      "1 tbsp vegetable oil",
      "1 onion, chopped",
      "1 can (400ml) crushed tomatoes",
      "1/2 cup heavy cream",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken cubes with yogurt, Tikka Masala paste, and ginger-garlic paste for at least 30 minutes.",
      "In a pan, heat oil and sauté chopped onion until translucent.",
      "Add marinated chicken and cook until browned.",
      "Pour in crushed tomatoes, bring to a simmer, and cook for 15-20 minutes until chicken is cooked through.",
      "Stir in heavy cream and heat through (do not boil).",
      "Garnish with fresh cilantro and serve hot with rice or naan.",
    ],
    nutrition: {
      calories: "580kcal",
      carbohydrates: "15g",
      protein: "55g",
      fat: "35g",
      fiber: "3g",
      sodium: "720mg",
    },
    tips: [
      "For best results, marinate the chicken overnight.",
      "Don't skip the heavy cream—it gives the sauce its signature richness.",
      "Use full-fat plain yogurt for the marinade.",
    ],
  },
  {
    id: 5,
    name: "Classic Chocolate Chip Cookies",
    description:
      "Soft, chewy, and perfectly browned chocolate chip cookies, a timeless American dessert.",
    category: "Dessert",
    difficulty: "Easy",
    image: "./img/classic-chocolate-chip-cookies.webp",
    rating: {
      average: 4.9,
      count: 450,
    },
    preptime: 15,
    cooktime: 10,
    servings: 24,
    ingredients: [
      "2 1/4 cups all-purpose flour",
      "1 tsp baking soda",
      "1 tsp salt",
      "1 cup (2 sticks) unsalted butter, softened",
      "3/4 cup granulated sugar",
      "3/4 cup packed brown sugar",
      "1 tsp vanilla extract",
      "2 large eggs",
      "2 cups (340g) semi-sweet chocolate chips",
    ],
    instructions: [
      "Preheat oven to 190°C (375°F). Combine flour, baking soda, and salt in a small bowl.",
      "In a large bowl, cream together softened butter, white sugar, and brown sugar until smooth.",
      "Beat in vanilla extract and eggs one at a time.",
      "Gradually mix in the dry ingredients, then fold in the chocolate chips.",
      "Drop rounded tablespoons of dough onto ungreased baking sheets.",
      "Bake for 9-11 minutes or until golden brown. Let cool on the baking sheet for 5 minutes before transferring to a wire rack.",
    ],
    nutrition: {
      calories: "180kcal",
      carbohydrates: "25g",
      protein: "2g",
      fat: "9g",
      fiber: "1g",
      sodium: "100mg",
    },
    tips: [
      "Do not overmix the dough once the flour is added.",
      "For thicker cookies, chill the dough for 30 minutes before baking.",
      "A mix of milk and semi-sweet chocolate chips adds complexity.",
    ],
  },
  {
    id: 6,
    name: "Mediterranean Quinoa Salad",
    description:
      "A fresh, light, and healthy salad with fluffy quinoa, fresh vegetables, and a lemon-herb vinaigrette.",
    category: "Salad",
    difficulty: "Easy",
    image: "./img/mediterranean-quinoa-salad.webp",
    rating: {
      average: 4.4,
      count: 80,
    },
    preptime: 15,
    cooktime: 15,
    servings: 4,
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups vegetable broth or water",
      "1 cup chopped cucumber",
      "1 cup halved cherry tomatoes",
      "1/2 cup crumbled feta cheese",
      "1/4 cup chopped red onion",
      "1/4 cup chopped fresh parsley",
      "3 tbsp olive oil",
      "2 tbsp fresh lemon juice",
      "Salt and pepper",
    ],
    instructions: [
      "Cook quinoa in broth/water according to package directions. Fluff with a fork and let cool.",
      "In a small bowl, whisk together olive oil, lemon juice, salt, and pepper for the dressing.",
      "In a large bowl, combine the cooled quinoa, cucumber, tomatoes, feta cheese, red onion, and parsley.",
      "Pour the dressing over the salad and toss gently to coat.",
      "Serve immediately or chill for later. Tastes best after 30 minutes of sitting.",
    ],
    nutrition: {
      calories: "350kcal",
      carbohydrates: "40g",
      protein: "12g",
      fat: "16g",
      fiber: "6g",
      sodium: "400mg",
    },
    tips: [
      "Rinsing the quinoa prevents it from tasting bitter.",
      "Add black olives for an extra Mediterranean touch.",
      "If making ahead, add the feta just before serving.",
    ],
  },
  {
    id: 7,
    name: "Vietnamese Pho (Beef Noodle Soup)",
    description:
      "An aromatic and savory Vietnamese beef broth with rice noodles, tender beef slices, and fresh herbs.",
    category: "Vietnamese",
    difficulty: "Hard",
    image: "./img/vietnamese-pho.webp",
    rating: {
      average: 4.6,
      count: 180,
    },
    preptime: 30,
    cooktime: 180,
    servings: 6,
    ingredients: [
      "1.5 kg beef bones (marrow and knuckles)",
      "1kg beef chuck or brisket",
      "1 large onion, charred",
      "5cm piece ginger, charred",
      "3 star anise",
      "1 cinnamon stick",
      "5 cloves",
      "1 tbsp fish sauce",
      "1 tbsp sugar",
      "400g flat rice noodles",
      "Thinly sliced raw beef steak (for serving)",
      "Garnish: bean sprouts, basil, lime wedges, chili",
    ],
    instructions: [
      "Blanch beef bones for 10 minutes, then rinse. Combine bones, beef chuck, charred onion/ginger, and spices in a large pot with 5L of water.",
      "Bring to a boil, then skim foam and simmer, partially covered, for 3 hours.",
      "Remove beef chuck, let cool, and thinly slice. Strain the broth; discard solids.",
      "Return the broth to the pot, season with fish sauce and sugar.",
      "Cook rice noodles according to package directions.",
      "To serve, place noodles and sliced cooked beef in a bowl. Pour hot broth over. Add raw beef slices (the heat will cook them).",
      "Serve with a platter of garnishes.",
    ],
    nutrition: {
      calories: "400kcal",
      carbohydrates: "45g",
      protein: "35g",
      fat: "10g",
      fiber: "2g",
      sodium: "900mg",
    },
    tips: [
      "Charring the onion and ginger is essential for authentic flavor.",
      "The broth should simmer gently, never boil rapidly.",
      "Use good quality fish sauce for the best flavor.",
    ],
  },
  {
    id: 8,
    name: "Simple Oven-Roasted Salmon",
    description:
      "Flaky, moist salmon fillets roasted with lemon, garlic, and herbs, perfect for a quick dinner.",
    category: "Seafood",
    difficulty: "Easy",
    image: "./img/simple-oven-roasted-salmon.webp",
    rating: {
      average: 4.7,
      count: 150,
    },
    preptime: 10,
    cooktime: 15,
    servings: 2,
    ingredients: [
      "2 salmon fillets (about 170g each)",
      "1 tbsp olive oil",
      "1 lemon, sliced",
      "2 cloves garlic, minced",
      "1 tsp dried dill or fresh rosemary",
      "Salt and black pepper to taste",
    ],
    instructions: [
      "Preheat oven to 200°C (400°F). Line a baking sheet with parchment paper.",
      "Place salmon fillets on the baking sheet. Drizzle with olive oil.",
      "Season the salmon with salt, pepper, and dill/rosemary. Spread minced garlic over the top.",
      "Place lemon slices on and around the salmon fillets.",
      "Bake for 12-15 minutes, or until the salmon is opaque and flakes easily with a fork.",
      "Serve immediately with a side of vegetables.",
    ],
    nutrition: {
      calories: "420kcal",
      carbohydrates: "5g",
      protein: "40g",
      fat: "25g",
      fiber: "1g",
      sodium: "350mg",
    },
    tips: [
      "Don't overcook the salmon; it will dry out quickly.",
      "Use fresh herbs for the best aroma and flavor.",
      "A layer of foil under the parchment paper makes cleanup even easier.",
    ],
  },
  {
    id: 9,
    name: "Traditional Coq au Vin",
    description:
      "French chicken stew braised in red wine (usually Burgundy) with mushrooms, bacon, and herbs.",
    category: "French",
    difficulty: "Medium",
    image: "./img/traditional-coq-au-vin.webp",
    rating: {
      average: 4.6,
      count: 110,
    },
    preptime: 20,
    cooktime: 90,
    servings: 4,
    ingredients: [
      "1.5 kg chicken pieces (thighs and drumsticks)",
      "1 bottle (750ml) dry red wine",
      "150g bacon or lardons, diced",
      "1 large onion, sliced",
      "2 carrots, sliced",
      "200g button mushrooms",
      "2 cloves garlic, crushed",
      "2 tbsp flour",
      "1 cup chicken broth",
      "Thyme and bay leaf",
    ],
    instructions: [
      "Marinate the chicken in red wine, half the onion, garlic, thyme, and bay leaf overnight.",
      "Remove chicken, pat dry, and reserve the marinade. Sear the bacon/lardons until crispy, set aside.",
      "Brown the chicken pieces in the bacon fat, then set aside.",
      "Sauté the remaining onion and carrots. Stir in flour, then gradually add the reserved marinade and chicken broth.",
      "Return the chicken and bacon to the pot. Add mushrooms. Bring to a simmer, cover, and cook gently for 75-90 minutes.",
      "Serve hot, traditionally with boiled potatoes or mashed potatoes.",
    ],
    nutrition: {
      calories: "550kcal",
      carbohydrates: "20g",
      protein: "45g",
      fat: "30g",
      fiber: "3g",
      sodium: "650mg",
    },
    tips: [
      "Use a good quality, dry red wine (Pinot Noir is common).",
      "Browning the chicken thoroughly is key to flavor development.",
      "A heavy-bottomed Dutch oven works best for even cooking.",
    ],
  },
  {
    id: 10,
    name: "Spicy Tofu Stir-Fry",
    description:
      "A quick, fiery stir-fry with crispy pan-fried tofu, broccoli, bell peppers, and a savory-spicy sauce.",
    category: "Asian",
    difficulty: "Easy",
    image: "./img/spicy-tofu-stir-fry.webp",
    rating: {
      average: 4.3,
      count: 75,
    },
    preptime: 15,
    cooktime: 15,
    servings: 3,
    ingredients: [
      "400g extra-firm tofu, pressed and cubed",
      "2 tbsp cornstarch",
      "2 tbsp vegetable oil",
      "1 head of broccoli, chopped",
      "1 red bell pepper, sliced",
      "2 tbsp soy sauce",
      "1 tbsp rice vinegar",
      "1 tbsp chili garlic sauce (or sriracha)",
      "1 tsp brown sugar",
      "1/4 cup water or broth",
    ],
    instructions: [
      "Toss tofu cubes with cornstarch until coated. Heat oil in a large wok or skillet.",
      "Fry the tofu until golden brown and crispy on all sides. Remove from the wok and set aside.",
      "Add broccoli and bell pepper to the wok and stir-fry for 3-5 minutes until tender-crisp.",
      "In a small bowl, whisk together soy sauce, rice vinegar, chili garlic sauce, brown sugar, and water/broth for the sauce.",
      "Return the crispy tofu to the wok. Pour the sauce over the vegetables and tofu.",
      "Toss quickly to coat and cook until the sauce thickens slightly, about 1 minute. Serve immediately over rice.",
    ],
    nutrition: {
      calories: "380kcal",
      carbohydrates: "35g",
      protein: "25g",
      fat: "15g",
      fiber: "8g",
      sodium: "850mg",
    },
    tips: [
      "Pressing the tofu is crucial for crispiness.",
      "Use high heat for the wok to achieve a proper stir-fry.",
      "Prepare all ingredients before you start cooking (mise en place).",
    ],
  },
];
// END   DATA
// Start Initial Load
var recipe = pickRandomRecipeExceptId(recipes);
updateReciteData(recipe);
// End   Initial Load
// START EVENT LISTENERS
document
.getElementById("try-another-btn")
.addEventListener("click", function () {
    recipe = pickRandomRecipeExceptId(recipes, recipe.id);
    updateReciteData(recipe);
    document.getElementById("recipe").scrollIntoView({ behavior: "smooth" });
});
// END   EVENT LISTENERS
