const express = require("express");

const path = require("path");
require("dotenv").config();
const mysql = require("mysql");
const Promise = require("bluebird");

let connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    host: process.env.DB_HOST, // 本機 127.0.0.1
    database: process.env.DB_NAME,
    // port: process.env.DB_PORT, // 埠號 mysql 預設就是 3306
  });
  
  // 利用 bluebird 把 connection 的函式都變成 promise
  connection = Promise.promisifyAll(connection)

let app = express();

app.use((req, res, next) => {
  console.log("I am the Middleware");
  next();
});

app.use((req, res, next) => {
  console.log("I am the second Middleware and you can see me");
  next();
});

app.get("/", (req, res) => {
  console.log("homepage here");
  res.send("I am the homepage. :)");
});

app.get("/member", (req, res) => {
  console.log("member page here");
  res.send("I am the member page. :)");
});

app.get("/api/test", (req, res) => {
  res.json({
    name: "banana",
    job: "fruit",
  });
});

app.get("/api/todos", async (req, res) => {
  let data = await connection.queryAsync("SELECT * FROM todos");
  res.json(data);
});

app.use((req, res, next) => {
  console.log("Find nothing, this is 404");
  res.send("So I am the well known 404 page. :)");
});

app.listen(3001, () => {
  connection.connect();
  console.log("express app activated");
});
