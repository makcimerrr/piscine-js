export function generateLetters() {
  const body = document.querySelector("body");
  const random = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
  };
  for (let i = 0; i < 120; i++) {
    const div = document.createElement("div");
    div.textContent = random();
    const size = 11 + i;
    div.style.fontSize = `${size}px`;

    let weight;
    i < 40 ? (weight = 300) : i < 80 ? (weight = 400) : (weight = 600);
    div.style.fontWeight = weight;
    body.appendChild(div);
  }
}
