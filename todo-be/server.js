const express = require("express");

let app = express();

app.get("/", (req, res)=> {
    res.send("I am the homepage. :)")
});

app.get("/member", (req, res)=> {
    res.send("I am the member page. :)")
});

app.get("/product", (req, res)=> {
    res.send("I am the product page. :)")
});

app.listen(3001, ()=> {
    console.log("express app activated")
})