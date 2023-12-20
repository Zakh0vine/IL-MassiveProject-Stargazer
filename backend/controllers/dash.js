const query = require("../database");

async function TestPie(req, res) {
  try {
    const pieData = await query(`
      SELECT
        my_size,
        SUM(stock) AS total_stock
      FROM (
        SELECT
          id,
          name,
          stock,
          CASE
            WHEN stock < 50  THEN 'Low'
            WHEN stock < 100 THEN 'Mid'
            WHEN stock >= 100 THEN 'High' 
          END AS my_size
        FROM obat
        WHERE user_id = ?
      ) AS categorized_data
      GROUP BY my_size;
    `, [req.id]);

    return res.json({
      Status: "Success",
      pieData: pieData.map((item) => ({
        id: item.my_size,
        label: item.my_size,
        value: item.total_stock,
      })),
    });
  } catch (error) {
    return res.status(400).json("Something went wrong!");
  }
}

// Jumlah
async function PieJumlah(req, res) {
  try {
    const pieData = await query(`SELECT id, name, stock,
              CASE 
                WHEN stock < 50  THEN 'Low'
                WHEN stock < 100 THEN 'Mid'
                WHEN stock >= 100 THEN 'High' 
              END AS my_size
              FROM obat
              WHERE user_id = ?`, [req.id]);
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
    const dataWithUpdatedStatus = barData.map(item => {
      const entryDate = new Date(item.tgl_masuk);
      const expirationDate = item.tgl_keluar ? new Date(item.tgl_keluar) : null;

      const isEntryWithin3Days = entryDate.getTime() >= currentDate.getTime() - 3 * 24 * 60 * 60 * 1000;
      const isExitWithin3Days = expirationDate && expirationDate.getTime() >= currentDate.getTime() - 3 * 24 * 60 * 60 * 1000;

      const status = isExitWithin3Days ? 'Keluar' : isEntryWithin3Days ? 'Masuk' : '';
      return {
        ...item,
        status: status,
      };
    }).filter(item => item.status !== '');

    return res.json({
      Status: 'Success',
      barData: dataWithUpdatedStatus.map(item => ({
        id: item.id,
        label: item.name,
        masuk: item.tgl_masuk,
        luar: item.tgl_keluar,
        value: item.stock,
        status: item.status,
      })),
    });
  } catch (error) {
    console.error('Error in TestBar:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}






module.exports = { TestPie, TestBar, PieJumlah };
