import React from 'react';
import dual_camera from '../images/dual-camera.png';


function Dual() {
    return (
        <div className='bg-white flex-col w-full space-y-8 h-auto py-6 px-4 md:px-8 lg:py-20 lg:px-16 2xl:px-12 flex md:flex-row md:space-x-8 md:space-y-0'>
            <div className='bg-[#EFF1F3] md:w-2/5 px-6 pt-8 lg:px-12 lg:pt-12'>
                <h1 className='text-4xl lg:text-5xl 2xl:text-6xl font-[NDot] leading-[1.2]' data-aos='fade-down'>50MP <br /> DUAL CAMERA</h1>
                <p className='my-5 leading-snug lg:my-6 text-lg lg:text-[1.4rem] 2xl:text-2xl font-[FigTree] text-[#292929]' data-aos='fade-up'>This extraordinary dual camera has two advanced 50 MP sensors.</p>
                <img src={dual_camera} className='text-left' alt="Dual Camera" />
            </div>

            <div className='bg-interface h-[500px] md:h-auto lg:bg-interface-bg bg-bottom lg:bg-center bg-cover px-8 pt-10 bg-no-repeat md:w-3/5 lg:px-12 lg:pt-12 text-white'>
                <h1 className='text-4xl lg:text-5xl 2xl:text-6xl font-[NDot] leading-[1.2]' data-aos='fade-down'>GLYPH INTERFACE</h1>
                <p className='my-5 text-lg leading-snug lg:my-6 lg:text-[1.4rem] 2xl:text-2xl font-[FigTree] text-[#DCDCDC]' data-aos='fade-up'>
                    Meet the Glyph Interface. A new way to communicate. Unique light patterns indicate who’s calling. Signals app notifications, charging status and more. Everyday interactions, made joyful.
                </p>
            </div>
        </div>
    )
}

export default Dual