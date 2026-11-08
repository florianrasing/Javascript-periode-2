let total = 1500;
let interval;
const display = document.getElementById("displayed");
const start = document.getElementById("start");
const stop = document.getElementById("pause");
const reset = document.getElementById("reset");

function updateDisplay() {
    const minutes = Math.floor(total / 60)
    const seconds = total % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    display.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

updateDisplay();


const starttimer = () => {
    if (interval) {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        total--;
        updateDisplay();

        if (total === 0) {
            clearInterval(interval);
            alert("Time's up!");
            total = 1500;
            updateDisplay();
        }
    }, 1000);
};

const stoptimer = () => clearInterval(interval);

const resettimer = () => {
    clearInterval(interval);
    total = 1500;
    updateDisplay();
}

start.addEventListener("click", starttimer);
stop.addEventListener("click", stoptimer);
reset.addEventListener("click", resettimer);
