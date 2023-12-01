function split(str, separator) {
    let result = [];
    let currentChunk = "";
    let separatorLength = separator.length;

    for (let i = 0; i < str.length; i++) {
        // Vérifier si la sous-chaîne correspond au séparateur
        if (str.substring(i, i + separatorLength) === separator) {
            result.push(currentChunk);
            currentChunk = "";
            i += separatorLength - 1; // Sauter le séparateur dans la chaîne originale
        } else {
            currentChunk += str[i];
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
console.log(split('ggg - ddd - b', ' - '))