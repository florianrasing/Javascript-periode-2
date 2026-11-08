let total = 2;
const display = document.getElementById("displayed");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

function updateDisplay() {
    const minutes = Math.floor(total / 60)
    const seconds = total % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

updateDisplay();


start.onclick = function () {
    if (total < 1 || timer) return;

    timer = setInterval(() => {
        total--;
        updateDisplay();

        if (total <= 0) {
            total = 0;
            updateDisplay();
            clearInterval(timer);
            timer = null;
        }
    }, 1000);
};