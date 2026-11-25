const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello i am HOME page");
  } else if (req.url === "/contact") {
    res.end("Hello i am CONTACT page");
  } else if (req.url === "/about") {
    res.end("Hello i am ABOUT page");
  } else {
    res.end("Page Not Found.");
  }
});

server.listen(2000, () => {
  console.log("I am listening at port no. 2000");
});
