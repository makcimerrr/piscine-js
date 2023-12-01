// Custom split function
function split(inputString, delimiter) {
    const result = [];
    let startIndex = 0;
    let delimiterIndex = inputString.indexOf(delimiter, startIndex);

    while (delimiterIndex !== -1) {
        result.push(inputString.substring(startIndex, delimiterIndex));
        startIndex = delimiterIndex + delimiter.length;
        delimiterIndex = inputString.indexOf(delimiter, startIndex);
    }

    result.push(inputString.substring(startIndex));

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