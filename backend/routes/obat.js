const express = require("express");
const router = express.Router();
const { getAllObat, addObat } = require("../controllers/obat");
const { verifyUser } = require("../controllers/auth");

router.get("/obat", verifyUser, getAllObat);
router.post("/obat", addObat);

module.exports = router;
