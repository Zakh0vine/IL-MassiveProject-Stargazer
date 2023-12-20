const express = require("express");
const routes = express();
const { verifyUser } = require("../controllers/auth")
const { TestPie, TestBar } = require("../controllers/dash");
const { getNaon } = require("../controllers/notif");


routes.get("/pie", verifyUser, TestPie);
routes.get("/bar", verifyUser, TestBar);
routes.get("/notif", verifyUser, getNaon);


module.exports = routes;