

function indexOf(arr, value){
    if (value >= arr.length){
        return -1
    }
    
    if (value !== undefined){
        return arr[value]
    }else{
        return arr[0]
    }
}

function lastIndexOf(arr, value){
    if (value > arr.length){
        return -1
    }

    if (value !== undefined){
        return arr[arr.length - value]
    }else{
        return arr[arr.length - 1]
    }
}

function includes(arr,value){
    if (value > arr.length){
        return false 
    }else {
        return true
    }
}
