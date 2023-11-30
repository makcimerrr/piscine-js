function slice(arr, startIndex, opt){
    let result = ""
    if (arr !== undefined){
        if (startIndex === undefined && opt === undefined){
            return arr
        }else if (startIndex !== undefined && opt === undefined) {
            for ( let i= startIndex; i < arr.length; i++){
                result = result + arr[i]
            }
            return result
        }else if (startIndex !== undefined && opt !== undefined) {
            for ( let i= startIndex; i < opt; i++){
                result = result + arr[i]
            }
            return result
        }
    }
}


console.log(slice('abcdef', 2))