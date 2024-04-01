import React, { useState, useEffect } from 'react';
import text from '../data/text.js';
import enhanceBg from '/public/Enhanced_Performance.png';
import waterBg from '/public/Water_Resistence.png';
import pressBg from '/public/Press_Control.png';


function CreateList({ children, onChange, classn }) {
    return (
        <li className={classn} onClick={onChange}>{children}</li>
    )
}

function Tabs() {

    const [content, setContent] = useState('enhance');
    const [getImg, setGetImg] = useState(content);



    function handleClick(value) {
        setContent(value);
    }
    useEffect(() => {

        setGetImg(content)
        console.log(content)

        return (() => {
            // setGetImg(content)
            // console.log(content)
        })
    }, [content])

    // let tabBg = new Image()
    // var waterBg = new Image()
    // var pressBg = new Image()
    // enhanceBg.src = '/public/Enhanced_Performance.png';
    // waterBg.src = '/public/Water_Resistence.png';
    // pressBg.src = '/public/Press_Control.png';


    // let enhanceBg = '/public/Enhanced_Performance.png';


    // let classNam;

    let bgName;

    if (getImg === 'enhance') {
        bgName = enhanceBg
        // tabBg.src = '/public/Enhanced_Performance.png';
        //     classNam = 'h-[650px] lg:h-[1000px] w-full pb-10 pr-4 md:pr-8 lg:pr-16 relative bg-cover bg-enhance bg-center bg-no-repeat flex items-end justify-end flex-col lg:pb-[8rem] lg:pr-[10rem] tab-parent'
    } else if (getImg === 'water') {
        bgName = waterBg

        // tabBg.src = '/public/Water_Resistence.png';

        //     classNam = 'h-[650px] lg:h-[1000px] w-full pb-10 pr-4 md:pr-8 lg:pr-16 relative bg-cover bg-water bg-center bg-no-repeat flex items-end justify-end flex-col lg:pb-[8rem] lg:pr-[10rem] tab-parent'
    } else if (getImg === 'press') {
        bgName = pressBg

        // tabBg.src = '/public/Press_Control.png';
        //     classNam = 'h-[650px] lg:h-[1000px] w-full pb-10 pr-4 md:pr-8 lg:pr-16 relative bg-cover bg-press bg-center bg-no-repeat flex items-end justify-end flex-col lg:pb-[8rem] lg:pr-[10rem] tab-parent'
    }


    return (

        <div className={`h-[650px] lg:h-[1000px] w-full pb-10 pr-4 md:pr-8 lg:pr-16 relative flex items-end justify-end flex-col lg:pb-[8rem] tab-parent`}
            style={{
                background: `url(${bgName})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>
            <ul className='absolute top-10 left-4 md:left-6 text-[1.15rem] lg:top-[6rem] lg:left-[4.1rem] 2xl:left-[6rem] font-[figtree] lg:text-[1.25rem] xl:text-[1.3rem] text-[#6D6D6D] font-medium  z-20 transition-all'>
                <CreateList onChange={() => handleClick('enhance')} classn={(content === 'enhance') ? 'enhance-active py-1 lg:py-2 pl-3 cursor-pointer' : 'py-1 lg:py-2 pl-3 cursor-pointer tab-menu'}>Enhanced Performance</CreateList>
                <CreateList onChange={() => handleClick('water')} classn={(content === 'water') ? 'water-active py-1 lg:py-2 pl-3 cursor-pointer' : 'py-1 lg:py-2 pl-3 cursor-pointer tab-menu'}>Water Resistance</CreateList>
                <CreateList onChange={() => handleClick('press')} classn={(content === 'press') ? 'press-active py-1 lg:py-2 pl-3 cursor-pointer' : 'py-1 lg:py-2 pl-3 cursor-pointer tab-menu'}>Press Control</CreateList>
            </ul>

            <h1 className='text-[#D1D1D1] font-[Ndot] text-[1.9rem] lg:text-6xl tab-parent'>{text[getImg].title}</h1>
            <p className='text-[#B0B0B0] font-[Figtree] w-11/12 md:w-3/5 lg:w-3/5 text-right mt-5 lg:text-xl tab-parent'>{text[getImg].info}</p>
        </div>
    )
}

export default Tabs;