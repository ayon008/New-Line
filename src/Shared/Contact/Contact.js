import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import Image from 'next/image';
import image1 from '../../../public/cta-shape-top.png'
import Link from 'next/link';
const Contact = () => {
    return (
        <div className='2xl:px-0 px-6 mb-20'>
            <div className='team md:py-28 py-14 max-w-[1280px] mx-auto w-full space-y-8 rounded-[40px] relative'>
                <div>
                    <p className='text-[#FFC705] text-center font-semibold md:text-base text-sm secondary-title'>WORK WITH US</p>
                </div>
                <div>
                    <h2 className='text-center text-white md:text-4xl text-2xl font-semibold mt-4'>Contact Our World Best <br className='md:block hidden' /> Cleaning Services Team!</h2>
                </div>
                <div className='w-fit mx-auto'>
                    <Link href={'/contact'}>
                        <PrimaryButton text={'Contact Us'} border={true} />
                    </Link>
                </div>
                <Image src={image1} alt='half-circle' className='position absolute right-12 animation-side top-0 !z-10 md:block hidden' />
                <Image src={image1} alt='half-circle' className='position rotate-180 absolute left-12 animation-side bottom-0 !z-10 md:block hidden' />
            </div>
        </div>
    );
};

export default Contact;