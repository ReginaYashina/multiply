module.exports = function multiply(first, second) {
let f,
    s,
    result;

f = BigInt(first);
s = BigInt(second);
result = f * s;

return (String(result));
}

