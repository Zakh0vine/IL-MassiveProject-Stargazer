import { notif, profile, Dashboard, Laporan, Logout, Notifications, Profile2 } from "../assets";

export const navLinks = [
    {
        id: "fitur",
        title: "Fitur",
    },
    {
        id: "demo",
        title: "Demo",
    },
    {
        id: "tentang",
        title: "Tentang",
    },
    {
        id: "download",
        title: "Download",
    },
    {
        id: "masuk",
        title: "Masuk",
    },
    {
        id: "daftar",
        title: "Daftar",
    },
    {
        id: "notifikasi",
        title: notif,
    },
    {
        id: "profile",
        title: profile,
    },
];


// Pindah sini biar ada temen 
export const cardsData = [
    { title: ' ', content: '', img: "" },
    { title: 'Metode FIFO FEFO', content: 'Sistem rotasi stok "FIFO" (First-In-First-Out) & “FEFO” (First-Expired-First-Out) untuk efisiensi manajemen persediaan.', img: 'path/to/image1.jpg' },
    { title: 'Cetak Laporan', content: 'Cetak laporan yang informatif dan mudah dipahami untuk analisis apotek dengan lebih baik.', img: 'path/to/image1.jpg' },
    { title: 'Notifikasi', content: 'Dapatkan notifikasi ketika barang mendekati tanggal kadaluwarsa atau stok hampir habis.', img: 'path/to/image1.jpg' },
    { title: 'Filter dan Riwayat', content: 'Memudahkan Anda dalam menyaring data, seperti jenis obat yang tersedia dan riwayat obat masuk maupun terjual.', img: 'path/to/image1.jpg' },
];


export const sideNav = [
    {
        name:  'Profile',
        title: 'Profile',
        img: Profile2,
    },
    {
        name:  'Dashboard',
        title: 'Dashboard',
        img: Dashboard,
    },
    {
        name:  'Laporan',
        title: 'Laporan',
        img: Laporan,
    },
    {
        name:  'Notifikasi',
        title: 'Notifikasi',
        img: Notifications,
    },
    {
        name:  'Keluar',
        title: 'Keluar',
        img: Logout,
    },
]