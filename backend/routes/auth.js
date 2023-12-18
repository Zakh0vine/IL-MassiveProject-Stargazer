const express = require("express");
const routes = express();
const { login, register, logout } = require("../controllers/auth");

routes.post("/register", register);
routes.post("/login", login);
routes.get("/logout", logout);


module.exports = routes;
