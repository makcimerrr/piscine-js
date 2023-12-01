function ionOut(str) {
    const words = str.split(/\s+/); // Split the input string into words
    const result = [];
  
    for (const word of words) {
      if (/t.*ion[^,]*,?/i.test(word)) {
        // Remove 'ion' part and add the modified word to the result array
        const modifiedWord = word.replace(/ion[^,]*,?/i, '');
        result.push(modifiedWord);
      }
    }
  
    return result;
  }

console.log(ionOut('attention, direction'));
console.log(ionOut('transfu'));