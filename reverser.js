function reverse(arr){

    if (Array.isArray(arr)){
        let result = []
        for (let i = arr.length - 1; i >= 0;i--){
            result.push(arr[i])
        }
        return result
    }else if (typeof arr === 'string'){
        let result = ""
        for (let i = arr.length - 1; i >= 0;i--){
            result = result + arr[i]
        }
        return result
    }
}


console.log(reverse([1, "eq", 3, "ctx"]))
console.log(reverse('abcdef'))