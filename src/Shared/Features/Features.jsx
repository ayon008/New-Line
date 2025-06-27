import { CalendarDays, ShoppingCart, User2 } from 'lucide-react';
import React from 'react';

const Features = () => {
    return (
        <div className='md:grid-cols-3 grid max-w-[1280px] gap-6 mx-auto'>
            <div className='border-color rounded-[30px] p-8 group space-y-5 feature-card hover:-translate-y-[3px] translate-y-0 transition-all duration-300'>
                <div className='bg-white w-[65px] h-[65px] rounded-full relative feature-shadow group-hover:bg-black transition-all duration-300'>
                    <CalendarDays className='text-primary w-[50px] h-[50px] absolute left-6 top-3 group-hover:text-white transition-all duration-300 group-hover:rotate-y-[180deg] ' />
                </div>
                <h2 className='text-2xl !z-10 font-semibold text-black group-hover:!text-white'>
                    Flexible Scheduling
                </h2>
                <p className='text-sm !z-10 text-secondary group-hover:!text-white'>Flexible time slots available to suit your needs. Morning or evening, we adjust to your schedule. Convenience and reliability, every time.</p>
            </div>
            <div className='border-color rounded-[30px] p-8 group space-y-5 feature-card hover:-translate-y-[3px] translate-y-0 transition-all duration-300'>
                <div className='bg-white w-[65px] h-[65px] rounded-full relative feature-shadow group-hover:bg-black transition-all duration-300'>
                    <User2 className='text-primary w-[50px] h-[50px] absolute left-6 top-3 group-hover:text-white transition-all duration-300 group-hover:rotate-y-[180deg] ' />
                </div>
                <h2 className='text-2xl !z-10 font-semibold text-black group-hover:!text-white'>
                    Quality Improve
                </h2>
                <p className='text-sm !z-10 text-secondary group-hover:!text-white'>Flexible time slots available to suit your needs. Morning or evening, we adjust to your schedule. Convenience and reliability, every time.</p>
            </div>
            <div className='border-color rounded-[30px] p-8 group space-y-5 feature-card hover:-translate-y-[3px] translate-y-0 transition-all duration-300'>
                <div className='bg-white w-[65px] h-[65px] rounded-full relative feature-shadow group-hover:bg-black transition-all duration-300'>
                    <ShoppingCart className='text-primary w-[50px] h-[50px] absolute left-6 top-3 group-hover:text-white transition-all duration-300 group-hover:rotate-y-[180deg] ' />
                </div>
                <h2 className='text-2xl !z-10 font-semibold text-black group-hover:!text-white'>
                    100% Certified
                </h2>
                <p className='text-sm !z-10 text-secondary group-hover:!text-white'>Flexible time slots available to suit your needs. Morning or evening, we adjust to your schedule. Convenience and reliability, every time.</p>
            </div>
        </div>
    );
};

export default Features;