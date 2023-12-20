const query = require("../database");

const olahanNotifikasi = (data) => {
  const notifications = [];

  // Proses data obat masuk
  data.obatMasuk.forEach((obat) => {
    const message = `Stok obat ${obat.name} pada ${obat.formatted_tgl_masuk} berhasil `;
    notifications.push({ message, type: "Masuk" });
  });

  // Proses data obat kadaluarsa
  data.obatKadaluarsa.forEach((obat) => {
    const message = `Obat ${obat.name}  pada ${obat.formatted_tgl_exp} sudah `;
    notifications.push({ message, type: "Expired" });
  });

  // Kadaluarsa h-1
  data.obatKadaluarsa2.forEach((obat) => {
    const message = `Stok obat ${obat.name} 3 Hari lagi pada ${obat.formatted_tgl_exp} akan `;
    notifications.push({ message, type: "Expired" });
  });

  // Sedikit
  data.obatSedikit.forEach((obat) => {
    const message = `Stok obat ${obat.name} Bisa di cek karena persedian `;
    notifications.push({ message, type: "Sedikit" });
  });

  // Punya Keluar
  if (data.obatKeluar) {
    data.obatKeluar.forEach((obat) => {
      const message = `Stok obat ${obat.name} pada ${obat.formatted_tgl_keluar} telah `;
      notifications.push({ message, type: "Keluar" });
    });
  }
  
  return notifications;
};

async function getNaon(req, res) {
  try {
    // Obat Masuk
    const obatMasuk = await query(`
      SELECT *, DATE_FORMAT(tgl_masuk, '%Y-%m-%d') AS formatted_tgl_masuk
      FROM obat
      WHERE tgl_masuk IS NOT NULL AND user_id = ?
    `, [req.id]);

    // Obat Kadal Hari H
    const obatKadaluarsa = await query(`
      SELECT *, DATE_FORMAT(tgl_exp, '%Y-%m-%d') AS formatted_tgl_exp
      FROM obat
      WHERE DATE(tgl_exp) = CURDATE() + INTERVAL 1 DAY AND user_id = ?
    `, [req.id]);

    // Obat Kadal H-3
    const obatKadaluarsa2 = await query(`
      SELECT *, DATE_FORMAT(tgl_exp, '%Y-%m-%d') AS formatted_tgl_exp
      FROM obat
      WHERE DATE(tgl_exp) = DATE_ADD(CURDATE(), INTERVAL 3 DAY) AND user_id = ?
    `, [req.id]);

    // Obat Sedikit
    const obatSedikit = await query(`
    SELECT * FROM obat
    WHERE stock <= 10 AND user_id = ?
  `, [req.id]);

    // Obat Keluar
    const obatKeluar = await query(`
    SELECT *, DATE_FORMAT(tgl_keluar, '%Y-%m-%d') AS formatted_tgl_keluar
    FROM obat
    WHERE tgl_keluar IS NOT NULL AND tgl_keluar <> '' AND user_id = ?
  `, [req.id]);

    const notifications = olahanNotifikasi({
      obatMasuk,
      obatKadaluarsa,
      obatKadaluarsa2,
      obatSedikit,
      obatKeluar,
    });

    return res.json({
      Status: "Success",
      notifications,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { getNaon };
