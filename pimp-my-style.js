import { styles } from "./pimp-my-style.data.js";
var counter = 0;

function pimp() {
  var button = document.querySelector("button.button");

  !button.classList.contains("unpimp")
    ? button.classList.add(styles[counter++])
    : button.classList.remove(styles[counter--]);
  counter === 0 ? button.classList.toggle("unpimp") : null;

  counter === styles.length ? button.classList.toggle("unpimp") : null;
}

export { pimp };
