function customRound(num) {
    const decimal = num - (num | 0);
    return decimal >= 0.5 ? (num | 0) + 1 : num | 0;
  }
  
  function customCeil(num) {
    return num === (num | 0) ? num : (num > 0 ? (num | 0) + 1 : num | 0);
  }
  
  function customFloor(num) {
    return num | 0;
  }
  
  function customTrunc(num) {
    return num >= 0 ? num | 0 : -(Math.abs(num) | 0);
  }
  
// Testing the functions
console.log(customRound(4.49));  // Output: 4
console.log(customRound(4.5));   // Output: 5
console.log(customCeil(4.01));   // Output: 5
console.log(customCeil(4.99));   // Output: 5
console.log(customFloor(4.9));   // Output: 4
console.log(customFloor(4.01));  // Output: 4
console.log(customTrunc(4.9));   // Output: 4
console.log(customTrunc(-4.1));  // Output: -4
  
  
  

  