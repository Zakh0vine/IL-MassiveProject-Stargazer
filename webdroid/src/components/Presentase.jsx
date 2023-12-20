import React, { useEffect, useState } from 'react';

export default function Presentase({ value }) {
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [persentaseObatMasuk, setPersentaseObatMasuk] = useState(0);
    const [persentaseObatKeluar, setPersentaseObatKeluar] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4923/api/v1/bar', {
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
                setError(error.message || 'An error occurred while fetching data');
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (userData && userData.barData && userData.barData.length > 0) {
            const totalData = userData.barData.length;
            const obatMasukCount = userData.barData.filter(item => item.status === 'Obat Masuk').length;
            const obatKeluarCount = userData.barData.filter(item => item.status === 'Obat Keluar').length;

            setPersentaseObatMasuk((obatMasukCount / totalData) * 100);
            setPersentaseObatKeluar((obatKeluarCount / totalData) * 100);
        }
    }, [userData]);

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!userData || !userData.barData || userData.barData.length === 0) {
        return <p className={`md:mr-2 w-[65px] border rounded-full px-1 self-end flex justify-center font-semibold ${value === 'masuk' ? 'bg-green-400' : 'bg-red-400'}`}>0%</p>;
    }

    return (
        <div>
            {/* Gunakan nilai prop yang diteruskan */}
            <div className={`md:mr-2 w-[65px] border rounded-full px-1 self-end flex justify-center font-semibold ${value === 'masuk' ? 'bg-green-400' : 'bg-red-400'}`}>
                {value === 'masuk' ? persentaseObatMasuk.toFixed(1) : persentaseObatKeluar.toFixed(1)}%
            </div>
        </div>
    );
}
