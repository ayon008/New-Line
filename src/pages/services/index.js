import React from 'react';
import { Banner } from '../about';
import { ServiceCard, services } from '@/Shared/Services/Services';
import { TestimonialSlide } from '@/Shared/Testimonial/Testimonial';
import Brand from '@/Shared/Brands/Brand';
import Head from 'next/head';
import { siteName } from '../_app';

const ServicesPage = () => {
    return (
        <>
            <Head>
                <title>Services | {siteName}</title>
            </Head>
            <div>
                <Banner name={'Our Services'} breadcum={<span className=''><span className='text-primary'>Home</span> {'>'} Our Services</span>} />
                <div className='max-w-[1280px] mx-auto w-full 2xl:px-0 px-6 mt-20'>
                    <p className='text-primary text-center font-semibold md:text-base text-sm sub-title'>Our Services</p>
                    <h2 className='text-center text-black text-4xl font-semibold mt-4'>The Services We Provide For <br />
                        <span className='text-primary'>Our Customer</span></h2>
                    <div className=' grid md:grid-cols-3 grid-cols-1 gap-10 my-10'>
                        {
                            services.map((service, i) => {
                                return (
                                    <div key={i} className='w-fit h-fit shadow-xl rounded-[30px]'>
                                        <ServiceCard service={service} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='w-full review mt-20'>
                        <TestimonialSlide />
                    </div>
                    <Brand />
                </div>
            </div>
        </>
    );
};

export default ServicesPage;