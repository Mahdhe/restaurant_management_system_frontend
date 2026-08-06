import React from 'react'
import HeroMain from '../components/layout/gallery/HeroMain'
import HeroBottom from '../components/layout/gallery/HeroBottom'
import ImagesCol from '../components/layout/gallery/ImagesCol'
import GalleryEnd from '../components/layout/gallery/GalleryEnd'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const Gallery = () => {
    return (

        <>

        <Navbar></Navbar>

        <HeroMain></HeroMain>
        <HeroBottom></HeroBottom>
        <ImagesCol></ImagesCol>
        <GalleryEnd></GalleryEnd>

        <Footer></Footer>

        </>

    )
}

export default Gallery