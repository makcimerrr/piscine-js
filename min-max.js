function max(number1, number2){
    const bool = number1>number2

    if (bool === true){
        return number1
    }else{
        return number2
    }
}

function min(number1, number2){
    const bool = number1>number2

    if (bool === true){
        return number2
    }else{
        return number1
    }
}
console.log(max(4,5))
console.log(min(4,5))