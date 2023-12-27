import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import fetchData from '../../../backend/api/apiBar';

const colors = ['#FF9742'];

const TestChartBar = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchDataAndProcess = async () => {
            try {
                const apiData = await fetchData();
        console.log(apiData); 
                const groupedData = apiData.waktu.reduce((accumulator, item) => {
                    const label = item.status;
                    if (!accumulator[label]) {
                        accumulator[label] = { id: label, label, value: 0 };
                    }
                    accumulator[label].value += item.jumlah;
                    return accumulator;
                }, {});

                const formattedData = Object.values(groupedData);

                setData(formattedData);
            } catch (error) {
                console.log(error);
            }
        }
        fetchDataAndProcess();
    }, [])
    if (data.length === 0) {
        return <div>la</div>;
    }

    return (
        <div style={{ height: '150px' }}>
            <ResponsiveBar
                data={data}
                keys={['value']}
                indexBy="label"
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

export default TestChartBar;