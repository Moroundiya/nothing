import React from 'react'

function Device(props) {
    return (
        <div className='w-full h-full cursor-pointer relative overflow-hidden group rounded-[40px] md:w-full md:h-11/12' data-aos={props.animate}>
            <img src={props.imgURL} alt="glyphs" className='w-full h-full transition duration-[.7s] cursor-pointer group-hover:scale-[1.06] hover:brightness-125' />
            <div className='w-full h-full absolute top-0 left-0 px-4 pb-10 lg:px-10 lg:pb-16 flex flex-col justify-end transition-all duration-300'>
                <h1 className='font-[Ndot] text-2xl sm:text-3xl lg:text-[2.6rem] text-white mb-3 font-thin transition-all duration-1000 ease-in-out stroke-black'>{props.title}</h1>
                <p className='text-white text-md sm:text-lg leading-snug lg:text-2xl font-[Figtree] font-light transition-all duration-[.5s] left-0 top-full hidden group-hover:block'>{props.content}</p>
            </div>
        </div>
    )
}

function createDevice(info) {
    <Device key={info.id} imgURL={info.imgURL} title={info.title} content={info.content} animate={info.animate} />
}

export default Device;
export { createDevice }