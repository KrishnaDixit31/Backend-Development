const express = require("express");

const bookStore = [
  { id: 1, name: "The Alchemist", author: "John" },
  { id: 2, name: "Rich Dad Poor Dad", author: "Robert" },
  { id: 3, name: "Atomic Habits", author: "James Clear" },
  { id: 4, name: "The Power", author: "Eckhart" },
  { id: 5, name: "The Subtle", author: "Mark Manson" },
];

const app = express();
const port = 4000;

app.use(express.json());

app.get("/books", (req, res) => {
  res.send(bookStore);
});

app.get("/books/:id", (req, res) => {
  //   console.log(typeof req.params.id);
  const id = parseInt(req.params.id);
  const book = bookStore.find((curr) => curr.id === id);
  res.send(book);
});

app.post("/books", (req, res) => {
  bookStore.push(req.body);
  res.send("Data saved Successfully");
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
