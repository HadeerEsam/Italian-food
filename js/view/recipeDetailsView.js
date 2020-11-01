import {recipeDetails } from '../elements.js';
export function displayRecpieDetails(recipe){
    let markUp='';
    let ingredients=recipe.ingredients;
      markUp+=`
       <h3 class="p-2">${recipe.title}</h3>
       <img src='${recipe.image_url}' class='w-100'>
       <div id="recipe-ingrediant">
       <ul class="fa-ul d-flex flex-wrap p-4">`;
       
       for(let i=0;i<ingredients.length;i++){
           markUp+=`
           <li class="p-2 w-50 "><span class=fa-li p-2"><i class="fas fa-utensils color-red"></i></span> ${ingredients[i]}</li>
           `
       }
       markUp+=`</ul></div>`;
       recipeDetails.innerHTML=markUp;
    
}