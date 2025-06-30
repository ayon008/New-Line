import React, { useRef } from 'react';
import { useInView } from 'motion/react';
import image from '../../../public/counter-shape-1-1.webp'
import CountUp from 'react-countup';
import Image from 'next/image';

const States = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className='2xl:px-0 px-6 max-w-[1280px] md:block hidden w-full mx-auto my-20'>
            <div ref={ref} className='grid md:grid-cols-[2fr_2fr_1fr] gap-x-24 px-20 py-24 bg-[#F6F6F6] rounded-[200px]'>
                <div className='flex items-center justify-between'>
                    <div>
                        {isInView &&
                            <>
                                <CountUp className='text-black text-7xl font-semibold' start={0} end={16} duration={2.5} separator="" />
                                <span className="text-primary text-7xl font-semibold">+</span>
                            </>
                        }
                        <p className='text-base text-secondary font-semibold mt-1'>Satisfied Our Customers</p>
                    </div>
                    <Image src={image} alt='' className='h-full' />
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        {isInView &&
                            <>
                                <CountUp className='text-black text-7xl font-semibold' start={100} end={180} duration={2.5} separator="" />
                                <span className="text-primary text-7xl font-semibold">+</span>
                            </>
                        }
                        <p className='text-base text-secondary font-semibold mt-1'>Cleaning Expert Members</p>
                    </div>
                    <Image src={image} alt='' className='h-full' />
                </div>
                <div className=''>
                    <div>
                        {isInView &&
                            <>
                                <CountUp className='text-black text-7xl font-semibold' start={70} end={120} duration={2.5} separator="" />
                                <span className="text-primary text-7xl font-semibold">+</span>
                            </>
                        }
                        <p className='text-base text-secondary font-semibold mt-1'>Company Award Winner</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default States;