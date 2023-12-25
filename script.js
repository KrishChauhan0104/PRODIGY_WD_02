let isRunning = false;
let startTime;
let elapsedMilliseconds = 0; 
let lapCount = 1;

function startPause() {
    const startPauseButton = document.getElementById('startPause');
    if (isRunning) {
        isRunning = false;
        startPauseButton.textContent = 'Start';
        clearInterval(timer);
    } else {
        isRunning = true;
        startPauseButton.textContent = 'Pause';
        startTime = new Date().getTime() - elapsedMilliseconds;
        timer = setInterval(updateDisplay, 100);
    }
}

function lap() {
    if (isRunning) {
        const lapsContainer = document.getElementById('laps');
        const lapTime = formatTime(elapsedMilliseconds);
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCount++}: ${lapTime}`;
        lapItem.classList.add('lap-item');
        lapsContainer.appendChild(lapItem);
    }
}

function reset() {
    isRunning = false;
    clearInterval(timer);
    const startPauseButton = document.getElementById('startPause');
    startPauseButton.textContent = 'Start';
    elapsedMilliseconds = 0;
    lapCount = 1;
    updateDisplay();
    document.getElementById('laps').innerHTML = '';
    
}

function updateDisplay() {
    const elapsedTime = new Date().getTime() - startTime;
    elapsedMilliseconds = elapsedTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('display').textContent = formattedTime;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const millisecondsPart = Math.floor((milliseconds % 1000) / 10);
    return `${padNumber(minutes)}:${padNumber(seconds)}:${padNumber(millisecondsPart)}`;
}

function padNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

let timer;
