const array = [
    { naam: "Bulbasaur", type: "Grass", powerlevel: 2 },
    { naam: "Charmander", type: "Fire", powerlevel: 3 },
    { naam: "Squirtle", type: "Water", powerlevel: 2 },
    { naam: "Pikachu", type: "Electric", powerlevel: 4 },
    { naam: "Gengar", type: "Ghost", powerlevel: 5 }
];

const button = document.getElementById("button");
const IT = document.getElementById("IT");
const ITT = document.getElementById("ITT");
const ITTT = document.getElementById("ITTT");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    IT.innerHTML = array[randomIndex].naam;
    ITT.innerHTML = array[randomIndex].type;
    ITTT.innerHTML = array[randomIndex].powerlevel;
});
