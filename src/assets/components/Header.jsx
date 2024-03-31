import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { RiSearchLine, RiShoppingBasketLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

export default function Header() {

    const [grabValue, setgrabValue] = useState();
    // let copyValue;
    let receiveData = (value) => {
        console.log('received value is ' + !value);
        setgrabValue(!value)

    }

    useEffect(() => {
        console.log('copy value value is ' + grabValue)
    }, [grabValue])


    return (
        <div className='w-full h-full md:h-[600px] lg:h-[700px] xl:h-[850px] 2xl:h-full bg-header-bg bg-center bg-cover bg-no-repeat'>
            <div className={grabValue ? 'bg-white fixed top-[72px] border-t border-b-4 left-0 h-auto pb-8 w-full transition-all z-30 duration-700 ease-in-out md:hidden' :
                'bg-white fixed -top-[230px] border-t border-b-4 left-0 h-auto w-full transition-all z-30 pb-8 duration-700 ease-in-out'}>
                <div className='text-[1.13rem] font-[Figtree] text-[#000] pt-5 px-4 space-y-3'>
                    <a href="#" className='cursor-pointer transition-all duration-[0.35s] block hover:text-[#0f0e0e] hover:font-semibold'>Phone</a>
                    <a href="#" className='cursor-pointer transition-all duration-[0.35s] block hover:text-[#0f0e0e] hover:font-semibold'>Audio</a>
                    <a href="#" className='cursor-pointer transition-all duration-[0.35s] block hover:text-[#0f0e0e] hover:font-semibold'>Store</a>
                    <a href="#" className='cursor-pointer transition-all duration-[0.35s] block hover:text-[#0f0e0e] hover:font-semibold'>Community</a>
                    <a href="#" className='cursor-pointer transition-all duration-[0.35s]  block hover:text-[#0f0e0e] hover:font-semibold'>Support</a>
                    <a href="#" className='cursor-pointer transition-all duration-[0.35s]  block hover:text-[#0f0e0e] hover:font-semibold'>{grabValue}</a>
                </div>
                <div className='text-[1.45rem] space-x-4 flex px-4 mt-8'>
                    <FiUser className='cursor-pointer' />
                    <RiShoppingBasketLine className='cursor-pointer' />
                    <RiSearchLine className='cursor-pointer' />
                </div>
            </div>
            <Navbar callback={receiveData} />
            <div className='w-full h-full mt-32 lg:mt-48 text-center'>
                <h1 className='font-[Ndot] text-[2.1rem] md:text-5xl lg:text-[3.5rem] xl:text-7xl semi-bold text-black' data-aos="fade-down">NOTHING PHONE (2)</h1>
                <p className='font-[Figtree] leading-snug px-4 text-lg lg:text-[1.35rem] lg:w-2/4 xl:text-2xl my-5 md:w-3/5 2xl:w-3/6 mx-auto text-[#3d3d3d]' data-aos="zoom-in">A new era. Where iconic design meets premium performance. Come to the bright side.
                    Phone (2) available in select drops on 15 July 2023.</p>
                <a href='#' className='font-[Figtree] text-xl md:text-xl xl:text-2xl mt-6 font-semibold hover:text-[#0f0e0e] block' data-aos="fade-up">View models</a>
            </div>
        </div>
    )
}
