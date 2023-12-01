function ionOut(inputString) {
    const words = inputString.split(/\s+/); // Split the input string into words
    const result = [];
  
    for (const word of words) {
      const match = /ion[^,]*,?/i.exec(word);
  
      if (match && match[0].length > 0) {
        // Remove 'ion' part and add the modified word to the result array
        const modifiedWord = match[0].replace(/ion[^,]*,?/i, );
        result.push(modifiedWord);
      }
    }
  
    return result;
  }
  
  

console.log(ionOut('transfusion'));