function triangle(char, height) {
  let result = "";

  for (let i = 1; i <= height; i++) {
    result += " ".repeat(height - i) + char.repeat(2 * i - 1) + "\n";
  }

  return result;
}

// Example usage:
const triangleString = triangle("*", 5);
console.log(triangleString);
