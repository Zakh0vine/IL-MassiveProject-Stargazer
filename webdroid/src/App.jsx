import { Notifikasi, Home }  from "../src/components";
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Tambah Aja Route Halaman lain dibawah */}
        <Route path='/notifikasi' element={<Notifikasi />} />

      </Routes>
    </>
  )
}

export default App
