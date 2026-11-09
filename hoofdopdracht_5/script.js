const hongerbar = document.getElementById("hongerbar");
const energiebar = document.getElementById("energiebar");
const gelukbar = document.getElementById("gelukbar");
const honger = document.getElementById("honger");
const energie = document.getElementById("energie");
const geluk = document.getElementById("geluk");
const feedbutton = document.getElementById("feedbutton");
const sleepbutton = document.getElementById("sleepbutton");
const playbutton = document.getElementById("playbutton");
const tamagotchistatus = document.getElementById("tamagotchistatus");


let hongertotal = 100;
let energietotal = 100;
let geluktotal = 100;

const interval = setInterval(() => {
    hongertotal = Math.max(0, hongertotal);
    energietotal = Math.max(0, energietotal);
    geluktotal = Math.max(0, geluktotal);

    if (hongertotal === 0 || energietotal === 0 || geluktotal === 0) {
        clearInterval(interval);
        tamagotchistatus.textContent = "you fucking killed him";
        return;
    }
    const needs = [];


    if (hongertotal > 0) {
        hongertotal--;
    } else {
        hongertotal = 0;
    }
    if (energietotal > 0) {
        energietotal--;
    } else {
        energietotal = 0;
    }
    if (geluktotal > 0) {
        geluktotal--;
    } else {
        geluktotal = 0;
    }

    if (hongertotal < 50) needs.push("eat");
    if (energietotal < 50) needs.push("sleep");
    if (geluktotal < 50) needs.push("play");

    if (needs.length === 0) {
        tamagotchistatus.textContent = "Your Tamagotchi is happy!"
    } else {
        tamagotchistatus.textContent = `Your tamagotchi would like to ${needs.join(" and ")}.`;
    }


    hongerbar.innerHTML = `Honger ` + hongertotal;
    energiebar.innerHTML = `Energie ` + energietotal;
    gelukbar.innerHTML = `Geluk ` + geluktotal;
    honger.style.width = `${hongertotal / 2}%`;
    energie.style.width = `${energietotal / 2}%`;
    geluk.style.width = `${geluktotal / 2}%`;

    if (hongertotal >= 100) {
        honger.style.backgroundColor = "red";
        tamagotchistatus.innerHTML = "Je tamagotchi zit vol";

    } else if (hongertotal < 100 && hongertotal > 60) {
        honger.style.backgroundColor = "black";
    } else {
        honger.style.backgroundColor = "white";
    }
    if (energietotal >= 100) {
        energie.style.backgroundColor = "red";
    } else if (energietotal < 100 && energietotal > 60) {
        energie.style.backgroundColor = "black";
    } else {
        energie.style.backgroundColor = "white";
    }
    if (geluktotal >= 100) {
        geluk.style.backgroundColor = "red";
    } else if (geluktotal < 100 && geluktotal > 60) {
        geluk.style.backgroundColor = "black";
    } else {
        geluk.style.backgroundColor = "white";
    }

    if (hongertotal === 0) {
        tamagotchistatus.innerHTML = "you fucking killed him";
    }
    if (energietotal === 0) {
        tamagotchistatus.innerHTML = "you fucking killed him";
    }
    if (geluktotal === 0) {
        tamagotchistatus.innerHTML = "you fucking killed him";
    }

}, 1000);
feedbutton.addEventListener("click", () => {
    hongertotal += 10;
});
sleepbutton.addEventListener("click", () => {
    energietotal += 10;
});
playbutton.addEventListener("click", () => {
    geluktotal += 10;
});