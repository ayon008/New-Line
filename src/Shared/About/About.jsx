import React, { useRef } from 'react';
import image from '../../../public/about-1-main.webp'
import image2 from '../../../public/about-1-right.webp'
import image3 from '../../../public/about-1-left.webp'
import Image from 'next/image';
import CountUp from 'react-countup';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useInView } from "motion/react";
import Modal from '../Modal/Modal';

const About = () => {
    const ref = useRef(null);
    const refMobile = useRef(null);
    const mobileView = useInView(refMobile, { once: true })
    const isInView = useInView(ref, { once: true });

    return (
        <div className='max-w-[1280px] mx-auto md:flex-row flex flex-col justify-between items-start md:gap-0 gap-10'>
            <div className='w-full md:w-[60%] relative'>
                <div className='w-fit relative mx-auto'>
                    <Image src={image} width={450} height={620} alt='about' className='rounded-[50px]' />
                    {/* <Image src={playImage} alt='' className='' /> */}
                    <Modal />
                </div>
                <Image src={image2} alt='' width={200} height={240} className='absolute right-5 bottom-15 rounded-[30px] animation md:block hidden' />
                <Image src={image3} alt='' width={200} height={240} className='absolute left-0 top-15 rounded-[30px] animation md:block hidden' />
                <div className='md:flex hidden flex-col justify-center items-center absolute top-5 right-0'>
                    <div className='-rotate-90'>
                        <span className='text-base'>Experience</span> <br />
                        <span className='text-4xl font-semibold text-secondary'>Years Of</span>
                    </div>
                    <div ref={ref} className='mt-20'>

                        {
                            isInView && <CountUp className='text-primary text-7xl font-semibold' start={0} end={16} duration={2.5} separator="" />
                        }

                    </div>
                </div>
            </div>
            <div className='block md:hidden w-fit mx-auto space-y-3'>
                <div className='text-center'>
                    <span className='text-base text-center'>Experience</span> <br />
                    <span className='text-4xl font-semibold text-center text-secondary'>Years Of</span>
                </div>
                <div ref={refMobile} className='text-center'>
                    {
                        mobileView ? <CountUp className='text-primary text-center text-7xl font-semibold' start={0} end={16} duration={2.5} separator="" /> : null
                    }
                </div>
            </div>
            <div className='flex-1 space-y-6'>
                <p className='text-left text-primary md:text-xl text-base font-semibold subheadline'>About Us</p>
                <h2 className='md:text-5xl 2xl:text-6xl text-3xl font-semibold'>
                    Keeping Your Home Cleaner Service
                </h2>
                <p className='text-secondary text-sm'>
                    A cleaning service company specializes in providing professional cleaning solutions for residential, commercial, and industrial spaces. These services range from regular housekeeping tasks to deep cleaning, sanitation, and specialized cleaning services.
                </p>
                <div className='mt-10'>
                    <ul className='service-list text-secondary space-y-2 text-sm'>
                        <li>One-off, weekly or fortnightly visits</li>
                        <li>Book, manage & pay online</li>
                        <li>Vetted & background-checked cleaners</li>
                        <li>Road Test Preparation with 98% success</li>
                    </ul>
                    <div className='mt-8'>
                        <PrimaryButton text={'Discover More'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;