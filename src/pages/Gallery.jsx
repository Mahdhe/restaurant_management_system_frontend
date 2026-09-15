import React from 'react'
import HeroMain from '../components/layout/gallery/HeroMain'
import HeroBottom from '../components/layout/gallery/HeroBottom'
import ImagesCol from '../components/layout/gallery/ImagesCol'
import GalleryEnd from '../components/layout/gallery/GalleryEnd'

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