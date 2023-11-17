import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Card from './component/Home/Card';
import About from './component/Home/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
