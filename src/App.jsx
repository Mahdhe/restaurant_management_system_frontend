import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Reservation from './pages/Reservation'



const App = () => {
  return (
    <>
      <Navbar />

     
        <Reservation></Reservation>
        
      
      
      <Footer />
    </>
  )
}

export default App