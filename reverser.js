function reverse(arr){
    let result = ""

    if (Array.isArray(arr)){
        for (let i = arr.length - 1; i >= 0;i--){
            result = result + arr[i]
        }
        return result.split("")
    }else if (typeof arr === 'string'){
        for (let i = arr.length - 1; i >= 0;i--){
            result = result + arr[i]
        }
        return result
    }
}


console.log(reverse([1, "eq", 3, "ctx"]))