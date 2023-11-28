function arrToSet (value){
    if (Array.isArray(value) === true) {
        const set = new Set(value);
    }else {
        return "impossible"
    }
}

function arrToStr(value){
    if (Array.isArray(value) === true) {
        const str = new String(value);
    }else {
        return "impossible"
    }
}

function setToArr(value){
   if (typeof value === 'object' === true){
    const arr = new Array(value)
   }else{
    return "impossible"
   }
}
function setToStr(value){
    if (typeof value === 'object' === true){
        const arr = new String(value)
       }else{
        return "impossible"
       }
}

function strToArr(value){
    if (typeof value === 'string' === true || value instanceof String){
        const str = new Array(value)
       }else{
        return "impossible"
    }
}

function strToSet(value){
    if (typeof value === 'string' === true || value instanceof String){
        const str = new Set(value)
       }else{
        return "impossible"
    }
}

function mapToObj(value){
    if (typeof value === 'object' === true){
        const map = new Map(value)
       }else{
        return "impossible"
    }
}

function objToArr(value){
    if (typeof value === 'object' === true){
        const arr = new Array(value)
       }else{
        return "impossible"
    }
}

function objToMap(value){
    if (typeof value === 'object' === true){
        const map = new Map(value)
       }else{
        return "impossible"
    }
}

function arrToObj(value){
    if (Array.isArray(value) === true){
        const obj = new Object(value)
       }else{
        return "impossible"
    }
}

function strToObj(value){
    if (typeof value === 'string' === true || value instanceof String){
        const str = new Object(value)
       }else{
        return "impossible"
    }
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
    } else if (obj instanceof Object) {
        return "Object";
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
    } else {
        return typeof obj;
    }
}