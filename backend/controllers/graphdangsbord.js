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


module.exports = {
  pieData,
};
