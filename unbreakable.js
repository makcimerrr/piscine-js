// Custom split function
function split(str, value) {
    const result = [];
    let start = 0;

    while (start <= str.length) {
        const valueIndex = str.indexOf(value, start);
        if (valueIndex === -1) {
         
            result.push(str.slice(start));
            break;
        }
        result.push(str.slice(start, valueIndex));
        start = valueIndex + value.length;
    }

    return result;
}

function join(arr, value) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];

        if (i < arr.length - 1) {
            result += value;
        }
    }

    return result;
}
console.log(split('ee,ff,g,', ','))