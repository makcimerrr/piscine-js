function pyramid(char, height) {
  let result = "";

  for (let i = 1; i <= height; i++) {
    result += " ".repeat(height - i) + char.repeat(2 * i - 1);
    if (i < height) {
      result += "\n";
    }
  }

  return result;
}

console.log(pyramid("#", 5));
