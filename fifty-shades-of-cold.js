import { colors } from "./fifty-shades-of-cold.data.js";
export function generateClasses() {
  const styleTag = document.head.appendChild(document.createElement("style"));
  colors.forEach((color) => {
    styleTag.innerHTML += `.${color} { background: ${color}; }\n`;
  });
}
export function generateColdShades() {
  const body = document.querySelector("body");
  colors.forEach((color) => {
    const isColdShade = /aqua|blue|turquoise|green|cyan|navy|purple/.test(
      color
    );
    if (isColdShade) {
      const shade = document.createElement("div");
      shade.className = color;
      shade.textContent = color;
      body.appendChild(shade);
    }
  });
}
export function choseShade(selectedShade) {
  const divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    colors.forEach((color) => {
      div.classList.remove(color);
      div.classList.add(selectedShade);
    });
  });
}
