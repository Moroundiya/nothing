import React from 'react'

function Spec(props) {
    return (
        <div className='font-[Figtree] text-white text-[.9rem] sm:text-lg' data-aos={props.animate}>
            <p>{props.title}</p>
            <h1 className='font-[Ndot] text-[1.8rem] sm:text-4xl my-1 sm:my-3 lg:text-6xl lg:my-3'>{props.spec}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

function CreateSpec(details) {
    <Spec key={details.id} title={details.title} spec={details.spec} desc={details.spec} animate={details.animate} />
}

export default Spec;
export { CreateSpec };