const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const auth = require("./auth");
const user = require("./user");

const apiUrl = "/api/v1";

app.use(cookieParser())
app.use(apiUrl, auth);
app.use(apiUrl, user);

module.exports = app;
