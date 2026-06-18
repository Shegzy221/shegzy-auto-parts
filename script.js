// Automatic background image slider
const hero = document.querySelector(".hero");

const images = [
"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",

"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",

"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1400&q=80"
];

let current = 0;

function changeBackground() {
current++;
if(current >= images.length){
current = 0;
}

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)),url(${images[current]})`;
}

setInterval(changeBackground,5000);
