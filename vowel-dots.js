function vowelDots(str) {
    let final = str.replace(/[aeiouAEIOU]/g, '$&.');
    return final;
  }
  
  // Example usage:
  const str = 'Hello World';
  const result = vowelDots(str);
  console.log(result);
  