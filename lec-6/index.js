const express = require("express");

const app = express();

const port = 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// here at this position this block the other routes.
// app.use("/", (req, res) => {
//   res.send("Hello i am Home page");
// });

app.use("/about/:id/:user", (req, res) => {
  console.log(req.params);
  res.send(`Hello i am About page where id : ${req.params.id}`);
});

// + means u repeats many time (eg - /abouuut, /abouut both work)
// app.use(/^\/abou+t$/, (req, res) => {
//   res.send("Hello i am About page");
// });

// ? make u optional (eg - /abot, /about both work)
// app.use(/^\/abou?t$/, (req, res) => {
//   res.send("Hello i am About page");
// });

// .* make u and t ke between any character allow (eg - /abouabct, /abouxyzt both work)
// app.use(/^\/abou.*t$/, (req, res) => {
//   res.send("Hello i am About page");
// });

app.use("/about", (req, res) => {
  res.send("Hello i am About page");
});

app.use("/contact", (req, res) => {
  res.send("Hello i am Contact page");
});

app.use("/", (req, res) => {
  res.send("Hello i am Home page");
});
