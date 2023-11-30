function cutFirst(str){
    let result = ""
    for (let i = 2; i < str.length; i++){
        result = result + str[i]
    }
    return result
}

function cutLast(str){
    let result = ""
    for (let i = 0; i < str.length - 2; i++){
        result = result + str[i]
    }
    return result
}

function cutFirstLast(str){
    let result = ""
    for (let i = 2; i < str.length - 2; i++){
        result = result + str[i]
    }
    return result
}

function keepFirst(str){
    let result = ""
    for (let i = 0; i < 2; i++){
        result = result + str[i]
    }
    return result
}


function keepLast(str){
    let result = ""
    for (let i = str.length - 2; i < str.length; i++){
        result = result + str[i]
    }
    return result
}


function keepFirstLast(str){
    let result1 = ""
    let result2 = ""


    for (let i = 0; i < 2; i++){
        result1 = result1 + str[i]
    }
    for (let i = str.length - 2; i < str.length; i++){
        result2 = result2 + str[i]
    }
    return result1 + result2
}

console.log(cutFirst('abcdef'))
console.log(cutLast('abcdef'))
console.log(cutFirstLast('abcdef'))
console.log(keepFirst('abcdef'))
console.log(keepLast('abcdef'))
console.log(keepFirstLast('abcdef'))