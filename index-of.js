

function indexOf(arr, value){
    if (value >= arr.length){
        return -1
    }

    let i = 0

    if (value !== undefined){
        while(i < arr.length){
            arr[value]
            i++
        }
        return arr[value]
    }else{
        return arr[0]
    }
}

function lastIndexOf(arr, value){
    if (value > arr.length){
        return -1
    }

    let i = 0

    if (value !== undefined){
        while(i > arr.length){
            arr[value]
            i--
        }
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

console.log(lastIndexOf([1, 2, 3, 4, 5, 4, 3, 2, 1],2))