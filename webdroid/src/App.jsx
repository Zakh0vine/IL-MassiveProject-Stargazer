import { Home, Register, Notifikasi, ContentReport } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Tambah Aja Route Halaman lain dibawah */}
        <Route path="/Notifikasi" element={<Notifikasi />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/report" element={<ContentReport />} />
      </Routes>
    </>
  );
}

export default App;
