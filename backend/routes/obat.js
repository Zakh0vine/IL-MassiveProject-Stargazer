const express = require("express");
const router = express.Router();
const { getAllObat, addObat } = require("../controllers/obat");

router.get("/obat", getAllObat);
router.post("/obat", addObat);
router.get("/obat", (req, res) => {
  res.send("Selamat datang di endpoint obat!");
});

module.exports = router;
