const broth = [
    { naam: "miso broth", emoji: "🍲", rating: 5 },
    { naam: "chicken broth", emoji: "🍗", rating: 4 }
];

const noodles = [
    { naam: "ramen", emoji: "🍜", rating: 5 },
    { naam: "udon", emoji: "🥢", rating: 4 }
];

const toppings = [
    { naam: "soft-boiled egg", emoji: "🥚", rating: 5 },
    { naam: "spring onion", emoji: "🌱", rating: 3 }
];

const spiceLevel = [
    { naam: "mild", emoji: "🙂", rating: 2 },
    { naam: "very spicy", emoji: "🌶️", rating: 5 }
];

const button = document.getElementById("button");
const result = document.getElementById("result");

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

button.addEventListener("click", () => {
    const gekozenB = randomItem(broth);
    const gekozenN = randomItem(noodles);
    const gekozenT = randomItem(toppings);
    const gekozenS = randomItem(spiceLevel);

    result.textContent =
        `bro jou eten is: ${gekozenB.emoji} ${gekozenB.naam}, ` +
        `${gekozenN.emoji} ${gekozenN.naam},  ` +
        `${gekozenT.emoji} ${gekozenT.naam}, ` +
        `${gekozenS.emoji} ${gekozenS.naam}!`;
});