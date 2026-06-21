// Hero background slider
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
`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),
url(${images[current]})`;

},5000);


// Animated counters
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const updateCounter=()=>{

const target =
parseInt(counter.innerText);

let currentValue =
parseInt(counter.getAttribute("data-count")) || 0;

const increment =
Math.ceil(target/100);

if(currentValue < target){

currentValue += increment;

counter.setAttribute("data-count",currentValue);

counter.innerText =
currentValue + "+";

setTimeout(updateCounter,30);

}else{

counter.innerText =
target + "+";

}

};

updateCounter();

});
