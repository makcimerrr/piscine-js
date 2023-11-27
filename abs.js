function isPositive (number){
    return number > 0
}

function abs(number){
    var abs = number * number;
    return Math.sqrt(abs)
}

console.log(isPositive(5))
console.log(abs(-5))