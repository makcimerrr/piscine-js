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

    // Si la chaîne cible est constituée uniquement de l'opérateur, ajouter des chaînes vides à final
    if (str === value.repeat(Math.floor(str.length / value.length))) {
        for (let i = 0; i < Math.floor(str.length / value.length); i++) {
            final.push("");
        }
    }

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

console.log(split('rrrr', 'rr'));
console.log(split('The quick brown fox jumps over the lazy dog.', 'quick'));
console.log(join(['Fire', 'Air', 'Water'], '-'))