function multiply (a,b){
    let result = 0;
    let sign = (a > 0 && b > 0) || (a < 0 && b < 0) ? 1 : -1;
    a = Math.abs(a);
    b = Math.abs(b);
    for (let i = 0; i < a; i++) {
        result += b;
      }
      return result * sign;
}

function divide (a,b){
    let counter = 1;
    let sign = (a > 0 && b > 0) || (a < 0 && b < 0) ? 1 : -1;
    a = Math.abs(a);
    b = Math.abs(b);
    while(a > b) {
        a = a - b
        counter += 1
      }
      return counter * sign;
}

function modulo(a, b) {
    var result = a - b * Math.floor(a / b);
    return (result < 0) ? result + b : result;
}

console.log(multiply(-2,3))
console.log(divide(10,2))
console.log(modulo(5,8))