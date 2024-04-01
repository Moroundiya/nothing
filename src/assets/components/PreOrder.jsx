import React from 'react';
import CreateSpec from '../props/Spec';
import specInfo from '../data/specInfo';

export default function PreOrder() {
    return (
        <div className='w-full h-auto py-1 pb-12 md:h-[500px] md:py-14 lg:h-[1000px] bg-airpod-bg bg-bottom bg-cover bg-no-repeat text-center lg:py-16 overflow-hidden'>
            <div data-aos="flip-up" className='overflow-hidden'>
                <h1 className='text-3xl sm:text-4xl lg:text-6xl font-[Ndot] text-white'>EAR (2) BLACK</h1>
                <p className='text-[1.05rem] sm:text-lg text-white pt-3 pb-2 font-[Figtree] font-thin lg:pt-5 lg:pb-3'>Shaped for enhanced comfort.</p>
                <a href="#" className='font-[Figtree] text-white text-[1.08rem] sm:text-lg font-thin'>Pre order</a>
            </div>
            <div className='mt-14 px-6 grid-cols-2 gap-x-10 grid gap-y-16 md:px-20 md:grid-cols-4'>
                {specInfo.map(CreateSpec)}
            </div>
        </div>
    )
}
