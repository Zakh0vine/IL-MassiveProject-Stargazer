const express = require("express");
const router = express.Router();
const { getObatData } = require("../controllers/obat");

router.get("/", async (req, res) => {
  try {
    const obatData = await getObatData();
    res.json(obatData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
