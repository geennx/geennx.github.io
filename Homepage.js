logobt=document.querySelector("#logo");
var audio = document.createElement("audio");

logobt.addEventListener("click", ()=>{
    window.location.href="Homepage.html";
    console.log("hello");
})





function featuredanimePLAYER(){
let trailer1=document.querySelector(".featured-anime-container");
trailer1.addEventListener("mouseover", ()=>{

  playtrailer=document.querySelector(".trailer1");
  playtrailer.style.opacity="1";
  playtrailer.play();
})
}

/*const trailer = document.querySelectorAll(".trailer2"); CONST
for (const number of trailer) {

    number.addEventListener("mouseover", autoplayVideo);
    function autoplayVideo(){
        number.play();
    }
    number.addEventListener("mouseleave", ()=>{
        number.pause();
        number.currentTime = 0;
        number.load();
    })
  }*/

/*const trailer = document.querySelectorAll(".trailer2"); LET
for(let i=0; i<trailer.length; i++){
    trailer[i].addEventListener("mouseover", autoplayVideo);
    function autoplayVideo(){
        trailer[i].play();
    }
    trailer[i].addEventListener("mouseleave", ()=>{
        trailer[i].pause();
        trailer[i].currentTime = 0;
        trailer[i].load();
  })
  }
*/

function animestrailer(){
const trailers = document.querySelectorAll(".trailer2");
trailers.forEach((trailer, i) =>{
  trailer.addEventListener("mouseover", autoplayVideo);
    function autoplayVideo(){
        trailer.play();
    }
    trailer.addEventListener("mouseleave", ()=>{
        trailer.pause();
        trailer.currentTime = 0;
        trailer.load();
})
})
}

function leftrightarrow(){
let totalclicks=0;
const movieLists = document.querySelectorAll(".movie-list");
const arrowleft = document.querySelectorAll(".arrowleft");
const reset = document.querySelectorAll(".movie-list-container");

reset.forEach((rese,i) =>{
rese.addEventListener("mouseleave",() =>{
  totalclicks=0;
  movieLists[i].style.transform = "translateX(0)";
  const invileft=document.querySelectorAll(".arrowleft");
  invileft.forEach((invilef,i ) =>{
    invilef.style.opacity="0";
  })
})
})

arrowleft.forEach((arrowlef, i) => {
  

    arrowlef.addEventListener("click", () => {
      console.log(totalclicks);
      if(totalclicks >0){
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value + 330
        }px)`;
        totalclicks--;
        if(totalclicks==0){
          arrowlef.style.opacity="0";
        }
      }
      
      else{
        movieLists[i].style.transform = "translateX(0)";
       totalclicks=0;
      }
      })   
  });


const arrowright = document.querySelectorAll(".arrowright");
arrowright.forEach((arrowrigh, i) => {

    arrowrigh.addEventListener("click", () => {
      console.log(totalclicks);
      if (totalclicks<3) {
        movieLists[i].style.transform = `translateX(${
          movieLists[i].computedStyleMap().get("transform")[0].x.value - 330
        }px)`;
        totalclicks++;
        
        const invileft=document.querySelectorAll(".arrowleft");
        invileft.forEach((invilef,i ) =>{
          invilef.style.opacity="0.7";
        })
      } 
      
      else{
        movieLists[i].style.transform = "translateX(0)";
        totalclicks=0;

        const invileft=document.querySelectorAll(".arrowleft");
        invileft.forEach((invilef,i ) =>{
          invilef.style.opacity="0";
        })
        
      }
    });
  });
}
featuredanimePLAYER();
animestrailer();
leftrightarrow();


