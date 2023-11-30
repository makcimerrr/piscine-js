// Custom split function
function split(inputString, delimiter) {
    const result = [];
    let startIndex = 0;

    for (let i = 0; i <= inputString.length; i++) {
        if (inputString.slice(i, i + delimiter.length) === delimiter) {
            result.push(inputString.slice(startIndex, i));
            startIndex = i + delimiter.length;
        }
    }

    return result;
}

// Custom join function
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
console.log(split('The quick brown fox jumps over the lazy dog.', 'o'))