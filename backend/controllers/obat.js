const db = require("../database");

const getAllObat = async (req, res) => {
  try {
    const query = "SELECT * FROM obat";
    const result = await db(query);

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addObat = async (req, res) => {
  const { name, brand, stock, catatan } = req.body;

  if (!name || !brand || !stock || !catatan) {
    return res.status(400).json({ error: "Semua field harus diisi" });
  }

  try {
    const query = "INSERT INTO obat (name, brand, stock, catatan) VALUES (?, ?, ?, ?)";
    const values = [name, brand, stock, catatan];
    await db(query, values);

    res.status(201).json({ message: "Obat berhasil ditambahkan" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllObat,
  addObat,
};
