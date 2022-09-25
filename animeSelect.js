logobt=document.querySelector("#logo");
logobt.addEventListener("click", ()=>{
    window.location.href="Homepage";
})


function selectAnimetoPlay(){
const animecontainer = document.querySelectorAll(".movie-list-item");

animecontainer.forEach((anime,i) =>{

  animecontainer[i].addEventListener("click",()=>{
    console.log(animecontainer[i]);
    
    var animename;
    var animetitle;
    
    var getId =animecontainer[i].getAttribute("id");
    animename=getId;
    animetitle=getId;
  

    localStorage.clear();//delete all local storage
    localStorage.setItem('animetobepassed',animename);//set item to be used in 3rdpage.html
    window.location.href="3rdPage";
  })
  
 
})
}
selectAnimetoPlay();