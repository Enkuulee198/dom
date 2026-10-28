const counter = document.getElementById("counter");
const message = document.getElementById("message");
const loadingbar = document.getElementById("loading-bar");

let startTime = null;
const LOADING_DURATION_MS = 5000;
const messages = [
  "peparing your space",
  "Bringing everything",
  "Adding the finishing touches",
  "All set. Welcome in!",
];

const renderProcess = (percentage) => {
  const roundedPercentage = Math.floor(percentage);
  const currentMassage =
    roundedPercentage >= 100
      ? 3
      : roundedPercentage >= 80
        ? 2
        : roundedPercentage >= 35
          ? 1
          : 0;

  counter.textContent = roundedPercentage;
  loadingbar.style.width = `${roundedPercentage}%`;

  message.textContent = messages[currentMassage];
};

const updateProcess = (timestamp) => {
  if (!startTime) startTime = timestamp;

  const percentage = Math.min(
    ((timestamp - startTime) / LOADING_DURATION_MS) * 100,
    100,
  );

  renderProcess(percentage);

  if (percentage < 100) {
    requestAnimationFrame(updateProcess);
  }
};

requestAnimationFrame(updateProcess);
