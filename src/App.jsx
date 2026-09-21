import { Routes, Route } from "react-router-dom";

import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Reservation from './pages/Reservation'



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/reservations" element={<Reservation></Reservation>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App