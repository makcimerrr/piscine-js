function multiply (a,b){
    let result = 0;
    let sign = (a > 0 && b > 0) || (a < 0 && b < 0) ? 1 : -1;
    a = Math.abs(a);
    b = Math.abs(b);
    for (let i = 0; i < a; i++) {
        result += b;
      }
      if (sign === 1){
        return result
      }else {
        return -(result)
      }
}

function divide (a,b){
    // Algorithme d'Euclide
    let counter = 0;
    let result = 0;
    let sign = (a > 0 && b > 0) || (a < 0 && b < 0) ? 1 : -1;
    a = Math.abs(a);
    b = Math.abs(b);
    while (a >= b) {
        a -= b;
        counter += 1;
    }

      if (sign === 1){
        return counter
      }else {
        return -(counter)
      }
}
function modulo(a, b) {
        let result = 0
        result = a - multiply(Math.floor(divide(a,b)),b) //formule
        return result
}

console.log(multiply(-2,3))
console.log(divide(78,34))
console.log(modulo((-123),(22)))