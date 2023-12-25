let timer;
let isRunning = false;
let startTime;
let laps = [];

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        startTime = new Date().getTime();
        timer = setInterval(updateDisplay, 1000);
        document.getElementById('startBtn').textContent = 'Pause';
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('startBtn').textContent = 'Resume';
    }
}

function updateDisplay() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('display').textContent = formattedTime;
}

    function formatTime(time) {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return (
            String(minutes).padStart(2, '0') +
            ':' +
            String(seconds).padStart(2, '0') +
            ':' +
            String(milliseconds).padStart(2, '0')
        );
    }
    

function recordLap() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    laps.push(formattedTime);

    const lapsList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = `Lap ${laps.length}: ${formattedTime}`;
    lapsList.appendChild(lapItem);
}

function resetStopwatch() {
    isRunning = false;
    clearInterval(timer);
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startBtn').textContent = 'Start';
    laps = [];
    document.getElementById('laps').innerHTML = '';
}
