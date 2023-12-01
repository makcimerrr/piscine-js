function ionOut(str) {
    return str.split(" ")
        .filter(word => word.includes("tion"))
        .map(word => word.replace(/[.,?!]/g, "").slice(0, -3));
}

console.log(ionOut('attention, direction'));
console.log(ionOut('transfusion'));