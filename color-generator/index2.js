// const colors = document.getElementById("colors");
// const statusElement = document.getElementById("status");
// const shufflePalettes = document.getElementById("shuffle-colors");
// const colorText = document.getElementById("colorText");
// const textopatronam = document.getElementById("text-1")

// const lightness = [94, 86, 76, 64, 52, 43, 35, 27, 20, 12];
// const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// const families = [
//   { name: "red", hue: 0, saturation: 85 },
//   { name: "lime", hue: 82, saturation: 76 },
//   { name: "sky", hue: 199, saturation: 90 },
//   { name: "gray", hue: 220, saturation: 9 },
//   { name: "zinc", hue: 240, saturation: 5 },
//   { name: "stone", hue: 30, saturation: 6 },
//   { name: "teal", hue: 174, saturation: 72 },
//   { name: "cyan", hue: 189, saturation: 86 },
//   { name: "blue", hue: 217, saturation: 88 },
//   { name: "pink", hue: 330, saturation: 80 },
//   { name: "rose", hue: 347, saturation: 86 },
//   { name: "neutral", hue: 0, saturation: 0 },
//   { name: "amber", hue: 40, saturation: 94 },
//   { name: "orange", hue: 25, saturation: 92 },
//   { name: "yellow", hue: 52, saturation: 90 },
//   { name: "green", hue: 142, saturation: 68 },
//   { name: "slate", hue: 215, saturation: 20 },
//   { name: "indigo", hue: 239, saturation: 80 },
//   { name: "violet", hue: 258, saturation: 84 },
//   { name: "purple", hue: 271, saturation: 82 },
//   { name: "emerald", hue: 160, saturation: 76 },
//   { name: "fuchsia", hue: 292, saturation: 82 },
// ];

// let selectedFamilies = ["red", "amber", "emerald", "sky", "violet", "pink"].map(
//   (name) => families.find((family) => name === family.name),
// );

// const container = document.getElementById("colorContainer");

// const hslToHex = (hue, saturation, light) => {
//   const l = light / 100;
//   const s = saturation / 100;
//   const amplitude = s * Math.min(l, 1 - l);

//   const channel = (offset) => {
//     const position = (offset + hue / 30) % 12;
//     const value =
//       l - amplitude * Math.max(-1, Math.min(position - 3, 9 - position, 1));
//     return Math.round(255 * value)
//       .toString(16)
//       .padStart(2, "0");
//   };

//   return `#${channel(0)}${channel(8)}${channel(4)}`.toUpperCase();
// };

// container.addEventListener("click", (event) => {
//   const button = event.target.closest("button[data-hex]");

//   if (!button) return;
  
//   textopatronam.textContent =button.dataset.hex

//   navigator.clipboard.writeText(button.dataset.hex);

// });

// const renderColor = () => {
//   container.innerHTML = "";

//   selectedFamilies.forEach(({ name, hue, saturation }) => {
//     const buttonColors = shades
//       .map((shade, index) => {
//         const hex = hslToHex(hue, saturation, lightness[index]);

//         return `
//         <button data-hex="${hex}">
//             <div style="background-color: ${hex}" id="colors" class="w-[113.2px] h-[64px] rounded-[12px] transition-all duration-300 hover:-translate-y-2"></div>
//             <div id="status" class="text-[white] text-[12px] mt-[10px]">${shade}</div>
//             <div id="shuffle-colors" class="text-[#A1A1AA] text-[9px]">${hex}</div>
//         </button>
//     `;
//       })
//       .join("");

//     const template = `<div class=" space-y-3 mt-3">
//                         <h2 class="capitalize">${name}</h2>

//                         <div class="grid grid-cols-10 gap-x-3">${buttonColors}</div>
//                     </div>`;

//     container.innerHTML += template;

//   });

// };

// renderColor();

// const shufflecolors = () => {
//     const shuffle1 =[...families] 
//     for (let i =shuffle1.length  ; i >0; i--) {
//         const j= Math.floor(Math.random()* (i+1))
//         [shuffle1[i], shuffle1[j]]=  [shuffle1[j], shuffle1[i]] 
//     }
//     selectedFamilies=shuffle1.slice(0,6)
// }

// shufflePalettes.addEventListener("click", () => {

//     textopatronam.textContent = "6 palettes · 60 shades. Click to copy a HEX background color.";

    
// });