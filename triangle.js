function triangle(char, height) {
  let result = "";

  for (let i = 1; i <= height; i++) {
    result += char.repeat(i) + "\n";
  }

  return result.trim();
}

// Example usage:
console.log(triangle("#", 4));
