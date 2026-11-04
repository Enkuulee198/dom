
const markers = document.getElementById("markers");
const numbers = document.getElementById("numbers");
const second = document.getElementById("second-zuu");
const minute = document.getElementById("minute-zuu");
const hour = document.getElementById("hour-zuu");

// 60 ширхэг минутын зураас үүсгэх
for (let i = 0; i < 60; i++) {
  const marker = document.createElement("div");
  marker.className = "absolute inset-0";
  marker.style.transform = `rotate(${i * 6}deg)`;

  const tick = document.createElement("span");

  const ticktype =
    i % 5 === 0
      ? "w-[2px] h-3 bg-gray-400"
      : "w-px h-1.5 bg-gray-600";

  tick.className = `absolute top-2.5 left-1/2 -translate-x-1/2 ${ticktype}`;

  marker.appendChild(tick);
  markers.appendChild(marker);
}

// 1-12 хүртэлх тоо үүсгэх
for (let i = 1; i <= 12; i++) {
  const number = document.createElement("span");
  number.textContent = i;

  const angle = (i * Math.PI) / 6;

  number.className =
    "absolute -translate-x-1/2 -translate-y-1/2";

  number.style.left = `${50 + 38 * Math.sin(angle)}%`;
  number.style.top = `${50 - 38 * Math.cos(angle)}%`;

  numbers.appendChild(number);
}

// Цагийг ажиллуулах
  const runtime = () => {
  const now = new Date();

  const ms = now.getMilliseconds();
  const seconds = now.getSeconds() + ms / 1000;
  const minutes = now.getMinutes() + seconds / 60;
  const hours = now.getHours() + minutes / 60;

  hour.style.transform = `rotate(${(hours % 12) * 30}deg)`;
  minute.style.transform = `rotate(${minutes * 6}deg)`;
  second.style.transform = `rotate(${seconds * 6}deg)`;

  requestAnimationFrame(runtime);
};

runtime();
