function disableButtons() {
    document.querySelector("#start").disabled = true;
    document.querySelector("#pause").disabled = true;
    document.querySelector("#stop").disabled = true;
};

let newValue = 0;
let userChoice;

const timerSelected = {
    1: 60000,
    5: 300000,
    10: 600000,
    15: 900000,
    20: 1200000
};

function setTimer(minutes) {
    document.querySelector("#start").disabled = false;
    document.querySelector("#timer").innerHTML = (minutes < 10 ? "0" + minutes : minutes) + ":00";
    
    userChoice = minutes;
    newValue = timerSelected[userChoice];
};

let start;
let interval;

function startTimer() {
    document.querySelector("#one").disabled = true;
    document.querySelector("#five").disabled = true;
    document.querySelector("#ten").disabled = true;
    document.querySelector("#fifteen").disabled = true;
    document.querySelector("#twenty").disabled = true;

    document.querySelector("#start").disabled = true;
    document.querySelector("#pause").disabled = false;
    document.querySelector("#stop").disabled = false;

    // Date.now() = give me the milliseconds that have passed, since 1970
    start = Date.now() + 1;
    interval = setInterval(decrement, 1);
};

let timeElapsed;
let dateDifference = 0;

function stopTimer () {
    timeElapsed = 0;
    clearInterval(interval);
    
    document.querySelector("#one").disabled = false;
    document.querySelector("#five").disabled = false;
    document.querySelector("#ten").disabled = false;
    document.querySelector("#fifteen").disabled = false;
    document.querySelector("#twenty").disabled = false;

    document.querySelector("#timer").innerHTML = "00:00";

    document.querySelector("#pause").disabled = true;
    document.querySelector("#stop").disabled = true;
};

let running = true;

function pauseTimer () {
    if (running) {
        timeElapsed += dateDifference;
        running = false;
        document.querySelector("#pause").innerHTML = "Resume";
        clearInterval(interval);
    }
    else {
        newValue = timerSelected[userChoice] - timeElapsed;
        running = true;
        document.querySelector("#pause").innerHTML = "Pause";
        start = Date.now() + 1;
        interval = setInterval(decrement, 1);
    }
};

function decrement() {
    dateDifference = Math.max(0, Date.now() - start);

    let timeRemaining = (newValue - dateDifference) / 1000;
    let timeShownMinutes = Math.floor(timeRemaining / 60);
    let timeShownSeconds = Math.floor(timeRemaining % 60); 

    document.querySelector("#timer").innerHTML =
        (timeShownMinutes < 10 ? "0" + timeShownMinutes : timeShownMinutes) + 
        ":" + (timeShownSeconds < 10 ? "0" + timeShownSeconds : timeShownSeconds);
    
    if(timeShownMinutes + timeShownSeconds == 0) {
        stopTimer();
    }
};