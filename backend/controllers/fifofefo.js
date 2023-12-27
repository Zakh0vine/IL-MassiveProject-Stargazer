const query = require("../database");

async function getFIFOFEFO(req, res) {
  try {
    const userId = req.id;
    const orderType = req.query.orderType.toLowerCase(); // Menggunakan query parameter untuk menentukan jenis urutan

    let orderByClause = "";
    if (orderType === "fifo") {
      orderByClause = "ORDER BY tgl_masuk";
    } else if (orderType === "fefo") {
      orderByClause = "ORDER BY tgl_exp";
    } else {
      return res.status(400).json({ message: "Invalid order type" });
    }

    const result = await query(
      `
            SELECT * FROM obat WHERE user_id = ? ${orderByClause};
        `,
      [userId]
    );

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = {
  getFIFOFEFO,
};
