const express = require("express");
const routes = express();
const { login, register, home } = require("../controllers/auth");
const { pieData } = require("../controllers/graphdangsbord");

routes.post("/register", register);
routes.post("/login", login);
routes.get("/home", home);
routes.get("/pie", pieData);

module.exports = routes;
