const cookie = document.getElementById("cookie");
const allowed = document.getElementById("allowed");
const disallowed = document.getElementById("disallowed");
const full = document.getElementById("full");
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const ageInput = document.getElementById("answertoage")
const checkage = document.getElementById("checkage");

buttonA.addEventListener("click", () => {
    cookie.classList.add("hidden");
    allowed.classList.remove("hidden");
});

checkage.addEventListener("click", () => {
    const age = Number(ageInput.value);

    if (ageInput.value === "" || age < 0) {
        ageInput.focus();
        return;
    }

    if (age >= 18) {
        full.classList.remove("hidden");
        disallowed.classList.add("hidden");
    } else {
        disallowed.classList.remove("hidden");
        full.classList.add("hidden");
    }
});
buttonB.addEventListener("click", () => {
    cookie.classList.add("hidden");
    disallowed.classList.remove("hidden");
});
