const startButton = document.getElementById("start-button");
const pauseButton = document.getElementById("pause-button");
const resetButton = document.getElementById("reset-button");
const state = document.getElementById("state");
const displayHours = document.getElementById("hours");
const displayMinutes = document.getElementById("minutes");
const displaySeconds = document.getElementById("seconds");

let intervalid;
let startTime = 0;

const formatTime = (startTime) => {
  const seconds = Math.floor(startTime % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((startTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor(startTime / 3600)
    .toString()
    .padStart(2, "0");

  displaySeconds.textContent = seconds;
  displayMinutes.textContent = minutes;
  displayHours.textContent = hours;
};

const startTimer = () => {
  intervalid = setInterval(() => {
    startTime++;

    formatTime(startTime);
  }, 1000);

  startButton.disabled = true;
  pauseButton.disabled = false;
  resetButton.disabled = false;
  state.textContent = "Running";
  startButton.textContent = "Start";
};

const pauseTime = () => {
  clearInterval(intervalid);

  pauseButton.disabled = true;
  startButton.disabled = false;
  resetButton.disabled = false;
  state.textContent = "Paused";
  startButton.textContent = "Resume";
};

const resetTime = () => {
  clearInterval(intervalid);

  startButton.disabled = false;
  pauseButton.disabled = true;
  resetButton.disabled = true;
  state.textContent = "Ready";
  startButton.textContent = "Start";
};

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTime);
resetButton.addEventListener("click", resetTime);
