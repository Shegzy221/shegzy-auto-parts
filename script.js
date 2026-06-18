const hero = document.querySelector(".hero");

const images = [
"https://images.unsplash.com/photo-1492144534655-ae79c964c9d3?w=1600",
"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600",
"https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=1600"
];

let current = 0;

setInterval(() => {
current++;
if (current >= images.length) {
current = 0;
}

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url(${images[current]})`;

}, 5000);
