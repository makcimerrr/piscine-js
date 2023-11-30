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
    if (str.length >= 2){
        for (let i = 0; i < 2; i++){
            result = result + str[i]
        }
        return result
    }else {
        return str
    }
}


function keepLast(str){
    let result = ""
    if (str.length >= 2){
        for (let i = str.length - 2; i < str.length; i++){
            result = result + str[i]
        }
        return result
    }else {
        return str
    }
}


function keepFirstLast(str){
    let result1 = ""
    let result2 = ""

    if (str.length > 3){
        for (let i = 0; i < 2; i++){
            result1 = result1 + str[i]
        }
        for (let i = str.length - 2; i < str.length; i++){
            result2 = result2 + str[i]
        }
        return result1 + result2
    }else {
        return str
    }
}

console.log(keepFirstLast('afd'))