import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Tambah Aja Route Halaman lain dibawah */}


      </Routes>
    </>
  )
}

export default App
