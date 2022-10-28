const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// All API Data
const categories = require("./data/categories.json");
const courses = require("./data/module.json");

// Browser run
app.get("/", (req, res) => {
  res.send("EduKul Server is Raning");
});

// ALL API
// app.get("/courses", (req, res) => {
//   res.send(courses);
// });

// console api run
app.listen(port, () => {
  console.log("console Prot is Raning = ", port);
});
