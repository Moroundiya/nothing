import React, { useContext, useEffect } from 'react'
import { TabContext } from '../../App'
import text from '../data/text';
import Enhance from './Enhance';
import Water from './Water';
import Press from './Press';

export const Tab = () => {
    const { content, setContent } = useContext(TabContext);

    useEffect(() => {
        // console.log(content)
    }, [content])

    return (
        <div className='relative'>
            <ul className='absolute top-10 left-4 md:left-6 text-[1.12rem] sm:text-[1.15rem] lg:top-[6rem] lg:left-[4.1rem] 2xl:left-[6rem] font-[figtree] lg:text-[1.25rem] xl:text-[1.3rem] text-[#6D6D6D] font-medium z-20 transition-all'>
                <li onClick={() => setContent('enhance')} className={(content === 'enhance') ? 'enhance-active py-1 lg:py-2 pl-3 cursor-pointer' : 'py-1 lg:py-2 pl-3 cursor-pointer tab-menu'}>Enhanced Performance</li>
                <li onClick={() => setContent('water')} className={(content === 'water') ? 'water-active py-1 lg:py-2 pl-3 cursor-pointer' : 'py-1 lg:py-2 pl-3 cursor-pointer tab-menu'}>Water Resistance</li>
                <li onClick={() => setContent('press')} className={(content === 'press') ? 'press-active py-1 lg:py-2 pl-3 cursor-pointer' : 'py-1 lg:py-2 pl-3 cursor-pointer tab-menu'}>Press Control</li>
            </ul>


            {
                (content === 'enhance') && <Enhance />
            }

            {
                (content === 'water') && <Water />
            }
            {
                (content === 'press') && <Press />
            }

        </div>
    )
}
