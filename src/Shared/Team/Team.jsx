import React from 'react';
import image1 from '../../../public/team_1_1.webp'
import image2 from '../../../public/team_1_2.webp'
import image3 from '../../../public/team_1_3.webp'
import image4 from '../../../public/team_1_4.webp'
import Image from 'next/image';
const Team = () => {
    return (
        <div className='team'>
            <div className='max-w-[1280px] w-full mx-auto py-20'>
                <p className='text-[#FFC705] text-center font-semibold md:text-base text-sm secondary-title'>Our Services</p>
                <h2 className='text-center text-white text-4xl font-semibold mt-4'>Meet Our Cleaning Expert!</h2>
                <div className='grid md:grid-cols-4 grid-cols-1 2xl:px-0 px-6 mt-10 gap-7'>
                    <div className='group/team team-card !overflow-hidden bg-white rounded-[30px]'>
                        <div className='overflow-hidden p-0 team-card-image rounded-[30px]'>
                            <Image width={300} height={342} src={image1} className='group-hover/team:scale-105 transition-all duration-300 ease-in w-full rounded-[30px]' alt='team-1' />
                        </div>
                        <div className='p-7'>
                            <h3 className='text-2xl font-semibold'>Shariar Ayon</h3>
                            <p className='text-secondary mt-1 text-sm'>Home Cleaner</p>
                        </div>
                    </div>
                    <div className='group/team team-card !overflow-hidden bg-white rounded-[30px]'>
                        <div className='overflow-hidden p-0 team-card-image rounded-[30px]'>
                            <Image width={300} height={342} src={image2} className='group-hover/team:scale-105 transition-all duration-300 ease-in w-full rounded-[30px]' alt='team-1' />
                        </div>
                        <div className='p-7'>
                            <h3 className='text-2xl font-semibold'>Shariar Ayon</h3>
                            <p className='text-secondary mt-1 text-sm'>Home Cleaner</p>
                        </div>
                    </div>
                    <div className='group/team team-card !overflow-hidden bg-white rounded-[30px]'>
                        <div className='overflow-hidden p-0 team-card-image rounded-[30px]'>
                            <Image width={300} height={342} src={image3} className='group-hover/team:scale-105 transition-all duration-300 ease-in w-full rounded-[30px]' alt='team-1' />
                        </div>
                        <div className='p-7'>
                            <h3 className='text-2xl font-semibold'>Shariar Ayon</h3>
                            <p className='text-secondary mt-1 text-sm'>Home Cleaner</p>
                        </div>
                    </div>
                    <div className='group/team team-card !overflow-hidden bg-white rounded-[30px]'>
                        <div className='overflow-hidden p-0 team-card-image rounded-[30px]'>
                            <Image width={300} height={342} src={image4} className='group-hover/team:scale-105 transition-all duration-300 ease-in w-full rounded-[30px]' alt='team-1' />
                        </div>
                        <div className='p-7'>
                            <h3 className='text-2xl font-semibold'>Shariar Ayon</h3>
                            <p className='text-secondary mt-1 text-sm'>Home Cleaner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;