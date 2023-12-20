import React, { useEffect, useState } from 'react';

const Box_Notif = () => {
  const [notifications, setNotifications] = useState([]);
  const [visibleNotifications, setVisibleNotifications] = useState(10);

  useEffect(() => {
    fetch('http://localhost:4923/api/v1/notif', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (data.Status === "Success" && Array.isArray(data.notifications)) {
          setNotifications(data.notifications);
        } else {
          console.error('Invalid data format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const warnawarniNyoh = (ket) => {
    switch (ket) {
      case "Sedikit":
        return "text-burjo";
      case "Habis":
        return "text-keju";
      case "Expired":
        return "text-unggu";
      case "Keluar":
        return "text-banteng";
      case "Masuk":
        return "text-hijo";
      default:
        return "text-unggu";
    }
  };

  const Lingkaran = ({ bunder }) => (
    <div className="absolute inline-block">
      <div className="absolute top-[-10px] left-[-10px] w-14 h-14 bg-warnaUnggu rounded-full z-0 opacity-30">{bunder}</div>
    </div>
  );

  return (
    <div className="flex items-start w-full justify-center">
      <div className="lg:ml-4 lg:w-[750px]">
        <h1 className="relative text-3xl font-black mb-7">
          <Lingkaran />
          Notifikasi
        </h1>
        {notifications.length === 0 ? (
          <p className="text-2xl text-gray-900">Belum ada notifikasi</p>
        ) : (
          notifications.slice(0, visibleNotifications).map((e) => (
            <div key={e.name} className="mb-4">
              <div className={`p-3 rounded-sm outline outline-1 bg-white ${warnawarniNyoh(e.type)}`}>
                <div className="flex items-center">
                  <p className="pl-3 font-medium text-gray-900">
                    {e.message} <span className={`font-bold ${warnawarniNyoh(e.type)}`}>{e.type}</span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
        {notifications.length > visibleNotifications && (
          <button
            className="text-blue-500 cursor-pointer"
            onClick={() => setVisibleNotifications(visibleNotifications + 10)}
          >
            Tampilkan lebih banyak Lagi
          </button>
        )}
      </div>
    </div>
  );
};

export default Box_Notif;
