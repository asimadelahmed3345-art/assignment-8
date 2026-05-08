const recipes = [
    {
        title: "Chicken Stir-Fry",
        desc: "Quick and healthy stir-fry with chicken breast and colorful vegetables.",
        image: "imgs/image-3.jpg", 
        rating: "4.5",
        reviews: "(324 reviews)",
        prep: "15 min",
        cook: "15 min",
        servings: "4 people",
        difficulty: "Easy",
        cuisine: "Asian",
        ingredients: [
            "500g chicken breast, sliced",
            "2 bell peppers, sliced",
            "1 broccoli head, florets",
            "2 carrots, julienned",
            "3 tablespoons soy sauce",
            "2 tablespoons oyster sauce",
            "1 tablespoon sesame oil",
            "2 cloves garlic, minced",
            "Fresh ginger, grated"
        ],
        instructions: [
            "Heat sesame oil in a large wok or skillet over high heat.",
            "Add chicken slices, garlic, and ginger; stir-fry until cooked through.",
            "Toss in the vegetables (carrots, broccoli, peppers) and cook for 5 minutes.",
            "Pour in the soy sauce and oyster sauce, mixing thoroughly.",
            "Serve hot directly over white or jasmine rice."
        ],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-solid fa-fire" },
            { name: "Protein", value: "34g", icon: "fa-solid fa-dumbbell" },
            { name: "Carbohydrates", value: "18g", icon: "fa-solid fa-wheat-awn" },
            { name: "Fat", value: "11g", icon: "fa-solid fa-droplet" },
             {  name: "Fiber", value: "5g", icon: "fa-solid fa-seedling" },
            { name: "Sodium", value: "840mg", icon: "fa-solid fa-cube" }
        ],
        tips: [
            "Cut all ingredients before starting to cook",
            "Keep heat high for authentic stir-fry texture",
            "Don't overcrowd the wok or vegetables will steam",
            "Add cashews or peanuts for extra crunch"
        ]
    },
    {
        title: "Teriyaki Chicken Bowl",
        desc: "Sweet and savory chicken over rice with vegetables.",
        image: "imgs/image-2.jpg", 
        rating: "4.7",
        reviews: "(367 reviews)",
        prep: "15 min",
        cook: "20 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Asian",
        ingredients: [
            "400g chicken thighs, sliced",
            "1/2 cup teriyaki sauce",
            "2 cups cooked rice",
            "1 broccoli head, florets",
            "1 carrot, julienned"
        ],
        instructions: [
            "Slice the ciabatta bread horizontally.",
            "Spread a generous layer of pesto on both inner sides.",
            "Arrange alternating slices of tomato and mozzarella.",
            "Top with basil leaves, drizzle olive oil, and close."
        ],
        nutrition: [
            { name: "Calories", value: "540 kcal", icon: "fa-solid fa-fire" },
            { name: "Protein", value: "42g", icon: "fa-solid fa-dumbbell" },
            { name: "Carbohydrates", value: "58g", icon: "fa-solid fa-wheat-awn" },
            { name: "Fat", value: "14g", icon: "fa-solid fa-droplet" },
            {  name: "Fiber", value: "4g", icon: "fa-solid fa-seedling" },
            { name: "Sodium", value: "1240mg", icon: "fa-solid fa-cube" }
        ],
        tips: [
            "Use thick balsamic glaze for extra sweetness",
            "Squeeze excess water out of the tomatoes before putting them in"
        ]
    },
     {
        title: "Beef Tacos",
        desc: "Flavorful Mexican tacos with seasoned ground beef.",
        image: "imgs/image-4.jpg", 
        rating: "4.6",
        reviews: "(278 reviews)",
        prep: "15 min",
        cook: "20 min",
        servings: "4 people",
        difficulty: "Easy",
        cuisine: "American",
        ingredients: [
            "500g ground beef",
            "8 taco shells",
            "1 onion, diced",
            "2 tablespoons taco seasoning",
            "Shredded lettuce",
            "Diced tomatoes",
            "Shredded cheddar cheese",
            "Sour cream",
            "Salsa"
        ],
        instructions: [
            "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
            "Add diced onion and cook until softened, about 5 minutes.",
            "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
            "Warm taco shells according to package directions.",
            "Fill each shell with seasoned beef.",
            "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately."
        ],
        nutrition: [
            { name: "Calories", value: "420 kcal", icon: "fa-solid fa-fire" },
            { name: "Protein", value: "26g", icon: "fa-solid fa-dumbbell" },
            { name: "Carbohydrates", value: "32g", icon: "fa-solid fa-wheat-awn" },
            { name: "Fat", value: "20g", icon: "fa-solid fa-droplet" },
            {  name: "Fiber", value: "4g", icon: "fa-solid fa-seedling" },
            { name: "Sodium", value: "780mg", icon: "fa-solid fa-cube" }
        ],
        tips: [
            "Drain excess fat from beef for healthier tacos",
            "Warm shells in oven for better texture",
            "Prepare all toppings before cooking beef",
            "Use ground turkey for a lighter option"
        ]
    },
     {
        title: "Shrimp Scampi",
        desc: "Garlicky shrimp in white wine butter sauce.",
        image: "imgs/image-5.jpg", 
        rating: "4.8",
        reviews: "(356 reviews)",
        prep: "10 min",
        cook: "15 min",
        servings: "2 people",
        difficulty: "Easy",
        cuisine: "Seafood",
        ingredients: [
            "400g large shrimp, peeled",
            "300g linguine pasta",
            "6 cloves garlic, minced",
            "1/2 cup white wine",
            "4 tablespoons butter",
            "2 tablespoons olive oil",
            "Fresh parsley, chopped",
            "Lemon juice and zest",
            "Red pepper flakes",
        ],
        instructions: [
            "Cook linguine according to package directions. Reserve 1 cup pasta water.",
            "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
            "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
            "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
            "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
            "Garnish with parsley, lemon zest, and serve immediately."
        ],
        nutrition: [
            { name: "Calories", value: "520 kcal", icon: "fa-solid fa-fire" },
            { name: "Protein", value: "36g", icon: "fa-solid fa-dumbbell" },
            { name: "Carbohydrates", value: "54g", icon: "fa-solid fa-wheat-awn" },
            { name: "Fat", value: "18g", icon: "fa-solid fa-droplet" },
            {  name: "Fiber", value: "3g", icon: "fa-solid fa-seedling" },
            { name: "Sodium", value: "620mg", icon: "fa-solid fa-cube" }
        ],
        tips: [
            "Don't overcook shrimp - they cook very quickly",
            "Use good quality white wine for best flavor",
            "Toss pasta in sauce for maximum flavor absorption",
            "Add extra lemon for bright, fresh taste"
        ]
    },
     {
        title: "French Onion Soup",
        desc: "Rich beef broth with caramelized onions and melted cheese.",
        image: "imgs/image-6.jpg", 
        rating: "4.7",
        reviews: "(267 reviews)",
        prep: "15 min",
        cook: "60 min",
        servings: "4 people",
        difficulty: "Intermediate",
        cuisine: "Mediterranean",
        ingredients: [
            "4 large onions, thinly sliced",
            "4 tablespoons butter",
            "1 liter beef broth",
            "1/2 cup white wine",
            "2 bay leaves",
            "Fresh thyme",
            "Baguette slices",
            "200g Gruyère cheese, grated"
        ],
        instructions: [
            "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
            "Add white wine and deglaze the pot, scraping up brown bits.",
            "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
            "Meanwhile, toast baguette slices until golden.",
            "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
            "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot."
        ],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-solid fa-fire" },
            { name: "Protein", value: "18g", icon: "fa-solid fa-dumbbell" },
            { name: "Carbohydrates", value: "36g", icon: "fa-solid fa-wheat-awn" },
            { name: "Fat", value: "18g", icon: "fa-solid fa-droplet" },
            {  name: "Fiber", value: "4g", icon: "fa-solid fa-seedling" },
            { name: "Sodium", value: "980mg", icon: "fa-solid fa-cube" }
        ],
        tips: [
            "Patience is key - don't rush the onion caramelization",
            "Use good quality beef broth for best flavor",
            "Gruyère can be substituted with Swiss cheese",
            "Watch carefully when broiling to avoid burning"
        ]
    },
     {
        title: "Vegetable Curry",
        desc: "Hearty vegetarian curry with coconut milk.",
        image: "imgs/image-7.jpg", 
        rating: "4.6",
        reviews: "(289 reviews)",
        prep: "20 min",
        cook: "30 min",
        servings: "4 people",
        difficulty: "Easy",
        cuisine: "Asian",
        ingredients: [
            "2 potatoes, cubed",
            "1 cauliflower, florets",
            "2 carrots, sliced",
            "1 can chickpeas",
            "400ml coconut milk",
            "3 tablespoons curry powder",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "Fresh spinach"
        ],
        instructions: [
            "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
            "Add potatoes and carrots, cook for 5 minutes.",
            "Pour in coconut milk and 1 cup water. Bring to simmer.",
            "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
            "Stir in fresh spinach and cook until wilted.",
            "Serve hot over basmati rice or with naan bread."
        ],
        nutrition: [
            { name: "Calories", value: "380 kcal", icon: "fa-solid fa-fire" },
            { name: "Protein", value: "14g", icon: "fa-solid fa-dumbbell" },
            { name: "Carbohydrates", value: "48g", icon: "fa-solid fa-wheat-awn" },
            { name: "Fat", value: "16g", icon: "fa-solid fa-droplet" },
            {  name: "Fiber", value: "12g", icon: "fa-solid fa-seedling" },
            { name: "Sodium", value: "480mg", icon: "fa-solid fa-cube" }
        ],
        tips: [
            "Add vegetables in order of cooking time needed",
            "Use good Adjust curry powder amount to taste",
            "Use full-fat coconut milk for creamier curry",
            "Add protein like tofu or paneer if desired"
        ]
    }
];

