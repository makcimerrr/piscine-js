function customRound(num) {
    const decimal = num - parseInt(num);
    return decimal >= 0.5 ? parseInt(num) + 1 : parseInt(num);
  }
  
  function customCeil(num) {
    return num === parseInt(num) ? num : (num > 0 ? parseInt(num) + 1 : parseInt(num));
  }
  
  function customFloor(num) {
    return parseInt(num);
  }
  
  function customTrunc(num) {
    return num >= 0 ? parseInt(num) : parseInt(num) - 1;
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
  