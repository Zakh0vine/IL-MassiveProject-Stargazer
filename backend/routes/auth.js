const express = require("express");
const routes = express();
const { login, register, home } = require("../controllers/auth");

routes.post("/register", register);
routes.post("/login", login);
routes.get("/home", home);


module.exports = routes;
