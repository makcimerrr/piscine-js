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

function lastIndexOf(arr, value,index){
    if (value === undefined){
        return -1
    }

    if (index !== undefined){
        let i = arr.length
        while(i > 0){
            if (arr[i] === value){
                return i
            }
            i--
        }
        return -1
    }else {
    let i = arr.length
        while(i > 0){
            if (arr[i] === value){
                return i
            }
            i--
        }
        return -1
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


console.log(includes([7, 8, 9, 5, 6, 4], 4))
console.log(lastIndexOf(['t', 0, 0, 't'], 't', 2))
console.log(lastIndexOf([0, 0, 't', 't'], 't', 3))
console.log(indexOf([7, 8, 9, 5, 6, 4],4))
console.log(indexOf([7, 8, 9, 5, 6, 4],3))
console.log(indexOf([7, 8, 9, 5, 6, 4],6,2))
console.log(indexOf([7, 8, 9, 5, 6, 4]))
