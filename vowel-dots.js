function vowelDots(str) {
    let vowels = str.replace(/[aeiouAEIOU]/g, '$&.');
    return vowels;
  }
  
  // Example usage:
  const str = 'Hello World';
  const result = vowelDots(str);
  console.log(result);
  