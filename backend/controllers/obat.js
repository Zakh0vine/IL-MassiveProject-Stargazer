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
  const { name, brand, stock, catatan, tgl_masuk, tgl_keluar, tgl_exp } = req.body;

  if (name === undefined || name === "" || brand === undefined || brand === "" || stock === undefined || isNaN(+stock) || catatan === undefined || catatan === "") return res.status(400).json("yo ndak tau");

  try {
    const query = "INSERT INTO obat (name, brand, stock, catatan, tgl_masuk, tgl_keluar, tgl_exp) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [name, brand, stock, catatan, tgl_masuk, tgl_keluar, tgl_exp];
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
