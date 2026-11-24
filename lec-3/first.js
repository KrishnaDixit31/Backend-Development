const fs = require("fs");

let a = 12;
let b = "Hello";

console.log(b);

//* File Operation in synchronous way like JS behavior.
// const data = fs.readFileSync("./data.json", "utf-8");
// console.log(data);

//* File Operation in asynchronous way.
fs.readFile("./data.json", "utf-8", (err, res) => {
  console.log(res);
});

setTimeout(() => {
  console.log("Hello, i am setTimeout");
}, 2000);

console.log(a);
