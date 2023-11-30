function divide(a, b) {
    let result = 0;
    if (a === b) {
        return 1;
    } else if (a === 0 || b === 0) {
        return 0;
    } else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        result = Math.abs(b);
        a = Math.abs(a);
        b = Math.abs(b);
        for (let index = 1; true; index++) {
            if (a === result) {
                return -(index)
            } else if (a < result) {
                return -(index - 1)
            }
            result = result + b
        }
    } else {
        a = Math.abs(a);
        b = Math.abs(b);
        result = b;
        for (let index = 1; true; index++) {
            if (a === result) {
                return index
            } else if (a < result) {
                return index - 1
            }
            result = result + b
        }
    }
};


function round(params) {
    console.log(params);

    if (params === Infinity) {
        return Infinity
    } else if (params === -Infinity) {
        return -Infinity
    }
    params = Number(params);
    if (isNaN(params)) {
        return NaN;
    }
    if (params >= 0) {
        return divide(params + 0.5, 1)
    } else {
        return divide(params - 0.5, 1)
    }
}

function ceil(params) {
    console.log(params);
    if (params === Infinity) {
        return Infinity
    } else if (params === -Infinity) {
        return -Infinity
    }
    params = Number(params);
    if (isNaN(params)) {
        return NaN;
    }
    if (params > 0) {
        return divide(params + 1, 1)
    } else {
        return divide(params, 1)
    }
}

function floor(params) {
    console.log(params);
    if (params === Infinity) {
        return Infinity
    } else if (params === -Infinity) {
        return -Infinity
    }
    params = Number(params);
    if (isNaN(params)) {
        return NaN;
    }
    if (params >= 0) {
        return divide(params, 1)
    } else {
        return divide(params - 1, 1)
    }
}

function trunc(int) {
    let counter = 0;
    if (int > 0xfffffffff) {
        int -= 0xfffffffff;
        counter += 0xfffffffff;
    }
    let neg = false;
    if (int < 0) {
        neg = true;
        int = -int;
    }

    let intCopy = int;
    while (!(intCopy < 1 && intCopy > -1)) {
        intCopy -= 1;
        counter++;
    }
    if (neg) {
        return -counter;
    }
    return counter;
}
