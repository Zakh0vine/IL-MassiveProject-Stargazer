const query = require("../database");

async function TestPie(req, res) {
  try {
    const pieData = await query(
      `SELECT id, name, stock,
              CASE WHEN stock < 50  THEN 'Low'
                   WHEN stock < 200 THEN 'Mid'
                   WHEN stock >= 200 THEN 'High' 
              END AS my_size
              FROM obat
              WHERE user_id = ?`,
      [req.id]
    );
    return res.json({
      Status: "Success",
      pieData: pieData.map((item) => ({
        id: item.id,
        label: item.my_size,
        value: item.stock,
      })),
    });
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

// Bar
async function TestBar(req, res) {
  try {
    const barData = await query(
      `SELECT id, name, tgl_masuk, tgl_keluar, stock
                            FROM obat
                            WHERE user_id = ?`,
      [req.id]
    );

    const currentDate = new Date();
    const dataWithUpdatedStatus = barData.map((item) => {
      const expirationDate = new Date(item.tgl_keluar);

      return {
        ...item,
        status: expirationDate < currentDate ? "Obat Keluar" : "Obat Masuk",
      };
    });

    return res.json({
      Status: "Success",

      barData: dataWithUpdatedStatus.map((item) => ({
        id: item.id,
        label: item.name,
        masuk: item.tgl_masuk,
        luar: item.tgl_keluar,
        value: item.stock,
        status: item.status,
      })),
    });
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

module.exports = { TestPie, TestBar };
