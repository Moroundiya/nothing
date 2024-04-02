import React from 'react';
import nothingVideo from '../images/nothing_video.gif';


function EarBlack() {
    return (
        <div className='w-full h-auto bg-black text-center py-12 lg:pt-[6rem]'>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl font-[Ndot] text-white' data-aos='fade-down'>EAR (2) BLACK</h1>
            <p className='text-md sm:text-[1.13rem] leading-snug px-3 md:w-3/5 lg:text-xl text-[#DCDCDC] font-[Figtree] font-thin my-5 lg:w-2/4 mx-auto 2xl:w-2/5' data-aos='zoom-in'>Tech you can’t feel. Leaving just space for sound to come to life. Powered by custom sound technology. Beautifully authentic, at any frequency.</p>
            <a href="#" className='text-[1.06rem] pt-1 pb-3 font-[Figtree] text-white lg:text-[1.4rem] font-thin block' data-aos='fade-up'>Learn More</a>
            <img src={nothingVideo} alt="Video" className='mx-auto img-fluid' />
        </div>
    )
}

export default EarBlack