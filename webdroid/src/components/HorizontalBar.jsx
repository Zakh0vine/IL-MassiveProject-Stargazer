import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const colors = ['#FF9742'];

const HorizontalBarChartCard = () => {
    const data = [
        { data: 'Obat Masuk', value: 250 },
        { data: 'Obat Keluar', value: 50 },
    ];

    return (
        <div style={{ height: '150px' }}>
            <ResponsiveBar
                data={data}
                keys={['value']}
                indexBy="data"
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

export default HorizontalBarChartCard;