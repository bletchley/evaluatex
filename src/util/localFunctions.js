/*
Javascript's Math API omits some important mathematical functions. These are included here.
 */

const locals = {};

// Copy things from Math. Can't use Object.assign since Math has non-enumerable properties.
for (const k of Object.getOwnPropertyNames(Math)) {
    locals[k] = Math[k];
}

export const fact = function fact(a) {
    a = Math.round(a);
    let result = 1;

    if (a < 0) {
        throw "Can't factorial a negative.";
    }

    for (a; a > 1; a--) {
        result *= a;
    }
    return result;
};

export const frac = function frac(a, b) {
    return a / b;
};

export const log = function log(x) {
    return Math.log10(x);
};

export const ln = function ln(x) {
    return Math.log(x);
};

export const logn = function logn(x, b) {
    return Math.log(x) / Math.log(b);
};

export const rootn = function rootn(x, n) {
    return Math.pow(x, 1 / n);
};

export const sec = function src(x) {
    return 1 / Math.cos(x);
};

export const csc = function csc(x) {
    return 1 / Math.sin(x);
};

export const cot = function cot(x) {
    return 1 / Math.tan(x);
};

export const arcsin = function arcsin(x) {
    return Math.asin(x);
};

export const arccos = function arccos(x) {
    return Math.acos(x);
};

export const arctan = function arctan(x) {
    return Math.atan(x);
};

export const sech = function sech(x) {
    return 1 / Math.cosh(x);
};

export const csch = function csch(x) {
    return 1 / Math.sinh(x);
};

export const coth = function coth(x) {
    return 1 / Math.tanh(x);
};

const functions = { fact, frac, rootn, log, ln, logn, sec, csc, cot, arcsin, arccos, arctan, sech, csch, coth };

for (const k of Object.getOwnPropertyNames(functions)) {
    locals[k] = functions[k];
}

export default locals;
