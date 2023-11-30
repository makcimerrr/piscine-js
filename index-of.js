function indexOf(arr, value,index){
    if (value === undefined){
        return -1
    }

    if (index !== undefined){
        let i = index
        while(i < arr.length){
            if (arr[i] === value){
                return i
            }
            i++
        }
        return -1
    }else {
        let i = 0
        while(i < arr.length){
            if (arr[i] === value){
                return i
            }
            i++
        }
        return -1
    }
}

function lastIndexOf(arr, value, index) {
    if (value === undefined){
        return -1
    }

    if (index !== undefined){
        for (let i = index; i >= 0; i--) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1
    }else {
        index = arr.length - 1
        for (let i = index; i >= 0; i--) {
            if (arr[i] === value) {
                return i;
            }
        }
        return -1;
    }
}


function includes(arr,value){
    if (value !== undefined){
        false
    }
    let i = 0
        while(i < arr.length){
            if (arr[i] === value){
                return true
            }
            i++
        }
        return false
}

console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))
console.log(includes([0, 0, 't', 't'], 't'))