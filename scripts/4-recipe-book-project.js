import { recipes } from "../data/4-recipes.js";

let recipeHTML = ``;

console.log(recipes);

recipes.forEach((recipe) => {

  recipeHTML +=
  `
    <div class="card card-content">
      <img class="image" src="${recipe.image}" alt="Recipe Image">

      <h2 class="recipe-title">${recipe.name}</h2>

      <p class="ingredients">
        <strong>Ingredients:</strong>${recipe.ingredients}
      </p>

      <button class="view-recipe-button">VIEW RECIPE</button>
    </div>
  `;

  console.log(recipeHTML);

  document.querySelector('.recipe-container').innerHTML = recipeHTML;
});