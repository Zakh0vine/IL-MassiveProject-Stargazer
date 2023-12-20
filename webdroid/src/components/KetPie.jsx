import React, { useEffect, useState } from 'react';
import Bar from './Bar';
import { Kosong } from '../assets';

const KetPie = () => {
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
    return (
      <div>
        <img src={Kosong} alt="Deskripsi Gambar" />
      </div>
    );
  }

  const categories = [ 'High', 'Mid', 'Low'];

  return (
    <div className="flex md:gap-6 gap-[100px]  mt-5 md:mx-6 mx-[40px]">
      <div className="flex flex-col gap-5">
        {categories.map((category) => (
          <div key={category} className={`font-bold text-${category.toLowerCase()}`}>
            {category}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-5 mt-[-3px]">
        {categories
        .map((category) => {
            
          const dataItem = userData.pieData.find((item) => item.id === category) || { value: 0 };
          return (
            <div key={category}>
              <Bar id={category} value={dataItem.value} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KetPie;
