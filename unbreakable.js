// Custom split function
function split(inputString, delimiter) {
    const result = [];
    let startIndex = 0;

    while (startIndex <= inputString.length) {
        const delimiterIndex = inputString.indexOf(delimiter, startIndex);

        if (delimiterIndex === -1) {
            // Pas de délimiteur trouvé, ajoute le reste de la chaîne
            result.push(inputString.slice(startIndex));
            break;
        }

        // Ajoute la sous-chaîne entre startIndex et delimiterIndex
        result.push(inputString.slice(startIndex, delimiterIndex));

        // Met à jour le startIndex pour la prochaine itération
        startIndex = delimiterIndex + delimiter.length;
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
console.log(split('ee,ff,g,', ','))