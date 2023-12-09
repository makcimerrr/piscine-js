import { styles } from "./pimp-my-style.data.js";
let currentStyleIndex = 0;
export function pimp() {
  const button = document.querySelector(".button");
  if (currentStyleIndex < styles.length) {
    button.classList.add(styles[currentStyleIndex]);
    currentStyleIndex++;
    if (currentStyleIndex == styles.length) {
      button.classList.toggle("unpimp");
    }
  } else {
    button.classList.toggle("unpimp");
    const lastStyle = button.classList.item(button.classList.length - 1);
    button.classList.remove(lastStyle);
    if (lastStyle == "one") {
      currentStyleIndex = 0;
      button.classList.toggle("unpimp");
    }
    button.classList.toggle("unpimp");
  }
}
