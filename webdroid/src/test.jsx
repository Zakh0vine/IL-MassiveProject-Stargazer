import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestPieTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4923/api/v1/pie'); // Ganti dengan URL API yang sesuai
        setData(response.data.pieData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h2>Data Test Pie</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Label</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.label}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestPieTable;
