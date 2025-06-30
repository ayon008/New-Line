import React from 'react';
import banner_image from '../../../public/breadcrumb-bottom.webp'
import Image from 'next/image';

export const Banner = () => {
    return (
        <div className='w-full md:h-[610px] h-[428px] banner'>
            <Image src={banner_image} className='bottom-0 left-0 right-0' alt='' />
        </div>
    )
}
const about = () => {
    return (
        <div>
            <Banner />
        </div>
    );
};

export default about;