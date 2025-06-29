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
const Services = () => {
    const ServiceCard = () => {
        return (
            <div className='bg-white rounded-[30px] z-10 md:p-8 p-4 group hover:-translate-y-[4px] translate-y-0 transition-all duration-300 ease-in'>
                <div className='flex justify-between items-center'>
                    <div className='bg-secondary w-fit rounded-3xl flex items-center gap-1 py-2 px-3'>
                        <PercentCircle className='w-5 h-5' />
                        <p>Discount 50%</p>
                    </div>
                    <div>
                        <Button className="!px-6 !rounded-[30px] bg-primary hover:!bg-secondary transition-all duration-300 ease-in group/mybtn">
                            <ArrowRight className="!w-6 !h-6 text-white group-hover/mybtn:text-black transition-colors duration-100" />
                        </Button>

                    </div>
                </div>
                <div className='md:mt-10 mt-6'>
                    <div className='overflow-hidden rounded-tl-[20px] rounded-tr-[20px]'>
                        <Image src={image1} className='w-full h-auto group-hover:scale-110 transition-all duration-300 ease-in' alt='' />
                    </div>
                    <div className='bg-[#E7F3FF] p-6 rounded-bl-[20px] rounded-br-[20px]'>
                        <h3 className='text-2xl font-medium'>Home Cleaning</h3>
                        <p className='text-sm mt-2 text-secondary'>We bring the shine, you enjoy the comfort.
                            Professional home cleaning made easy.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='mt-20 2xl:px-0 service py-24'>
            <div>
                <p className='text-primary text-center font-semibold md:text-base text-sm sub-title'>Our Services</p>
                <h2 className='text-center text-black text-4xl font-semibold mt-4'>The Services We Provide For <br />
                    <span className='text-primary'>Our Customer</span></h2>
                <div className='relative max-w-[1760px] w-full mx-auto group/service'>
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
                            <SwiperSlide>
                                <div className='!overflow-visible'>
                                    <ServiceCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='!overflow-visible'>
                                    <ServiceCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='!overflow-visible'>
                                    <ServiceCard />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='!overflow-visible'>
                                    <ServiceCard />
                                </div>
                            </SwiperSlide>
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
    );
};

export default Services;