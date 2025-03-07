const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
    "gray",
    "black",
    "white",
    "cyan",
    "magenta",
    "lime",
    "teal",
    "indigo",
    "violet",
    "maroon",
    "navy",
    "olive",
    "silver",
    "gold",
    "coral",
    "crimson",
    "plum",
    "chocolate",
    "khaki",
    "lavender",
    "salmon",
    "turquoise"
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}