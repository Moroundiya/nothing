import React from 'react';
import footerlogo from '../images/NOTHING.png';
import instagram from '../images/instagram.png';
import youtube from '../images/youtube.png';
import tiktok from '../images/tiktok.png';
import discord from '../images/discord.png';
import twitter from '../images/x.png';

function Footer() {
    return (
        <>
            <footer className='bg-black w-full h-auto border-b-[1px] border-[#5d5d5d54]'>
                <div className='md:grid md:grid-cols-2 md:space-y-0 md:gap-y-12 lg:flex px-4 md:px-8 py-10 space-y-10 text-white 2xl:px-36 lg:px-16 2xl:pt-24 xl:pb-36 lg:pt-20 lg:pb-20 lg:space-y-0'>
                    <div className='lg:w-1/4 text-[#888888]'>
                        <p className='font-[Ndot] text-[1.75rem] mb-5 xl:text-[2rem] 2xl:text-4xl lg:mb-10' data-aos='fade-down'>Products</p>
                        <ul className='font-[Figtree] text-[1.08rem] space-y-2 lg:text-xl lg:space-y-3' data-aos='fade-up'>
                            <li>Phone (2)</li>
                            <li>Phone (1)</li>
                            <li>Ear (2)</li>
                            <li>Ear (stick)</li>
                            <li>Accessories</li>
                        </ul>
                    </div>
                    <div className='lg:w-1/4 text-[#888888]'>
                        <p className='font-[Ndot] text-[1.75rem] mb-5 xl:text-[2rem] 2xl:text-4xl lg:mb-10' data-aos='fade-down'>Company</p>
                        <ul className='font-[Figtree] text-[1.08rem] space-y-2 lg:text-xl lg:space-y-3' data-aos='fade-up'>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Community</li>
                            <li>Newsroom</li>
                            <li>Sustainability</li>
                            {/* <li>Business enquiry</li> */}
                            {/* <li>Sustainability</li> */}
                            {/* <li>Press contact</li> */}
                        </ul>
                    </div>
                    <div className='lg:w-1/4 text-[#888888]'>
                        <p className='font-[Ndot] text-[1.75rem] mb-5 xl:text-[2rem] 2xl:text-4xl lg:mb-10' data-aos='fade-down'>Support</p>
                        <ul className='font-[Figtree] text-[1.08rem] space-y-2 lg:text-xl lg:space-y-3' data-aos='fade-up'>
                            <li>Support centre</li>
                            <li>Contact us</li>
                            <li>Find a store</li>
                        </ul>
                    </div>
                    <div className='lg:w-2/5 text-[#888888]'>
                        <p className='font-[Ndot] text-[1.75rem] mb-5 xl:text-[2rem] 2xl:text-4xl lg:mb-10' data-aos='fade-down'>Join our mailing list</p>
                        <div className='w-full h-[60px] lg:h-[70px] rounded-[8px] flex justify-center item-center border border-[#888888] overflow-hidden mb-8' data-aos='fade-up'>
                            <input type="email" placeholder='Email address' className='bg-transparent text-[#888888] w-9/12 h-full outline-none px-5 font-[Ndot] font-extralight' />
                            <button className='font-[Ndot] bg-[#40404099] text-[#888888] w-3/12 overflow-hidden lg:text-lg'>Join Now</button>
                        </div>
                        <div className='flex items-center font-[Figtree]' data-aos='fade-up'>
                            <input type="checkbox" className='checkbox me-4' />
                            <label htmlFor="" className='lg:text-xl leading-tight'>You have read and agree to the terms in our <a href="#" className='underline'>Privacy Policy.</a> </label>
                        </div>
                        <div className='flex items-center font-[Figtree] mt-5' data-aos='fade-up'>
                            <input type="checkbox" className='checkbox-pro me-4' />
                            <label htmlFor="" className='lg:text-xl leading-tight'>You consent to receiving NOTHING marketing communications.</label>
                        </div>
                    </div>
                </div>
            </footer>

            <div className='h-auto px-4 md:px-8 py-8 w-full bg-black 2xl:px-36 lg:px-16 lg:py-12 font-[Figtree] xl:flex lg:space-y-3 justify-between'>
                <img src={footerlogo} alt="logo" />
                <ul className='text-[#888888] space-y-1 my-8 lg:my-0 lg:flex lg:space-x-4 text-lg lg:space-y-0'>
                    <li>Privacy Policy</li>
                    <li>Terms of sale</li>
                    <li>Acceptable use policy</li>
                    <li>User agreement</li>
                </ul>

                <div className='flex space-x-4'>
                    <a href="">
                        <img src={instagram} className='w-[35px] lg:w-auto' alt="Social" />
                    </a>
                    <a href="">
                        <img src={youtube} className='w-[35px] lg:w-auto' alt="Social" />
                    </a>
                    <a href="">
                        <img src={twitter} className='w-[35px] lg:w-auto' alt="Social" />
                    </a>
                    <a href="">
                        <img src={tiktok} className='w-[35px] lg:w-auto' alt="Social" />
                    </a>
                    <a href="">
                        <img src={discord} className='w-[35px] lg:w-auto' alt="Social" />
                    </a>
                </div>
            </div>
            <p className='bg-black text-[#888888] py-5 text-center lg:py-6 font-[Figtree] lg:text-lg'>
                Designed by Moroundiya 😎
            </p>
        </>
    )
}

export default Footer