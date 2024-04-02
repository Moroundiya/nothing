import React from 'react'

function Designed() {
    return (
        <div className='w-full h-auto bg-white pb-8 xl:px-34 lg:px-16 lg:pb-16 overflow-hidden'>
            <h1 className='text-[1.73rem] sm:text-4xl py-8 lg:py-12 text-center font-[Ndot] lg:text-[3rem] 2xl:text-[4rem] font-normal' data-aos='flip-up'>DESIGNED FOR YOU</h1>
            <div className=' bg-white w-full px-4 md:px-8 h-auto grid-cols-1 grid gap-y-6 md:gap-y-0 md:gap-x-6 md:grid-cols-2 xl:gap-x-14 lg:px-0'>
                <div className="bg-battery-life h-[670px] sm:h-[750px] py-10 lg:h-[800px] w-full bg-cover bg-center bg-no-repeat 2xl:p-10 text-center">
                    <h1 className='font-[Ndot] text-[1.72rem] sm:text-4xl xl:text-[2.6rem] 2xl:text-[3.2rem] w-3/4 font-medium mx-auto mb-5 leading-tight sm:leading-tight' data-aos='fade-right'>ALL DAY BATTERY LIFE</h1>
                    <p className='font-[Figtree] px-4 text-[1.09rem] sm:text-[1.15rem] md:w-4/5 mx-auto leading-snug lg:w-full xl:px-8 lg:text-[1.28rem] 2xl:text-[1.38rem]' data-aos='fade-left'>Compactly delivered. Up to 7 hours of listening time. Nearly 2 hours with just 10 minutes of charge. 12 hours of talk time with the case and 3 hours with the earbuds.</p>
                </div>
                <div className='bg-connectivity h-[670px] sm:h-[750px] py-10 lg:h-[800px] w-full bg-cover bg-center bg-no-repeat 2xl:p-10 text-center'>
                    <h1 className='font-[Ndot] text-[1.72rem] sm:text-4xl xl:text-[2.6rem] 2xl:text-[3.2rem] w-3/4 font-medium mx-auto mb-5 leading-tight sm:leading-tight' data-aos='fade-left'>OPTIMIZED CONNECTIVITY</h1>
                    <p className='font-[Figtree] px-4 text-[1.09rem] sm:text-[1.15rem] md:w-4/5 mx-auto lg:w-full leading-snug lg:text-[1.28rem] xl:px-8 2xl:text-[1.38rem]' data-aos='fade-right'>Maximum stability. Deeper experiences. Connect easily to any Android device with Fast Pair. Automatically switches to low lag mode when you game on Phone (1).</p>
                </div>
            </div>
        </div>
    )
}

export default Designed