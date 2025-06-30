import { CalendarClock, Handshake, IdCard, Sparkles } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import line from '../../../public/aa (2).png'
const Process = () => {
    return (
        <div className='my-20 max-w-[1280px] mx-auto w-full 2xl:px-0 px-6'>
            <div className='md:space-y-4 space-y-3 md:w-auto w-full'>
                <p className='subheadline font-semibold md:text-base text-sm text-primary md:text-left text-center'>Work Process</p>
                <h2 className={`2xl:text-6xl md:text-5xl text-3xl font-semibold md:text-left text-center`}>How We Are Working!</h2>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 mt-14 relative'>
                <Image src={line} alt='line' className='absolute md:block hidden left-[18%] top-4 !z-[-1]' />
                <Image src={line} alt='line' className='absolute md:block hidden right-[18%] top-4 !z-[-1]' />
                <Image src={line} alt='line' className='absolute md:block hidden left-1/2 -translate-x-1/2 rotate-[140deg] top-4 !z-[-1]' />
                <div className=''>
                    <div className='bg-white w-24 h-24 mx-auto flex justify-center items-center border-2 border-[#D8DDE1] rounded-full group/icon hover:bg-primary transition-all duration-100 ease-in z-20'>
                        <IdCard className='w-10 h-10 text-primary group-hover/icon:text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                    </div>
                    <h3 className='text-center text-2xl font-semibold mt-4'>Application</h3>
                    <p className='mt-4 text-center text-secondary'>These services range from regular housekeeping tasks to deep cleaning, sanitation, & cleaning services.</p>
                </div>
                <div className='md:mt-14 mt-0'>
                    <div className='bg-white w-24 h-24 mx-auto flex justify-center items-center border-2 border-[#D8DDE1] rounded-full group/icon hover:bg-primary transition-all duration-100 ease-in z-20'>
                        <CalendarClock className='w-10 h-10 text-primary group-hover/icon:text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                    </div>
                    <h3 className='text-center text-2xl font-semibold mt-4'>The Date</h3>
                    <p className='mt-4 text-center text-secondary'>These services range from regular housekeeping tasks to deep cleaning, sanitation, & cleaning services.</p>
                </div>
                <div className=''>
                    <div className='bg-white w-24 h-24 mx-auto flex justify-center items-center border-2 border-[#D8DDE1] rounded-full group/icon hover:bg-primary transition-all duration-100 ease-in z-20'>
                        <Handshake className='w-10 h-10 text-primary group-hover/icon:text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                    </div>
                    <h3 className='text-center text-2xl font-semibold mt-4'>Hire Us</h3>
                    <p className='mt-4 text-center text-secondary'>These services range from regular housekeeping tasks to deep cleaning, sanitation, & cleaning services.</p>
                </div>
                <div className='md:mt-14 mt-0'>
                    <div className='bg-white w-24 h-24 mx-auto flex justify-center items-center border-2 border-[#D8DDE1] rounded-full group/icon hover:bg-primary transition-all duration-100 ease-in z-20'>
                        <Sparkles className='w-10 h-10 text-primary group-hover/icon:text-white group-hover/icon:rotate-y-[180deg] transition-all duration-300 ease-in-out' />
                    </div>
                    <h3 className='text-center text-2xl font-semibold mt-4'>Cleaning</h3>
                    <p className='mt-4 text-center text-secondary'>These services range from regular housekeeping tasks to deep cleaning, sanitation, & cleaning services.</p>
                </div>
            </div>
        </div>
    );
};

export default Process;