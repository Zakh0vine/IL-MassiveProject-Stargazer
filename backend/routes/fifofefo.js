const express = require("express");
const router = express.Router();
const { verifyUser } = require("../controllers/auth");
const { getFIFOFEFO } = require("../controllers/fifofefo");

router.get("/fifofefo", verifyUser, getFIFOFEFO);

module.exports = router;
