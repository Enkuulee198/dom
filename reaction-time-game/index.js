const gameBox = document.getElementById("gameBox");
const besttime = document.getElementById("bestSession");
const lasttime = document.getElementById("lastAttempt");
const gameMessage = document.getElementById("gameMessage");
const gameSubmessage = document.getElementById("gameSubmessage");

let statTime = 0;
let reactionTime = null;
let bestTime = null;
let miss = 0;

let isWaiting = false;
let isRunning = false;
let timeout;

gameBox.addEventListener("click", () => {

    // Ногоон болоогүй байхад дарвал
    if (isWaiting) {
        clearTimeout(timeout);

        isWaiting = false;
        miss++;

        gameBox.classList.remove("bg-green-500");
        gameBox.classList.add("bg-[#27272A]");

        gameMessage.textContent = "Too soon!";
        gameSubmessage.textContent = "Click to try again";

        return;
    }

    // Ногоон болсон үед дарвал
    if (isRunning) {
        reactionTime = Date.now() - statTime;

        lasttime.textContent = `${reactionTime} ms`;

        if (bestTime === null || reactionTime < bestTime) {
            bestTime = reactionTime;
            besttime.textContent = `${bestTime} ms`;
        }

        isRunning = false;

        gameBox.classList.remove("bg-green-500");
        gameBox.classList.add("bg-[#27272A]");

        gameMessage.textContent = "Great job!";
        gameSubmessage.textContent = "Click to try again";

        return;
    }

    // Тоглоом эхлүүлэх
    isWaiting = true;

    gameMessage.textContent = "Wait for green...";
    gameSubmessage.textContent = "Get ready";

    timeout = setTimeout(() => {
        gameBox.classList.remove("bg-[#27272A]");
        gameBox.classList.add("bg-green-500");

        gameMessage.textContent = "CLICK NOW!";
        gameSubmessage.textContent = "Click as fast as you can";

        statTime = Date.now();

        isWaiting = false;
        isRunning = true;

    }, Math.floor(Math.random() * 3000) + 2000);

});