const colors = document.getElementById("colors");
const statusElement = document.getElementById("status");
const shufflePalettes = document.getElementById("shuffle-colors");
const colorText = document.getElementById("colorText")

const lightness = [94, 86, 76, 64, 52, 43, 35, 27, 20, 12];
const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const families = [
  { name: "red", hue: 0, saturation: 85 },
  { name: "lime", hue: 82, saturation: 76 },
  { name: "sky", hue: 199, saturation: 90 },
  { name: "gray", hue: 220, saturation: 9 },
  { name: "zinc", hue: 240, saturation: 5 },
  { name: "stone", hue: 30, saturation: 6 },
  { name: "teal", hue: 174, saturation: 72 },
  { name: "cyan", hue: 189, saturation: 86 },
  { name: "blue", hue: 217, saturation: 88 },
  { name: "pink", hue: 330, saturation: 80 },
  { name: "rose", hue: 347, saturation: 86 },
  { name: "neutral", hue: 0, saturation: 0 },
  { name: "amber", hue: 40, saturation: 94 },
  { name: "orange", hue: 25, saturation: 92 },
  { name: "yellow", hue: 52, saturation: 90 },
  { name: "green", hue: 142, saturation: 68 },
  { name: "slate", hue: 215, saturation: 20 },
  { name: "indigo", hue: 239, saturation: 80 },
  { name: "violet", hue: 258, saturation: 84 },
  { name: "purple", hue: 271, saturation: 82 },
  { name: "emerald", hue: 160, saturation: 76 },
  { name: "fuchsia", hue: 292, saturation: 82 },
];

let selectedFamilies = ["red", "amber", "emerald", "sky", "violet", "pink"].map((name)=>families.find((family)=>name===family.name));

const container = document.getElementById("colorContainer");

const hslToHex = (hue, saturation, light) => {
  const l = light / 100;
  const s = saturation / 100;
  const amplitude = s * Math.min(l, 1 - l);

  const channel = (offset) => {
    const position = (offset + hue / 30) % 12;
    const value = l - amplitude * Math.max(-1, Math.min(position - 3, 9 - position, 1));
    return Math.round(255 * value)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${channel(0)}${channel(8)}${channel(4)}`.toUpperCase();
};

const renderColor = () => {
    container.innerHTML = "";

    colorText.textContent = selectedFamilies.map(family => family.name).join(" ")

    selectedFamilies.forEach((family) => {
        shades.forEach((shade, index) => {
            const hex = hslToHex(
                family.hue,
                family.saturation,
                lightness[index]
            );

            const button = document.createElement("button");

            button.className = "w-[113.2px] h-[107px] flex items-center flex-col";

            button.innerHTML = `
                <div class="w-[113.2px] h-[64px] rounded-[12px] transition-all duration-300 hover:-translate-y-2"></div>
                <div class="text-white text-[12px] mt-[10px]">${shade}</div>
                <div class="text-[#A1A1AA] text-[9px]">${hex}</div>
            `;

            button.querySelector("div").style.backgroundColor = hex;

            container.appendChild(button);
        });
    });
};

renderColor();



for (let i=0;i<10; i++) {
    const button = document.createElement("button");

    button.className = "w-[113.2px] h-[107px] flex items-center flex-col";

    button.innerHTML = `          
          <div id="colors" class="w-[113.2px] h-[64px] bg-[Red] rounded-[12px] transition-all duration-300 hover:-translate-y-2 "></div>
          <div id="status" class="text-[white] text-[12px] mt-[10px]">100</div>
          <div id="shuffle-colors" class="text-[#A1A1AA] text-[9px]">#FAACK</div>
          `;
    container.appendChild(button);
};

shufflePalettes.addEventListener("click", () => {

    // Shuffle button shake + bounce
    shufflePalettes.classList.remove("bounce-shake");
    void shufflePalettes.offsetWidth;
    shufflePalettes.classList.add("bounce-shake");

    // Random 6 colors
    selectedFamilies = [...families]
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);

    // Render new colors
    renderColor();

    // 60 boxes shake + flip
    const buttons = container.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.style.animationDelay = `${index * 15}ms`;
        button.classList.add("shake-flip");
    });

});