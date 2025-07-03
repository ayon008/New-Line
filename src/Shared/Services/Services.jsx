import React from 'react';
import { ArrowLeft, ArrowRight, Percent, PercentCircle } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import image1 from '../../../public/service-1-1.webp'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import Link from 'next/link';
import image2 from '@/../public/New Project (2).png'
import image3 from '../../../public/New Project (7).jpg'
import image4 from '../../../public/New Project (8).jpg'
import image5 from '../../../public/New Project (9).jpg'
import image6 from '../../../public/New Project (10).jpg'
import image7 from '../../../public/New Project (11).jpg'
import image8 from '../../../public/New Project (20).jpg'
import image9 from '../../../public/New Project (21).jpg'

export const services = [
    {
        title: 'Residential Cleaning',
        description: 'Weekly, biweekly, or monthly home upkeep made simple and reliable.',
        image: image8,
    },
    {
        title: 'Deep Cleaning Services',
        description: 'A detailed top-to-bottom refresh for a cleaner, healthier space.',
        image: image2,
    },
    {
        title: 'Move-In & Move-Out Cleaning',
        description: 'Perfect for renters, homeowners, and realtors for spotless transitions.',
        image: image4,
    },
    {
        title: 'Vacation Rental & Airbnb Cleaning',
        description: 'Guest-ready service with restocking, turnover, and light landscaping.',
        image: image3,
    },
    {
        title: 'Office Cleaning Services',
        description: 'Discreet and flexible office cleaning to match your business hours.',
        image: image5,
    },
    {
        title: 'Commercial Cleaning Services',
        description: 'Ideal for retail, hospitality, and industrial spaces.',
        image: image6,
    },
    {
        title: 'Multi-Family & Apartment Cleaning',
        description: 'From common areas to tenant-ready turnovers—leave it to us.',
        image: image1,
    },
    {
        title: 'Contract Cleaning Services',
        description: 'Scheduled long-term cleaning for businesses and property managers.',
        image: image7,
    },
    {
        title: 'Custom Cleaning Plans',
        description: 'Tailored to your unique space, schedule, and preferences.',
        image: image9,
    },
]

export const ServiceCard = ({ service }) => {
    const { title, description, image } = service;
    return (
        <div className='bg-white rounded-[30px] h-[538px] z-10 md:p-6 p-4 group hover:-translate-y-[4px] translate-y-0 transition-all duration-300 ease-in flex flex-col'>
            <div className='flex justify-between items-center'>
                <div className='bg-secondary w-fit rounded-3xl flex items-center gap-1 py-2 px-3'>
                    <PercentCircle className='w-5 h-5' />
                    <p>Discount 50%</p>
                </div>
                <div>
                    <Link href={'/contact'}>
                        <Button className="!px-6 !rounded-[30px] bg-primary hover:!bg-secondary transition-all duration-300 ease-in group/mybtn">
                            <ArrowRight className="!w-6 !h-6 text-white group-hover/mybtn:text-black transition-colors duration-100" />
                        </Button>
                    </Link>
                </div>
            </div>
            <div className='md:mt-8 mt-6 h-full flex flex-col'>
                <div>
                    <div className='overflow-hidden rounded-tl-[20px] rounded-tr-[20px]'>
                        <Image src={image} className='w-full h-auto group-hover:scale-110 transition-all duration-300 ease-in' alt='' />
                    </div>
                </div>
                <div className='bg-[#E7F3FF] p-6 rounded-bl-[20px] rounded-br-[20px] h-full'>
                    <div>
                        <h3 className='text-2xl font-medium'>{title}</h3>
                        <p className='text-sm mt-2 text-secondary'>{description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Services = () => {
    return (
        <>
            <div className='mt-20 2xl:px-0 service py-24'>
                <div>
                    <p className='text-primary text-center font-semibold md:text-base text-sm sub-title uppercase tracking-wider'>Our Cleaning Services</p>
                    <h2 className="text-center text-black text-4xl font-semibold mt-4">
                        Complete Cleaning Services for <br />
                        <span className="text-primary">Residential & Commercial Clients</span>
                    </h2>
                    <div className='relative max-w-[1760px] w-full mx-auto group/service overflow-hidden'>
                        <div className='max-w-[1280px] mx-auto px-6 2xl:px-0 pt-10'>
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                navigation={{
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom',
                                }}
                                onSlideChange={() => console.log('slide changed')}
                                onSwiper={(swiper) => console.log(swiper)}
                                modules={[Autoplay, Navigation]}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                className='h-full'
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,  // from 0px up to 585px (basically mobile)
                                    },
                                    586: {
                                        slidesPerView: 2,  // from 586px up to (next breakpoint - 1)
                                    },
                                    1024: {
                                        slidesPerView: 3,  // from 1024px and up
                                    },
                                }}
                            >
                                {services.map((service, i) => {
                                    return (
                                        <SwiperSlide key={i} className="h-full">
                                            <div className='!overflow-visible h-full'>
                                                <ServiceCard service={service} />
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>
                        <Button
                            className="absolute top-1/2 left-5 -translate-y-1/2 z-10 p-0 rounded-full bg-primary hidden 2xl:flex items-center justify-center w-12 h-12 swiper-button-prev-custom opacity-0 group-hover/service:opacity-100 transition-all duration-200"
                        >
                            <ArrowLeft className="w-5 h-5 text-white" />
                        </Button>
                        <Button className={'absolute top-1/2 right-5 -translate-y-1/2 z-10 p-0 rounded-full bg-primary hidden 2xl:flex items-center justify-center w-12 h-12 swiper-button-next-custom opacity-0 group-hover/service:opacity-100 transition-all duration-200'}>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;