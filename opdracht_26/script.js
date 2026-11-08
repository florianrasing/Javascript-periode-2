const thism = document.getElementById('this');
const that = document.getElementById('that');

const interval = setInterval(() => {
    const hex = '#' + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0');
    that.style.backgroundColor = hex;
    thism.innerHTML = `Current RGB code is: ${that.style.backgroundColor}`;
}, 1000);

// ik wou het met hex doen maar het had er geen zin in dus i guess niet. rgb it is