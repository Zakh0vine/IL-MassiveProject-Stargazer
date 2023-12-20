import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';

const colors = ['#FF9742'];

const TestingBar = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4923/api/v1/bar', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message || 'An error occurred while fetching data');
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!userData || !userData.barData || userData.barData.length === 0) {
    return <div className='font-bold flex justify-center items-center text-lg'>
      <div className='py-9'>
        Data Kosong
      </div>
    </div>
  }


  const groupedData = userData.barData.reduce((acc, item) => {
    const status = item.status;
    if (!acc[status]) {
      acc[status] = { id: status, value: 0 };
    }
    acc[status].value += item.value;
    return acc;
  }, {});

  const groupedDataArray = Object.values(groupedData);

  return (
    <div style={{ height: '150px' }}>
      <ResponsiveBar
        data={groupedDataArray}
        keys={['value']}
        indexBy="id"
        margin={{ top: 20, right: 50, bottom: 40, left: 69 }}
        padding={0.3}
        layout="horizontal"
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: [],
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: 'middle',
          legendOffset: -40,
          enableLabel: false,
        }}
        width={300}
        height={140}
        enableGridX={false}
        enableGridY={false}
        colors={colors}
      />
    </div>
  );
};

export default TestingBar;
