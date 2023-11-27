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
