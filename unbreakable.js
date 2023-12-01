function split(str, separator) {
    let result = [];
    let currentChunk = "";

    for (let char of str) {
        if (char === separator) {
            result.push(currentChunk);
            currentChunk = "";
        } else {
            currentChunk += char;
        }
    }

    // Ajouter la dernière partie après la dernière occurrence du séparateur
    result.push(currentChunk);

    return result;
}

function join(arr, separator) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];

        // Ajouter le séparateur si ce n'est pas le dernier élément
        if (i < arr.length - 1) {
            result += separator;
        }
    }

    return result;
}



console.log(split('ee,ff,g,', ','))