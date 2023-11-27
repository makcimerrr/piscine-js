function sign (number){
    const bool = number*(-5)

    if (bool > 0){
        return -1
    }else if (bool < 0) {
        return 1
    }else if (bool === 0){
        return 0
    }
}

console.log(sign(-5))