const express = require("express");
const routes = express();
const { verifyUser } = require("../controllers/auth")
const { getUser, updateUser } = require("../controllers/user")

routes.get("/user", verifyUser, getUser);
routes.post("/updateUser", updateUser);

module.exports = routes;