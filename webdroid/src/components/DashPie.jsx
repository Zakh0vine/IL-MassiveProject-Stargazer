import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const colors = ['#53DFB5', '#59C5F7', '#FF949F'];

const DiaPie = ({ data, isDashboard = false }) => (

  <div style={{ height: 350, width: 300 }}>
    <ResponsivePie
      data={data}
      margin={{ right: 180, bottom: 210, top: 20 }}
      sortByValue={true}
      innerRadius={0.5}
      activeOuterRadiusOffset={1}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      enableArcLabels={!isDashboard}
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

    />
  </div>
);

export default DiaPie;