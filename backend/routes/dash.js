const express = require("express");
const routes = express();
const { verifyUser } = require("../controllers/auth")
const { TestPie, TestBar } = require("../controllers/dash");


routes.get("/pie", verifyUser, TestPie);
routes.get("/bar", verifyUser, TestBar);


module.exports = routes;