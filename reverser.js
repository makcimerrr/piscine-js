function reverse(arr){
    let result = ""
    for (let i = arr.length - 1; i >= 0;i--){
        result = result + arr[i]
    }

    return result.split("").map(Number)
}

console.log(reverse([1, 2, 3]))