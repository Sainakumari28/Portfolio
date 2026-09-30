require("dotenv").config(); // 

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

mongoose.connect(process.env.ATLASDB_URL)
 .then(() => {
    console.log("MongoDB connected");
 })
 .catch((err) => {
    console.log(err);
 });

app.listen(8080, (req, res) => {
    console.log("server is listing to port 8080");
});