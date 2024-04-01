import React from 'react';
import nothing_phone from '../images/nothing-phone.png';


function Nothing() {
    return (
        <div className='w-full  bg-[#F4F4F2] px-4 py-8 md:px-8 grid grid-cols-1 md:grid-cols-2 2xl:px-20 lg:px-16 lg:py-10 overflow-hidden'>
            <div className='mb-14 lg:mb-0 flex justify-center flex-col'>
                <h1 className='text-[1.65rem] sm:text-4xl lg:text-[3.6rem] 2xl:text-[4.1rem] font-[Ndot] w-full leading-snug text-black' data-aos="fade-down">NOTHING PHONE (1)</h1>
                <p className='leading-snug text-[1.09rem] sm:text-[1.2rem] lg:text-[1.4rem] 2xl:text-2xl color-[#3D3D3D] my-6 font-[FigTree] font-normal lg:my-8 w-full lg:pe-16 2xl:my-10' data-aos="flip-up">Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast.</p>
                <p className='text-[1.12rem] sm:text-[1.2rem] lg:text-[1.35rem] 2xl:text-2xl font-[FigTree] font-bold space-x-6 lg:space-x-8 flex '>
                    <a href="" data-aos="fade-right" className='block'>Learn more</a>
                    <a href="" data-aos="fade-left" className='block'>View models</a>
                </p>
            </div>

            <div className='' data-aos="zoom-in">
                <img src={nothing_phone} alt="" />
            </div>
        </div>
    )
}

export default Nothing