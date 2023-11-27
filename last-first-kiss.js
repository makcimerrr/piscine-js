
function first(str) {
    return str[0];
}

function last(str) {
    return str[str.length - 1];
}

function kiss(str) {
    return [last(str), first(str)];
}