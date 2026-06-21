const hero = document.querySelector(".hero");

const images = [

"https://images.unsplash.com/photo-1492144534655-ae79c964c9d3?w=1600",

"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600",

"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600"

];

let current = 0;

setInterval(() => {

current++;

if(current >= images.length){
current = 0;
}

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),
url(${images[current]})`;

},4000);
function searchProducts(){
let input =
document.getElementById("searchInput").value.toUpperCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

let title =
card.querySelector("h3");

if(title){

if(title.innerText.toUpperCase().indexOf(input)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

}

});

}
window.addEventListener("load",()=>{

document.getElementById("loader")
.style.display="none";

});
