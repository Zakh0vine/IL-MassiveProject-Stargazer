const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const auth = require("./auth");
const user = require("./user");
const dash = require("./dash");
const obat = require("./obat");
const fifofefo = require("./fifofefo");

const apiUrl = "/api/v1";

app.use(cookieParser());
app.use(apiUrl, auth);
app.use(apiUrl, user);
app.use(apiUrl, dash);
app.use(apiUrl, obat);
app.use(apiUrl, fifofefo);
app.use(express.static("public"));

module.exports = app;
