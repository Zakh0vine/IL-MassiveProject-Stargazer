import { notif, profile, Dashboard, Laporan, Logout, Notifications, Profile2, facebook, twitter, instagram } from "../assets";

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
  { title: " ", content: "", img: "" },
  { title: "Metode FIFO FEFO", content: 'Sistem rotasi stok "FIFO" (First-In-First-Out) & “FEFO” (First-Expired-First-Out) untuk efisiensi manajemen persediaan.', img: "path/to/image1.jpg" },
  { title: "Cetak Laporan", content: "Cetak laporan yang informatif dan mudah dipahami untuk analisis apotek dengan lebih baik.", img: "path/to/image1.jpg" },
  { title: "Notifikasi", content: "Dapatkan notifikasi ketika barang mendekati tanggal kadaluwarsa atau stok hampir habis.", img: "path/to/image1.jpg" },
  { title: "Filter dan Riwayat", content: "Memudahkan Anda dalam menyaring data, seperti jenis obat yang tersedia dan riwayat obat masuk maupun terjual.", img: "path/to/image1.jpg" },
];

export const sideNav = [
  {
    name: "Profile",
    title: "Profile",
    img: Profile2,
  },
  {
    name: "Dashboard",
    title: "Dashboard",
    img: Dashboard,
  },
  {
    name: "Laporan",
    title: "Laporan",
    img: Laporan,
  },
  {
    name: "Notifikasi",
    title: "Notifikasi",
    img: Notifications,
  },
  {
    name: "Keluar",
    title: "Keluar",
    img: Logout,
  },
];

// Notifikasi
export const obat = [{ nama: "Paracetamol" }, { nama: "bodrex" }, { nama: "panadol" }, { nama: "masker" }, { nama: "komik" }];

// Masih cacat ya sistemnya, belum dapat penecerahan
export const notifikasi = [
  {
    id: "1",
    title: `Stok obat ${obat[0].nama} sudah`,
    ket: "sedikit",
    kadal: "",
  },
  {
    id: "2",
    title: `Stok obat ${obat[1].nama} sudah`,
    ket: "habis",
    kadal: "",
  },
  {
    id: "3",
    title: `Stok obat ${obat[2].nama} sudah`,
    ket: "expired ",
    kadal: "1 November 2023 kemarin",
  },
  {
    id: "4",
    title: `Stok barang ${obat[3].nama} sudah`,
    ket: "habis",
    kadal: "",
  },
  {
    id: "5",
    title: `Stok obat ${obat[4].nama} sudah`,
    ket: "keluar",
    kadal: "1 November 2023",
  },
  {
    id: "6",
    title: `Stok obat ${obat[0].nama} sudah`,
    ket: "masuk",
    kadal: " 17 Oktober 2023",
  },
];

export const footerLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "tentang",
    title: "Tentang",
  },
  {
    id: "fitur",
    title: "Fitur",
  },
  {
    id: "demo",
    title: "Demo",
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
