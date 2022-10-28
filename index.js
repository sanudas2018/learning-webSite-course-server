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
// 1. all Courses
app.get("/courses", (req, res) => {
  res.send(courses);
});
// 2. all categories
app.get("/courses-categories", (req, res) => {
  res.send(categories);
});
// single course details
app.get("/courses/:cid", (req, res) => {
  const courseId = req.params.cid;
  //   const allData = courses.data;
  const singleCourse = courses.data.find((c) => c.id == courseId);
  res.send(singleCourse);
});

// console api run
app.listen(port, () => {
  console.log("console Prot is Raning = ", port);
});
