// Custom split function
function split(arr, value) {
    const result = [];
    let startIndex = 0;
    let valueIndex;

    while ((valueIndex = arr.indexOf(value, startIndex)) !== -1) {
        result.push(arr.slice(startIndex, valueIndex));
        startIndex = valueIndex + value.length;
    }

    // Add the remaining part of the string
    result.push(arr.slice(startIndex));

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