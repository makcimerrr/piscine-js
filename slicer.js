function slice(arr, startIndex, opt){
    let result = ""
    if (arr !== undefined){
        if (startIndex === undefined && opt === undefined){
            return arr
        }else if (startIndex !== undefined && opt === undefined) {
            if (startIndex >= 0){
                for ( let i= startIndex; i < arr.length; i++){
                    result = result + arr[i]
                }
                if (Array.isArray(arr)){
                    return result.split("").map(Number)
                }else if (typeof arr == 'string'){
                    return result
                }
            } else {
                for ( let i= arr.length + startIndex; i < arr.length; i++){
                    result = result + arr[i]
                }
                if (Array.isArray(arr)){
                    return result.split("").map(Number)
                }else if (typeof arr == 'string'){
                    return result
                }
            }
        }else if (startIndex !== undefined && opt !== undefined) {
            if (startIndex >= 0 && opt >= 0){
                for ( let i= startIndex; i < opt; i++){
                    result = result + arr[i]
                }
                if (Array.isArray(arr)){
                    return result.split("").map(Number)
                }else if (typeof arr == 'string'){
                    return result
                }
            } else if (startIndex >= 0 && opt < 0){
                for ( let i= startIndex; i < arr.length + opt; i++){
                    result = result + arr[i]
                }
                if (Array.isArray(arr)){
                    return result.split("").map(Number)
                }else if (typeof arr == 'string'){
                    return result
                }
            }else if (startIndex < 0 && opt < 0) {
                for ( let i= arr.length + startIndex; i < arr.length + opt; i++){
                    result = result + arr[i]
                }
                if (Array.isArray(arr)){
                    return result.split("").map(Number)
                }else if (typeof arr == 'string'){
                    return result
                }
            }
        }
    }
}


console.log(slice([1, 2, 3, 4, 5, 6], 2))
console.log(slice('abcdef', -3, -1))
