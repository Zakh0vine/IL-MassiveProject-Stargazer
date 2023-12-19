const express = require("express");
const routes = express();
const { login, register, logout } = require("../controllers/auth");
const { pieData, getWaktu } = require("../controllers/graphdangsbord");

routes.post("/register", register);
routes.post("/login", login);
routes.get("/logout", logout);
routes.get("/pie", pieData);
routes.get("/watu", getWaktu);

module.exports = routes;
