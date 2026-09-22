import React from 'react'
import HeroMain from '../components/gallery/HeroMain'
import HeroBottom from '../components/gallery/HeroBottom'
import ImagesCol from '../components/gallery/ImagesCol'
import GalleryEnd from '../components/gallery/GalleryEnd'

const Gallery = () => {
    return (
        <>
            <HeroMain></HeroMain>
            <HeroBottom></HeroBottom>
            <ImagesCol></ImagesCol>
            <GalleryEnd></GalleryEnd>
        </>
    )
}

export default Gallery