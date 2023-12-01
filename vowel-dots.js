// Define the regular expression for vowels
const vowels = /[aeiouAEIOU]/g;
function vowelDots(str) { 
    // Use the regular expression to add a dot after each vowel
    let final = str.replace(vowels, '$&.');
  
    return final;
  }
  // Example usage:
  const str = 'Hello World';
  const result = vowelDots(str);
  console.log(result);
  