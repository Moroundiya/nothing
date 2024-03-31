import React, { useState, useEffect } from 'react';
import { RiSearchLine, RiShoppingBasketLine } from "react-icons/ri";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

export default function Navbar({ callback }) {

    const [mobile, setMobile] = useState(false);
    const [getmobile, setGetMobile] = useState(mobile)

    function showMenu() {
        setMobile(!mobile)
    }

    useEffect(() => {
        setGetMobile(mobile);
        console.log('updated is ' + mobile)

    }, [mobile])

    return (
        <div className='w-full h-auto bg-white py-5 px-4 md:px-8 flex items-center justify-between backdrop-blur-xl fixed left-0 top-0 z-50 lg:px-16 2xl:px-44 lg:py-8'>
            <h1 className='font-[Ndot] text-2xl lg:text-3xl'>NOTHING</h1>
            <div className='text-[1.05rem] font-[Figtree] text-[#000] hidden justify-center w-[400px] space-x-5 md:flex '>
                <a href="#" className='cursor-pointer transition-all duration-[0.35s] w-1/5 text-center block hover:text-[#0f0e0e] hover:font-semibold'>Phone</a>
                <a href="#" className='cursor-pointer transition-all duration-[0.35s] w-1/5 text-center block hover:text-[#0f0e0e] hover:font-semibold'>Audio</a>
                <a href="#" className='cursor-pointer transition-all duration-[0.35s] w-1/5 text-center block hover:text-[#0f0e0e] hover:font-semibold'>Store</a>
                <a href="#" className='cursor-pointer transition-all duration-[0.35s] w-[130px] text-center block hover:text-[#0f0e0e] hover:font-semibold'>Community</a>
                <a href="#" className='cursor-pointer transition-all duration-[0.35s] w-1/5 text-center block hover:text-[#0f0e0e] hover:font-semibold'>Support</a>
            </div>
            <div className='text-2xl md:space-x-4 lg:space-x-10 hidden md:flex'>
                <RiSearchLine className='cursor-pointer' />
                <RiShoppingBasketLine className='cursor-pointer' />
                <FiUser className='cursor-pointer' />
            </div>
            <div className='block md:hidden' onClick={() => {
                showMenu();
                callback(getmobile);
            }}>
                {getmobile ? <CgClose className='tab-parent text-[1.7rem] text-[#000] font-thin cursor-pointer' /> : <CgMenuRightAlt className='tab-parent text-3xl text-[#000] font-thin cursor-pointer' />}
            </div>
        </div >
    )
}

