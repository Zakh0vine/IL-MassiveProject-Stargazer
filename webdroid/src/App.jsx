import { Home, Register, Notifikasi, Report, Login, Profile, Blank, DashContent } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Tambah Aja Route Halaman lain dibawah */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notifikasi" element={<Notifikasi />} />
      <Route path="/report" element={<Report />} />
      <Route path="/dashboard" element={<DashContent />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blank" element={<Blank />} />
    </Routes>
  );
}

export default App;
