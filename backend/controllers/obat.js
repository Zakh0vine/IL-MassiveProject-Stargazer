// Import modul mysql2
const mysql = require("mysql2/promise");

// Fungsi untuk membuat koneksi ke database
async function createConnection() {
  return mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "webdroid",
    password: "",
  });
}

// Fungsi untuk mendapatkan data dari tabel obat
async function getObatData() {
  try {
    // Membuat koneksi
    const connection = await createConnection();

    // Menjalankan query untuk mendapatkan data dari tabel obat
    const [rows] = await connection.execute("SELECT * FROM obat");

    // Menutup koneksi
    connection.end();

    // Mengembalikan hasil query
    return rows;
  } catch (error) {
    console.error("Error querying database:", error);
    throw error;
  }
}

module.exports = {
  getObatData,
};
