function split(str, value) {
    let result = "";
    let final = [];

    for (let i = 0; i < str.length; i++) {
        if (str.startsWith(value, i)) {
            if (result !== "") {
                final.push(result);
                result = "";
            }
            i += value.length - 1;
        } else {
            result += str[i];
        }
    }

    // Ajouter la partie restante de la chaîne à final
    final.push(result);

    // Si la chaîne commence ou se termine par l'opérateur et n'est pas entièrement constituée de l'opérateur,
    // ajouter des chaînes vides à final
    if (str.startsWith(value) && str !== value.repeat(Math.floor(str.length / value.length))) {
        final.unshift("");
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
console.log(split('rrirr', 'rr'));
console.log(split('The quick brown fox jumps over the lazy dog.', 'quick'));
console.log(join(['Fire', 'Air', 'Water'], '-'))