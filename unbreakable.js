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
    if (inputArray.length === 0) {
        return '';
    }

    let result = inputArray[0];

    for (let i = 1; i < inputArray.length; i++) {
        result += separator + inputArray[i];
    }

    return result;
}
console.log(split('ee,ff,g,', ','))