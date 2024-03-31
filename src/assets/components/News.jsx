import React from 'react';
import newsImg from '../images/news-image.png';


function News() {
    return (
        <div className='px-4 md:px-8 w-full h-auto bg-white lg:px-16 2xl:px-34 pb-8 lg:pb-16 xl:pb-24 overflow-hidden'>
            <h1 className='py-8 text-4xl lg:py-16 text-center font-[Ndot] lg:text-[3rem] 2xl:text-[4rem]font-normal' data-aos='flip-up'>NEWS</h1>
            <div className=' bg-white h-auto gap-y-10 md:gap-y-0 md:gap-x-8 grid grid-cols-1 md:grid-cols-2  lg:gap-y-0 lg:gap-x-8'>
                <div className="flex order-last flex-col justify-center items-start font-[Figtree] lg:order-first">
                    <p className='flex flex-col border-b pb-4 lg:pb-6 border-[#5d5d5d54] mb-4 lg:mb-6 w-full' data-aos='fade-right'>
                        <span className='text-xl lg:text-[1.6rem] 2xl:text-[1.7rem] font-medium lg:w-4/5 leading-snug'>Nothing raises $100 million to build the apple of android.</span>
                        <a href="#" className='text-lg mt-3 lg:mt-4 text-[#5D5D5D] underline'>Read More</a>
                    </p>
                    <p className='text-xl pb-4 lg:text-[1.6rem] 2xl:text-[1.7rem] font-medium leading-snug border-b lg:pb-6 border-[#5d5d5d54] mb-4 lg:mb-6 text-[#5d5d5dd3] w-full' data-aos='fade-right' data-aos-delay='400'>Nothing has teamed up with electronic music titans Swedish House Mafia to bring exclusive sounds to the Glyph Composer.</p>
                    <p className='text-xl pb-4 lg:text-[1.6rem] 2xl:text-[1.7rem] font-medium leading-snug border-b lg:pb-6 border-[#5d5d5d54] mb-4 lg:mb-6 text-[#5d5d5dd3] w-full' data-aos='fade-right' data-aos-delay='600'>Introducing Phone (2) ft. Casey Neistat</p>
                    <p className='text-xl pb-4 lg:text-[1.6rem] 2xl:text-[1.7rem] font-medium leading-snug border-b lg:pb-6 border-[#5d5d5d54] mb-4 lg:mb-6 text-[#5d5d5dd3] w-full' data-aos='fade-right' data-aos-delay='800'>We’re proud to have won three Red Dot Design Awards for Phone (1), Ear (stick) & Ear (2). <br />
                    </p>
                    <a href="#" className='font-semibold text-lg lg:text-xl mt-3 block' data-aos='fade-down' data-aos-delay='1000'>More News</a>
                </div>
                <div className='h-auto'>
                    <img src={newsImg} className='md:mx-auto' alt="News" data-aos='zoom-in' />
                </div>
            </div>
        </div>
    )
}

export default News;