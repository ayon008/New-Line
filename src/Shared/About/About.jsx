import React, { useRef, useState } from 'react';
import image from '../../../public/about-1-main.webp'
import image2 from '../../../public/about-1-right.webp'
import image3 from '../../../public/about-1-left.webp'
import Image from 'next/image';
import CountUp from 'react-countup';
import PrimaryButton from '../Buttons/PrimaryButton';
import { useInView, useSpring, useTransform } from "motion/react";
import Modal from '../Modal/Modal';
import { motion } from 'motion/react'

const About = () => {
    const ref = useRef(null);
    const refMobile = useRef(null);
    const mobileView = useInView(refMobile, { once: true })
    const isInView = useInView(ref, { once: true });
    const [bounds, setBounds] = useState(null);
    const mouseX = useSpring(0, { stiffness: 200, damping: 30 });
    const mouseY = useSpring(0, { stiffness: 200, damping: 30 });

    // Example: map mouseX to rotateY between -15 and 15 degrees
    const rotateY = useTransform(mouseX, [0, bounds?.width || 0], [-15, 15]);
    // Example: map mouseY to rotateX between 15 and -15 degrees
    const rotateX = useTransform(mouseY, [0, bounds?.height || 0], [15, -15]);

    return (
        <div className='max-w-[1280px] mx-auto md:flex-row flex flex-col justify-between items-start md:gap-0 gap-10'>
            <div className='w-full md:w-[60%] relative'>
                <div className='w-fit relative mx-auto'>
                    <motion.div
                        ref={(ref) => setBounds(ref?.getBoundingClientRect())}
                        onMouseMove={(e) => {
                            if (!bounds) return;
                            mouseX.set(e.clientX - bounds.left);
                            mouseY.set(e.clientY - bounds.top);
                        }}
                        onMouseLeave={() => {
                            // Reset mouse position to center on leave
                            mouseX.set(bounds?.width / 2 || 0);
                            mouseY.set(bounds?.height / 2 || 0);
                        }}
                        style={{
                            rotateX,
                            rotateY,
                            perspective: 800,
                        }}
                    >
                        <Image src={image} width={450} height={620} alt='about' className='rounded-[50px]' />
                    </motion.div>
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
                <p className='text-left text-primary md:text-xl text-base font-semibold subheadline uppercase tracking-wider'>About Us</p>
                <h2 className='md:text-4xl 2xl:text-5xl text-3xl font-semibold'>
                    Top-Rated Cleaning Services in Montgomery
                </h2>
                <p className='text-secondary text-sm'>
                    Self-Maid Cleaning offers trusted residential and commercial cleaning across Montgomery. Our team is fast, friendly, and professional.<br />
                    Built on hustle. Powered by precision. We clean your space like it’s our own—with care and consistency.
                </p>
                <div className='mt-10'>
                    <ul className='service-list text-secondary space-y-2 text-sm'>
                        <li>Reliable service from trusted pros</li>
                        <li>Custom plans to match your schedule</li>
                        <li>Fast booking & clear communication</li>
                        <li>We don’t cut corners—we clean them</li>
                        <li>Perfect for homes, offices & rentals</li>
                        <li>Move-in/move-out deep clean options</li>
                        <li>Flexible weekly or one-time visits</li>
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