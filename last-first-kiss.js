// Define the first function
function first(str) {
    return str.charAt(0);
}

// Define the last function
function last(str) {
    return str.charAt(str.length - 1);
}

// Define the kiss function
function kiss(str) {
    return [first(str), last(str)];
}