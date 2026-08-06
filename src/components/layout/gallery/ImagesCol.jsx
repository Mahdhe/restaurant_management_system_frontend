import React from 'react'

import img1 from '../../../assets/col1img1imgcol.jpg'
import img2 from '../../../assets/col1img2imgcol.jpg'
import img3 from '../../../assets/col2img1imgcol.jpg'
import img4 from '../../../assets/col2img2imgcol.jpg'
import img5 from '../../../assets/col2img3imgcol.jpg'
import img6 from '../../../assets/col3img1imgcol.jpg'
import img7 from '../../../assets/col3img2imgcol.jpg'
import img8 from '../../../assets/col3img3imgcol.jpg'
import img9 from '../../../assets/col4img1imgcol.jpg'
import img10 from '../../../assets/col4img2imgcol.jpg'

const ImagesCol = () => {
    return (

        <section className="w-full gap-[10px] px-4 sm:px-8 md:px-[120px] py-12 md:py-[72px] bg-[#0F1923]">

            <div className="w-full max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

                <div className="flex flex-col gap-4">
                    <img src={img1} alt="Description of photo 1" className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] rounded-xl" />
                    <img src={img2} alt="Description of photo 2" className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] rounded-xl" />
                </div>

                <div className="flex flex-col gap-4">
                    <img src={img3} alt="Description of photo 1" className="w-full object-cover h-[180px] sm:h-[260px] md:h-[355px] rounded-xl" />
                    <img src={img4} alt="Description of photo 2" className="w-full object-cover h-[180px] sm:h-[260px] md:h-[355px] rounded-xl" />
                    <img src={img5} alt="Description of photo 2" className="w-full object-cover h-[180px] sm:h-[260px] md:h-[355px] rounded-xl" />
                </div>

                <div className="flex flex-col gap-4">
                    <img src={img6} alt="Description of photo 1" className="w-full object-cover h-[180px] sm:h-[260px] md:h-[355px] rounded-xl" />
                    <img src={img7} alt="Description of photo 2" className="w-full object-cover h-[180px] sm:h-[260px] md:h-[355px] rounded-xl" />
                    <img src={img8} alt="Description of photo 2" className="w-full object-cover h-[180px] sm:h-[260px] md:h-[355px] rounded-xl" />
                </div>

                <div className="flex flex-col gap-4">
                    <img src={img9} alt="Description of photo 1" className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] rounded-xl" />
                    <img src={img10} alt="Description of photo 2" className="w-full object-cover h-[200px] sm:h-[300px] md:h-[400px] rounded-xl" />
                </div>

            </div>
        </section>
    )
}

export default ImagesCol