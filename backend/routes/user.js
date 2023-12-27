const express = require("express");
const routes = express();
const { verifyUser } = require("../controllers/auth")
const { getUser, updateUser, updateAvatar, upload } = require("../controllers/user")

routes.get("/user", verifyUser, getUser);
routes.post("/updateUser", updateUser);
routes.post("/user/avatar", verifyUser, upload.single('image'), updateAvatar);

module.exports = routes;