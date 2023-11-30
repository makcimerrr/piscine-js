function slice(arr, startIndex, opt){
    let result = ""
    if (arr !== undefined){
        if (startIndex === undefined && opt === undefined){
            return arr
        }else if (startIndex !== undefined && opt === undefined) {
            if (startIndex > 0){
                for ( let i= startIndex; i < arr.length; i++){
                    result = result + arr[i]
                }
                return result
            } else {
                for ( let i= arr.length + startIndex; i < arr.length; i++){
                    result = result + arr[i]
                }
                return result
            }
        }else if (startIndex !== undefined && opt !== undefined) {
            if (startIndex > 0 && opt > 0){
                for ( let i= startIndex; i < opt; i++){
                    result = result + arr[i]
                }
                return result
            } else if (startIndex > 0 && opt < 0){
                for ( let i= startIndex; i < arr.length + opt; i++){
                    result = result + arr[i]
                }
                return result
            }
        }
    }
}


console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, -1))
console.log(slice('abcdef', 2, 3))
