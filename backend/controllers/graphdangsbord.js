const query = require("../database");

const pieData = async (req, res) => {
  try {
    const data = await query(`SELECT id, nama_data, jumlah,
      CASE when jumlah < 50  THEN 'Low'
           when jumlah < 200 THEN 'Mid'
           when jumlah > 200 THEN 'High'
          END AS my_size
       FROM test`);

    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const getWaktu = async (req, res) => {
  try {
    const currentDate = new Date(); // Mendapatkan tanggal saat ini
    const waktu = await query(`SELECT id, id_user, nama, tanggal, jumlah, kadaluarsa FROM babon`);

    const dataWithUpdatedStatus = waktu.map((item) => {
      const expirationDate = new Date(item.kadaluarsa);

      if (expirationDate < currentDate) {
        return { ...item, status: "Obat Keluar" };
      } else {
        return { ...item, status: "Obat Masuk" };
      }
      return item;
    });
    return res.status(200).json({ waktu: dataWithUpdatedStatus });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  pieData,
  getWaktu,
};
