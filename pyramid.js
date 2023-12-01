function pyramid(char, height) {
  let result = "";

  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat((height - i) * char.length);
    result += spaces + char.repeat(2 * i - 1);

    if (i < height) {
      result += "\n";
    }
  }

  return result;
}

console.log(pyramid("{}", 12));
