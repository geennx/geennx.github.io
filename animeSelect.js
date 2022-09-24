logobt=document.querySelector("#logo");
logobt.addEventListener("click", ()=>{
    window.location.href="Homepage.html";
})


function selectAnimetoPlay(){
const animecontainer = document.querySelectorAll(".movie-list-item");

animecontainer.forEach((anime,i) =>{

  animecontainer[i].addEventListener("click",()=>{
    console.log(animecontainer[i]);
    
    var animename;
    var animetitle;
    
    localStorage.clear();//delete all local storage
    localStorage.setItem('animetitle',animetitle);//set item to be used in 3rdpage.html
    localStorage.setItem('animetobepassed',animename);//set item to be used in 3rdpage.html
    window.location.href="3rdPage.html";
  })
  
 
})
}
selectAnimetoPlay();