const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const auth = require("./auth");

const apiUrl = "/api/v1";

app.use(cookieParser())
app.use(apiUrl, auth);

module.exports = app;
