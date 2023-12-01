// Custom split function
function split(inputString, delimiter) {
    const result = [];
    let startIndex = 0;
    let delimiterIndex;

    while ((delimiterIndex = inputString.indexOf(delimiter, startIndex)) !== -1) {
        result.push(inputString.slice(startIndex, delimiterIndex));
        startIndex = delimiterIndex + delimiter.length;
    }

    // Add the remaining part of the string
    result.push(inputString.slice(startIndex));

    return result;
}


function join(inputArray, separator) {
    let result = '';

    for (let i = 0; i < inputArray.length; i++) {
        result += inputArray[i];

        // Add the separator for all elements except the last one
        if (i < inputArray.length - 1) {
            result += separator;
        }
    }

    return result;
}
console.log(split('ee,ff,g,', ','))