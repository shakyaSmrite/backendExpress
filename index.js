const express = require("express");
const app = express();
const port = 4000;

const data = require("./Student_Data.json");
const cors = require("cors");

const axios = require("axios");

app.use(cors());

//methods rest api -GET POST PATCH PUT DELETE
app.get("/", (req, res) => {
  res.send("Hi Smriti !");
});

app.get("/users", (req, res) => {
  res.json({ user: "tobi" });
});

app.get("/users/status", (req, res) => {
  res.status(404).send("Page Not Found !");
});

app.get("/users/getAllEntry", (req, res) => {
  res.status(200).json(data);
});

//getpost- create new route that will call jsonplaceholder https://jsonplaceholder.typicode.com/posts and return that data to frontend
app.get("/getposts", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((resp) => res.status(200).json(resp.data))
    //.then(resp=>console.log(resp,'RESP'))
    .catch((e) => console.log(e));
});

app.get("/getSpaceX", (req, res) => {
  axios
    .get("https://api.spacexdata.com/v3/history")
    .then((resp) => res.status(200).json(resp.data))
    //.then(resp=>console.log(resp,'RESP'))
    .catch((e) => console.log(e));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
