import React from 'react';
import deviceInfo from '../data/deviceInfo';
import createDevice from '../props/Device';

function Features() {
    return (
        <div className='w-full h-auto gap-y-10 bg-black bg-pattern-bg bg-center px-4 md:px-8 lg:px-16 lg:py-14 py-10 bg-contain bg-no-repeat grid grid-cols-1 md:py-10 md:gap-x-6 lg:gap-10 md:grid-cols-2 lg:p-24'>
            {deviceInfo.map(createDevice)}
        </div>
    )
}

export default Features;