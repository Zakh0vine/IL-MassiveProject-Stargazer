import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { Kosong } from "../assets"
import Total from './Total';

const colors = ['#FF949F', '#53DFB5', '#59C5F7'];

const DiaPie = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4923/api/v1/pie', {
          method: 'GET',
          headers: {
            'Authorization': 'Bearer ' + '',
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
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!userData || !userData.pieData) {
    return <div>
    <img src={Kosong} alt="Deskripsi Gambar" />
  </div>;
  }

  const categoryColors = {
    Low: '#FF949F',
    Mid: '#59C5F7',
    High: '#53DFB5',
  };

  return (
    <div style={{ height: 350, width: 300, position: 'relative' }}>
      <ResponsivePie
        data={userData.pieData}
        margin={{ right: 170, bottom: 210, top: 20 }}
        sortByValue={true}
        innerRadius={0.5}
        activeOuterRadiusOffset={1}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        enableArcLabels={false}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={'#333333'}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        arcLinkLabelsDiagonalLength={false}
        arcLinkLabelsStraightLength={false}
        arcLinkLabel={false}
        arcLabel={false}
        colors={(d) => categoryColors[d.id]}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        radialLabelsText={(d) => `${d.id}\n${d.my_size} ${d.value}`} // njir apa ini 
      />
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '21%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'gray',
        }}
      >
        <br />
        <Total />
      </div>
    </div>
  );
};


export default DiaPie;