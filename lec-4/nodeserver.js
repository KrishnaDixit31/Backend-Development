const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello, i am server");
});

server.listen(3100, () => {
  console.log("I am listening at port no. 3100");
});
