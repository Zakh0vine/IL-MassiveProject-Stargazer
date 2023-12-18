const express = require("express");
const routes = express();
const { verifyUser } = require("../controllers/auth")
const { getUser } = require("../controllers/user")

routes.get("/user", verifyUser, getUser);

module.exports = routes;