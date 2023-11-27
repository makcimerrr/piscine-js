const is = {}

is.num = function(value) {
 return typeof value === 'number'
}

is.nan = function(value) {
 return typeof value === 'number' && isNaN(value)
}

is.str = function(value) {
 return typeof value === 'string' || value instanceof String
}

is.bool = function(value) {
 return typeof value === 'boolean'
}

is.undef = function(value) {
 return typeof value === 'undefined'
}

is.def = function(value) {
 return typeof value !== 'undefined'
}

is.arr = function(value) {
 return Array.isArray(value)
}

is.obj = function(value) {
 return typeof value === 'object' && value !== null && !is.arr(value)
}

is.fun = function(value) {
 return typeof value === 'function'
}

is.truthy = function(value) {
 return !!value
}

is.falsy = function(value) {
 return !value
}

console.log(is.num(5))
// output: true

console.log(is.num('ciao'))

console.log(is.truthy(1))

console.log(is.falsy(1))
