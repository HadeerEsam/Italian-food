import { searchResults,searchInput} from '../elements.js'


export function displaySearchResults(recipes){
  let markUp='';
  for(let i=0; i<recipes.length;i++){
    markUp+=`
    <div class="media mb-3">

     <img class="align-self-center mr-3 rounded-circle" src="${recipes[i].image_url}" alt="Generic placeholder image">
     <div class="media-body">
      <a href="#${recipes[i].recipe_id}">
       <h6 class="mt-0 ">${recipes[i].title}</h6>
       <p>by <span class=''>${recipes[i].publisher}</span></p>
      </a>
     </div>
    </div> `
  }
  searchResults.innerHTML=markUp;
}

export let getSearchValue=()=>searchInput.value;

