// Function to convert Array to Set
function arrToSet(arr) {
    return new Set(arr);
}

// Function to convert Array to string
function arrToStr(arr) {
    return arr.join("");
}

// Function to convert Set to Array
function setToArr(set) {
    return Array.from(set);
}

// Function to convert Set to string
function setToStr(set) {
    return Array.from(set).join("");
}

// Function to convert string to Array
function strToArr(str) {
    return Array.from(str);
}

// Function to convert string to Set
function strToSet(str) {
    return new Set(Array.from(str));
}

// Function to convert Map to Object
function mapToObj(map) {
    let obj = {};
    for (let [k, v] of map) {
        obj[k] = v;
    }
    return obj;
}

// Function to convert Object to Array
function objToArr(obj) {
    return Object.values(obj);
}

// Function to convert Object to Map
function objToMap(obj) {
    let map = new Map();
    for (let key in obj) {
        map.set(key, obj[key]);
    }
    return map;
}

// Function to convert Array to Object
function arrToObj(arr) {
    return {...arr};
}

// Function to convert string to Object
function strToObj(str) {
    return {...str};
}
function superTypeOf(obj) {
    if (obj instanceof Map) {
        return "Map";
    } else if (obj instanceof Set) {
        return "Set";
    } else if (obj instanceof WeakMap) {
        return "WeakMap";
    } else if (obj instanceof WeakSet) {
        return "WeakSet";
    } else if (obj instanceof Array) {
        return "Array";
    } else if (obj instanceof Function) {
        return "Function";
    } else if (obj instanceof Promise) {
        return "Promise";
    } else if (obj instanceof Error) {
        return "Error";
    } else if (obj instanceof Date) {
        return "Date";
    } else if (obj instanceof RegExp) {
        return "RegExp";
    } else if (obj instanceof String) {
        return "String";
    } else if (obj instanceof Number) {
        return "Number";
    } else if (obj instanceof Boolean) {
        return "Boolean";
    } else if (obj instanceof BigInt) {
        return "BigInt";
    } else if (obj instanceof Symbol) {
        return "Symbol";
    } else if (obj instanceof Object) {
        return "Object";
    }else {
        if (typeof obj === 'string') {
            return "String";
        }else if (typeof obj === 'number'){
            return "Number";
        }else if (typeof obj === 'object' && obj === null){
            return "null";
        }else {
            return typeof obj;
        }
    }
}

console.log(superTypeOf(superTypeOf))