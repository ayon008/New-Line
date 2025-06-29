import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import image1 from '../../../public/Brand1.svg'
import image2 from '../../../public/brand_1_4.svg'
import image3 from '../../../public/brand_1_5.svg'
import image4 from '../../../public/brand_1_6.svg'
import { Autoplay } from 'swiper/modules';

const Brand = () => {
    return (
        <div className='max-w-[1280px] mx-auto my-20'>
            <div className='bg-[#F7F7F7] py-10 px-16 rounded-[20px]'>
                <h3 className='text-2xl font-semibold text-center'>Trusted by over <span className='text-primary'>90k+</span> companies worldwide</h3>
                <Swiper
                    slidesPerView={5}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    className='mt-10'
                    breakpoints={{
                        0: {
                            slidesPerView: 3,
                            spaceBetween: 20  // from 0px up to 585px (basically mobile)
                        },
                        586: {
                            slidesPerView: 4,
                            spaceBetween: 40  // from 586px up to (next breakpoint - 1)
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 80  // from 1024px and up
                        },
                    }}
                >
                    <SwiperSlide>
                        <Image src={image1} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image2} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image3} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image4} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image1} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image2} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image3} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src={image4} alt='' className='hover:scale-110 transition-all duration-300' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Brand;