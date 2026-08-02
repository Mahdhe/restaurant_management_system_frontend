import React from 'react'
import { Router, Routes } from 'react-router-dom'
import Reservation from './pages/Reservation'
import GalleryPage from './pages/GalleryPage'

const App = () => {

  return (

    // <div className='px-4 sm:[5vw] md:[7vw] lg:[9vw]'>

    //   <Routes>

    //     <Route path='/reservation' element={<Reservation/>} />

    //   </Routes>

    // </div>

    <>

      <div className='sm:[5vw] md:[7vw] lg:[9vw]'>

        <Reservation></Reservation>
        {/* <GalleryPage></GalleryPage> */}
        
      </div>

    </>

  )
}

export default App
