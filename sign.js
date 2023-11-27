function sign(number){
    const bool = number*(-5)

    if (bool > 0){
        return -1
    }else if (bool < 0) {
        return 1
    }else if (bool === 0){
        return 0
    }
}

function sameSign(number1, number2){
    const bool = number1*number2

    if (bool > 0){
        return true
    }else {
        return false
    }
}

console.log(sign(-5))