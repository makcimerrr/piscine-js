const escapeStr = "`, \\, /, '.\"";

const arr = [4, '2'];

const obj = Object.freeze({
    str: "Hello There",
    num: 6,
    bool: true,
    undef: undefined,
});

const nested = Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
        str: "Hello",
        num: 6,
        bool: true,
    }),
});

// Testing if the constants are truly constant
// Uncommenting the next line should result in an error
// arr.push(5);

// Uncommenting the next line should result in an error
// obj.num = 7;

// Uncommenting the next line should result in an error
// nested.obj.str = "Hi";

console.log(escapeStr);
console.log(arr);
console.log(obj);
console.log(nested);
