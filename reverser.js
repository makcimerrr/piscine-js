function reverse(arr){
    let result = ""
    for (let i = arr.length - 1; i >= 0;i--){
        result = result + arr[i]
    }

    return result
}

console.log(reverse(['one', 'two', 'three']))