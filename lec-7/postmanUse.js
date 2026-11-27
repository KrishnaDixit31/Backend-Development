const express = require("express");

const app = express();
const port = 3000;

// When we send or get data for CRUD Operations we use express.json. Because the data which we get is in JSON format, so to convert it into JS Object we use express.json. This process is know as parse or parsing.
app.use(express.json());

app.get("/user", (req, res) => {
  res.send({
    name: "Krishna",
    age: 24,
    branch: "CS",
  });
});

app.post("/user", (req, res) => {
  // When we get data from postman we use req.body.
  //   console.log(typeof req.body.age);
  // req.body is undefined if Postman doesn't send a body as JSON with
  // Content-Type: application/json. In Postman, choose Body > raw > JSON.
  console.log(req.body);

  res.send("Data saved Successfully");
});

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

// app.use() will accept all the requests like GET, POST, PUT, DELETE, PATCH etc. & it will only check the prefix of the route/url, if it matches than it will go inside like:-

// For Example:
// app.use("/user", callbackFunction);
// app.use("/user/:id", callbackFunction);

// & if we use GET method in postman & in the url we write localhost:3000/user/1, than it will work from top to bottom as a JS, & when it sees /user than it will go inside callbackFunction, because it thinks that maybe /1 is handle inside it.

// But when we use app.get, app.post, app.put, app.patch, app.delete than it will strictly check the route if it didn't match even the prefix is matched than also it will not go inside callbackFunction.
