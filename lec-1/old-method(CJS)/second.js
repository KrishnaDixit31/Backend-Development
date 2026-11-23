console.log("Hii, i am second file.");

function sum(a, b) {
  console.log("Sum =", a + b);
}
function sub(a, b) {
  console.log("Sub =", a - b);
}

// an empty object.
console.log("module.exports =", module.exports);

// module.exports = sum;
// module.exports = { sum, sub };
module.exports.sum = sum;
module.exports.sub = sub;
