import React, { useContext } from 'react';
import text from '../data/text';
import { TabContext } from '../../App';

function Water() {
    const { content, setContent } = useContext(TabContext);

    return (
        <div className={`h-[650px] lg:h-[1000px] w-full pb-10 pr-4 md:pr-8 lg:pr-16 relative bg-cover bg-water bg-center bg-no-repeat flex items-end justify-end flex-col lg:pb-[8rem] tab-parent`}>
            <h1 className='text-[#D1D1D1] font-[Ndot] text-[1.58rem] sm:text-[1.9rem] lg:text-6xl tab-parent'>{text[content].title}</h1>
            <p className='text-[#B0B0B0] text-sm font-[Figtree] w-11/12 md:w-3/5 lg:w-3/5 text-right mt-5 lg:text-xl tab-parent 2xl:w-2/4'>{text[content].info}</p>
        </div>
    )
}

export default Water