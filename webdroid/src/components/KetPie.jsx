import React, { useEffect, useState } from 'react';
import Bar from './Bar';
export default function KetPie() {
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

    return (
        <div className="flex md:gap-6 gap-[100px]  mt-5 md:mx-6 mx-[40px]">
            <div className="flex flex-col gap-5">
                <div className='font-bold text-high '>Full</div>
                <div className='font-bold text-mid'>Mid</div>
                <div className='font-bold text-low'>Low</div>
            </div>
            {/* Value */}
            <div className='flex flex-col gap-5 mt-[-3px]'>
                {userData && userData.pieData
                    ? userData.pieData
                        .sort((a, b) => b.value - a.value)
                        .map((dataItem) => (
                            <div key={dataItem.id}>
                                <Bar id={dataItem.id} value={dataItem.value} />
                            </div>
                        ))
                    : <p>Loading...</p>
                }
            </div>
        </div>
    )
}
