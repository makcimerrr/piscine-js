function split(str, value) {
    let result = "";
    let final = [];

    for (let i = 0; i < str.length; i++) {
        if (str.startsWith(value, i)) {
            if (result !== "") {
                final.push(result);
            }
            i += value.length - 1; // Avancer l'indice en fonction de la longueur de la valeur
            result = ""; // Réinitialiser la variable result pour la prochaine sous-chaîne
        } else {
            result = result + str[i];
        }
    }

    // Ajouter la partie restante de la chaîne à final
    final.push(result);

    return final;
}

function join(arr, value) {
    let result = "";

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
        if (i < arr.length - 1) {
            result += value;
        }
    }
    return result;
}

console.log(split('The quick brown fox jumps over the lazy dog.'));
console.log(split('The quick brown fox jumps over the lazy dog.', 'quick'));
console.log(join(['Fire', 'Air', 'Water'], '-'))