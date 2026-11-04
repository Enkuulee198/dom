const shufflePalettes = document.getElementById("shuffle-colors");
const textopatronam = document.getElementById("text-1");
const container = document.getElementById("colorContainer");

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
  { name: "purple", hue: 271, saturation: 82 },
  { name: "violet", hue: 258, saturation: 84 },
  { name: "fuchsia", hue: 292, saturation: 82 },
  { name: "emerald", hue: 160, saturation: 76 },
];

let selectedFamilies = ["red", "amber", "emerald", "sky", "violet", "pink"].map(
  (name) => families.find((family) => name === family.name),
);

// HSL TO HEX
const hslToHex = (hue, saturation, light) => {
  const l = light / 100;
  const s = saturation / 100;
  const amplitude = s * Math.min(l, 1 - l);

  const channel = (offset) => {
    const position = (offset + hue / 30) % 12;

    const value =
      l - amplitude * Math.max(-1, Math.min(position - 3, 9 - position, 1));

    return Math.round(255 * value)
      .toString(16)
      .padStart(2, "0");
  };

  return `#${channel(0)}${channel(8)}${channel(4)}`.toUpperCase();
};

// COPY HEX COLOR
container.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-hex]");

  if (!button) return;

  const hex = button.dataset.hex;

  textopatronam.textContent = hex;

  navigator.clipboard.writeText(hex);
});

// RENDER COLORS
const renderColor = () => {
  container.innerHTML = "";

  selectedFamilies.forEach(({ name, hue, saturation }) => {
    const buttonColors = shades
      .map((shade, index) => {
        const hex = hslToHex(hue, saturation, lightness[index]);

        return `
                <button data-hex="${hex}">
                    <div
                        style="background-color: ${hex}"
                        class="w-[113.2px] h-[64px] rounded-[12px] transition-all duration-300 hover:-translate-y-2"
                    ></div>

                    <div class="text-white text-[12px] mt-[10px]">
                        ${shade}
                    </div>

                    <div class="text-[#A1A1AA] text-[9px]">
                        ${hex}
                    </div>
                </button>
            `;
      })
      .join("");

    const template = `
            <div class="space-y-3 mt-3">
                <h2 class="capitalize">${name}</h2>

                <div class="grid grid-cols-10 gap-x-3">
                    ${buttonColors}
                </div>
            </div>
        `;

    container.innerHTML += template;
  });
};

// RANDOM SHUFFLE
const shufflecolors = () => {
  const shuffle1 = [...families];
  selectedFamilies = [];

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * shuffle1.length);

    selectedFamilies.push(shuffle1[randomIndex]);

    shuffle1.splice(randomIndex, 1);
  }

  renderColor();
};

// SHUFFLE BUTTON
shufflePalettes.addEventListener("click", () => {
  shufflecolors();

  renderColor();

  textopatronam.textContent =
    "6 palettes · 60 shades. Click to copy a HEX background color.";

  // Minecraft effect байвал ажиллуулна
  if (typeof playMinecraftEffect === "function") {
    playMinecraftEffect();
  }
});

// INITIAL RENDER
renderColor();
