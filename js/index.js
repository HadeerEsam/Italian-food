import{searchModel} from './model/searchModel.js';
import {displaySearchResults,getSearchValue} from './view/searchView.js';
import {searchBtn } from './elements.js';
import {recipeDetailsModel} from './model/recipeDetailsModel.js';
import {displayRecpieDetails} from './view/recipeDetailsView.js'

function controllSearchResults(){
    let searchItem=getSearchValue();
    let search= new searchModel(searchItem);
    search.getSearchResults(displaySearchResults);
}
searchBtn.addEventListener('click',controllSearchResults);

function controllRecipeDetails(){
    let recipeId=window.location.hash.replace('#','');
    let recipeDetails=new recipeDetailsModel(recipeId);
    recipeDetails.getRecipeDetails(displayRecpieDetails);

}

window.addEventListener('hashchange',controllRecipeDetails);