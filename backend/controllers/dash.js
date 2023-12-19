const query = require("../database");

async function TestPie(req, res) {
  try {
    const pieData = await query(`SELECT id, nama_data, jumlah,
              CASE WHEN jumlah < 50  THEN 'Low'
                   WHEN jumlah < 200 THEN 'Mid'
                   WHEN jumlah >= 200 THEN 'High' 
              END AS my_size
              FROM test
              WHERE user_id = ?`, [req.id]);
    return res.json({
      Status: "Success",
      pieData: pieData.map((item) => ({
        id: item.id,
        label: item.my_size,
        value: item.jumlah,
      })),
    });
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}


// Bar
async function TestBar(req, res) {
  try {
    const barData = await query(`SELECT id, nama, tanggal, keluar, jumlah
                            FROM kudanil
                            WHERE user_id = ?`, [req.id]);

    const currentDate = new Date();
    const dataWithUpdatedStatus = barData.map(item => {
      const expirationDate = new Date(item.keluar);

      return {
        ...item,
        status: expirationDate < currentDate ? 'Obat Keluar' : 'Obat Masuk',
      };
    });

    return res.json({
      Status: "Success",

      barData: dataWithUpdatedStatus.map((item) => ({
        id: item.id,
        label: item.nama,
        masuk: item.tanggal,
        luar: item.keluar,
        value: item.jumlah,
        status: item.status,
      })),
    });
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}



module.exports = { TestPie, TestBar };
