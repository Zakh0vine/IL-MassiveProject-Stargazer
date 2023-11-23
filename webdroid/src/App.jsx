import { Home, Register, Notifikasi, Report, Login, DashContent } from "./pages";
import { Route, Routes } from "react-router-dom";
import Proto_dash from "./pages/proto/proto_dash";

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
      <Route path="/dash" element={<Proto_dash />} />
    </Routes>
  );
}

export default App;
