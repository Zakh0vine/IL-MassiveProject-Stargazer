const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const auth = require("./auth");
const obat = require("./obat");

const apiUrl = "/api/v1";

app.use(cookieParser());
app.use(apiUrl, auth);
app.use(apiUrl, obat);

app.get("/", (req, res) => {
  res.send("Selamat datang di server backend!");
});

module.exports = app;