var currentRecipeTitle = "";

function displayRecipe(recipe) {
    if (!recipe) return;

    document.getElementById("meal-title").textContent = recipe.title;
    document.getElementById("meal-desc").textContent = recipe.desc;
    document.getElementById("meal-img").src = recipe.image;
    document.getElementById("meal-rating").textContent = recipe.rating;
    document.querySelector(".reviews-count").textContent = recipe.reviews;
    document.getElementById("prep-time").textContent = recipe.prep;
    document.getElementById("cook-time").textContent = recipe.cook;
    document.getElementById("servings").textContent = recipe.servings;
    document.getElementById("tag-difficulty").textContent = recipe.difficulty;
    document.getElementById("tag-cuisine").textContent = recipe.cuisine;

    var ingContainer = document.getElementById("ingredients-container");
    ingContainer.innerHTML = "";
    recipe.ingredients.forEach((ing, index) => {
        var li = document.createElement("li");
        li.innerHTML = `<span class="ing-number">${index + 1}</span> <span>${ing}</span>`;
        ingContainer.appendChild(li);
    });

    var stepsContainer = document.getElementById("steps-container");
    stepsContainer.innerHTML = "";
    recipe.instructions.forEach((step, index) => {
        var li = document.createElement("li");
        li.innerHTML = `<span class="step-number">${index + 1}</span> <p>${step}</p>`;
        stepsContainer.appendChild(li);
    });

    var nutContainer = document.getElementById("nutrition-container");
    nutContainer.innerHTML = "";
    recipe.nutrition.forEach(nut => {
        const item = document.createElement("div");
        item.className = "nutrition-item";
        item.innerHTML = `
            <div class="nut-info">
                <i class="${nut.icon}"></i>
                <span>${nut.name}</span>
            </div>
            <strong>${nut.value}</strong>
        `;
        nutContainer.appendChild(item);
    });

    var tipsContainer = document.getElementById("tips-container");
    tipsContainer.innerHTML = "";
    recipe.tips.forEach(tip => {
        var item = document.createElement("div");
        item.className = "tip-item";
        item.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${tip}</span>`;
        tipsContainer.appendChild(item);
    });

    currentRecipeTitle = recipe.title;
}

document.getElementById("next-recipe-btn").addEventListener("click", () => {
    var randomIndex;
    var selectedRecipe;
    var isSameRecipe = true;

    while (isSameRecipe) {
        randomIndex = Math.floor(Math.random() * recipes.length);
        selectedRecipe = recipes[randomIndex];

        if (selectedRecipe.title !== currentRecipeTitle) {
            isSameRecipe = false; 
        }
    }
    displayRecipe(selectedRecipe);
});

var tabButtons = document.querySelectorAll(".tab-item");
var tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        var targetId = button.getAttribute("data-target");
        if (!targetId) return;

        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabContents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");
        document.getElementById(targetId).classList.add("active");
    });
});

window.addEventListener("DOMContentLoaded", () => {
    displayRecipe(recipes[0]); 
});
