import React, { useEffect, useState } from 'react';

export default function Total() {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4923/api/v1/piej', {
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
        <div className='font-medium text-xl'> {userData && userData.pieData && (
            <p>{userData.pieData.reduce((total, d) => total + d.value, 0)}</p>
        )}</div>
    )
}
