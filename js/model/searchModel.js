export class searchModel
{
    constructor(searchItem){
        this.searchItem=searchItem;
    }

    getSearchResults(callback) {
        let http=new XMLHttpRequest();
        http.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${this.searchItem}`);
        http.send();
        http.addEventListener('readystatechange',function(){
            if(http.readyState ==4 && http.status==200){
                let recipes=JSON.parse(http.response).recipes;
                callback(recipes);
            }
        });
    }



}
  
