import React from 'react';
import banner_image from '../../../public/breadcrumb-bottom.webp'
import Image from 'next/image';
import About from '@/Shared/About/About';
import States from '@/Shared/States/States';
import Team from '@/Shared/Team/Team';
import Process from '@/Shared/Process/Process';
import { TestimonialSlide } from '@/Shared/Testimonial/Testimonial';
import Brand from '@/Shared/Brands/Brand';

export const Banner = ({ name, breadcum }) => {
    return (
        <div className='w-full md:h-[610px] h-[428px] banner md:pt-[90px] pt-0 relative flex items-center md:pl-20 pl-10'>
            <Image priority src={banner_image} className='bottom-0 left-0 right-0 absolute h-[80px] object-cover' alt='' />
            <div className='w-fit'>
                <h1 className='md:text-7xl text-5xl'>{name}</h1>
                <p className='mt-2 text-xl font-semibold'>{breadcum}</p>
            </div>
        </div>
    )
}

const about = () => {
    return (
        <div>
            <Banner name={'About Us'} breadcum={<span className=''><span className='text-primary'>Home</span> {'>'} About Us</span>} />
            <div className='mt-20 max-w-[1280px] mx-auto w-full 2xl:px-0 px-6'>
                <About />
            </div>
            <States />
            <Team />
            <Process />
            <div className='2xl:px-0 px-6 max-w-[1280px] mx-auto w-full'>
                <div className='w-full review mb-20'>
                    <TestimonialSlide />
                </div>
                <Brand />
            </div>
        </div>
    );
};

export default about;