-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 27 Des 2023 pada 14.43
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webdroid`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `obat`
--

CREATE TABLE `obat` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `catatan` text NOT NULL,
  `tgl_masuk` date NOT NULL,
  `tgl_keluar` date NOT NULL,
  `tgl_exp` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data untuk tabel `obat`
--

INSERT INTO `obat` (`id`, `user_id`, `name`, `brand`, `stock`, `catatan`, `tgl_masuk`, `tgl_keluar`, `tgl_exp`) VALUES
(1, 12, 'Obat kumur antiseptik', 'Betadin', 10, 'Disimpan di tempat aman', '2023-06-05', '2023-07-01', '2024-06-05'),
(2, 12, 'Obat saluran cerna', 'Metoklopramid (Antimual)', 60, 'Butuh resep dokter', '2023-12-21', '0000-00-00', '2024-12-07'),
(3, 12, 'Obat saluran cerna', 'Bisakodil Suppo (Laksan)', 100, 'Butuh resep dokter', '2023-08-10', '2023-12-05', '2024-08-09'),
(4, 12, 'Obat mulut dan tenggorokan', 'Triamcinolone acetonide', 40, '-', '2022-12-20', '0000-00-00', '2023-12-22'),
(5, 12, 'Obat mulut dan tenggorokan', 'Hexetidin', 60, '-', '2023-01-01', '2023-01-05', '2024-01-01'),
(6, 12, 'Obat saluran napas', 'Asetilsistein', 200, 'Simpan Tempat Aman', '2023-04-21', '2023-05-15', '2024-02-05'),
(7, 12, 'Obat saluran napas', 'Salbutamol', 49, '-', '2023-11-11', '2023-11-12', '2024-11-11'),
(8, 12, 'Antiparasit', 'Mebendazol', 10, '-', '2023-10-25', '2023-11-02', '2024-10-25'),
(9, 12, 'Obat kulit topikal', 'Gentamisin', 21, '-', '2023-04-11', '2023-04-12', '2024-04-20'),
(10, 12, 'Obat kulit topikal', 'Nistatin', 67, '-', '2023-07-09', '2023-07-10', '2024-07-05'),
(11, 12, 'Organ sensorik', 'Kloramfenikol', 40, 'Resep Dokter', '2023-03-04', '2023-03-05', '2024-03-11'),
(12, 12, 'Sistem muskuloskeletal', 'Alopurinol', 89, '-', '2023-12-25', '0000-00-00', '2024-12-30'),
(13, 12, 'Saluran pencernaan', 'Ranitidin', 37, '-', '2023-08-08', '2023-08-10', '2024-08-10'),
(14, 12, 'Antiasma', 'Orsiprenalin', 5, '-', '2022-12-05', '0000-00-00', '2023-12-22'),
(15, 12, 'Antihistamin', 'Cetirizin', 24, '-', '2023-01-02', '2023-01-03', '2024-02-05'),
(16, 12, 'Antihistamin', 'Siproheptadin', 79, '-', '2023-08-10', '2023-09-01', '2024-11-01'),
(17, 12, 'Sistem muskuloskeletal', 'Diklofenak natrium', 5, '-', '2023-02-25', '2023-05-05', '2024-02-05'),
(18, 12, 'Sistem muskuloskeletal', 'Piroksikam', 5, '-', '2023-03-15', '2023-04-05', '2024-03-05'),
(19, 12, 'Kardiovaskular', 'Angioten', 50, '-', '2023-12-21', '0000-00-00', '2024-04-05'),
(20, 12, 'Kardiovaskular', 'Cardismo', 100, '-', '2023-12-21', '2023-12-27', '2024-12-21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstname`, `lastname`, `email`, `phone_number`, `password`, `image`) VALUES
(11, 'Dadang', 'Mangkudu', 'dadang@gmail.com', 812345678901, '$2a$12$cslyfpqERqA.ailtoPKCUekakudQV7YULf9AKJO0Gc77yVP59HDre', NULL),
(12, 'Asepti', 'Stroberi', 'asep@gmail.com', 81987654321, '$2a$12$KDAI1XGzABT.C6mR.fQAFufjWmtdg10DSIrNe29Q1EwXgjLcOu4pC', 'image_1703172009145.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `obat`
--
ALTER TABLE `obat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `obat`
--
ALTER TABLE `obat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `obat`
--
ALTER TABLE `obat`
  ADD CONSTRAINT `obat_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
