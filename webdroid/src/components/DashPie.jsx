import React, { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import fetchData from '../../../backend/api/apiPie';

const colors = ['#FF949F', '#59C5F7', '#53DFB5'];

const DiaPie = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchDataProces = async() => {
      try {
        const api = await fetchData()
        const grouping = api.data.reduce((nama, item) => {
          const label = item.my_size
          if (!nama[label]) {
            nama[label] = { id: label, label, value: 0 };
          }
          nama[label].value += item.jumlah;
          return nama;
        }, {})

        const formatData = Object.values(grouping)
        setData(formatData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataProces();
  }, []);

  if (data.length === 0) {
    return <div>a</div> ;
  }
  
  return (
    <div style={{ height: 350, width: 300, position: 'relative' }}>
      <ResponsivePie
        data={data}
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
        arcLinkLabelsTextColor={"#333333"}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]]
        }}
        arcLinkLabelsDiagonalLength={false}
        arcLinkLabelsStraightLength={false}
        arcLinkLabel={false}
        arcLabel={false}
        colors={colors}
        radialLabelsSkipAngle={10}
        radialLabelsTextColor="#333333"
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: 'color' }}
        sliceLabelsSkipAngle={10}
        sliceLabelsTextColor="#333333"
        radialLabelsText={(d) => `${d.id}\n${d.value}`} // njir apa ini 
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
          color: 'gray'
        }}
      >
        <br />
        {data.reduce((total, d) => total + d.value, 0)}
      </div>
    </div>
  )
};



export default DiaPie;