import { styles } from "./pimp-my-style/pimp-my-style.data.js";

function pimp() {
  var bouton = document.querySelector("button.button");
  var i = 0;
  if (i === styles.length) {
    bouton.classList.toggle("unpimp");
  }

  !bouton.classList.contains("unpimp")
    ? bouton.classList.add(styles[i++])
    : bouton.classList.remove(styles[i--]);

  i === 0 ? bouton.classList.toggle("unpimp") : null;
}

export { pimp };
