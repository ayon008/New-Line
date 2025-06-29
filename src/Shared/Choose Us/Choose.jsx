import { useInView } from 'motion/react';
import React, { useRef } from 'react';
import CountUp from 'react-countup';
import { StarIcon } from '../Marquee/Marquee';
import Image from 'next/image';
import image from '../../../public/why-choose-left.webp'
import { Clock, Package, Smile, Users } from 'lucide-react';

const Choose = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className='my-20 max-w-[1280px] mx-auto w-full 2xl:px-0 px-6'>
            <div className='flex items-start md:flex-row flex-col justify-between'>
                <div className='md:space-y-6 space-y-4 md:w-auto w-full'>
                    <p className='subheadline font-semibold md:text-base text-sm text-primary md:text-left text-center'>WHY CHOOSE US</p>
                    <h2 className={`2xl:text-6xl md:text-5xl text-3xl font-semibold md:text-left text-center`}>Choose Excellence,<br /> Choose New Life</h2>
                </div>
                <div ref={ref} className='bg-[#1F1F1F] w-fit py-10 px-12 rounded-[10px] relative md:block hidden'>
                    <span className='text-white'>
                        {
                            isInView && <CountUp className='text-5xl font-semibold' start={200} end={314} duration={2.5} suffix='K +' />
                        }
                    </span>
                    <p className={`text-xl mt-3 text-white`}>Project Finished</p>
                    <div className='w-fit h-fit absolute top-2 right-4 animation-side'>
                        <StarIcon />
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 items-center justify-between'>
                <div>
                    <Image src={image} className='w-full h-full rounded-[20px]' alt='choose us image' />
                </div>
                <div className='space-y-8'>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-primary w-fit p-6 rounded-[30px] group/icon'>
                            <Users className='w-12 h-12 text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Reliable Cleaning Crew</h3>
                            <p className='text-base mt-2 text-secondary'>Tailored cleaning services based on the specific needs and schedules.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-primary w-fit p-6 rounded-[30px] group/icon'>
                            <Package className='w-12 h-12 text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Flexible Package</h3>
                            <p className='text-base mt-2 text-secondary'>TAchieving a higher level of cleanliness and sanitation compared to regular.</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-8'>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-primary w-fit p-6 rounded-[30px] group/icon'>
                            <Clock className='w-12 h-12 text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>On-Time Services</h3>
                            <p className='text-base mt-2 text-secondary'>Clients can focus on their core activities or enjoy their free time without.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between gap-6'>
                        <div className='bg-primary w-fit p-6 rounded-[30px] group/icon'>
                            <Smile className='w-12 h-12 text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold'>Transparent Pricing</h3>
                            <p className='text-base mt-2 text-secondary'>Fixed price for specific types of cleaning services or packages.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;