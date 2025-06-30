import React from 'react';
import testimonial from '../../../public/test-1-left-shape.webp'
import Image from 'next/image';
import testimonial_bg from '../../../public/bg (1).png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import testimonial_1 from '../../../public/testi_1_1.webp'
import testimonial_3 from '../../../public/testi_1_3.webp'
import testimonial_4 from '../../../public/testi_1_4.webp'
import { Star, StarIcon } from 'lucide-react';

export const TestimonialSlide = () => {
    const TestimonialCard = ({ image }) => {
        return (
            <div className='bg-white translate-y-0 hover:-translate-y-[4px] transition-all duration-300 ease-in space-y-4 p-10 rounded-[30px] max-w-[384px] w-full md:mx-0 mx-auto' style={{ boxShadow: '0px 4px 20px rgba(0,0,0,0.06)' }}>
                <div className='flex items-center gap-4'>
                    <Image src={image} className='rounded-[8px]' alt='' />
                    <div>
                        <h3 className='text-2xl font-semibold'>Shariar Ayon</h3>
                        <p className='text-secondary text-base mt-[2px]'>Home Owner</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    {
                        [0, 1, 2, 3, 4].map((number) => {
                            return (
                                <StarIcon key={number} className='w-4 h-4 text-primary' />
                            )
                        })
                    }
                </div>
                <div>
                    <h2 className='text-2xl font-semibold'>Sparkle Cleaning Home</h2>
                    <p className='text-secondary text-base mt-4'>New Line cleaning maintains the appearance and extend the life of surfaces,furnishing and fixtures</p>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className='md:w-[1200px] w-full'>
                <p className='subheadline font-semibold md:text-base text-sm text-primary md:text-left text-center uppercase tracking-widest'>Testimonials</p>
                <h2 className={`2xl:text-6xl md:text-5xl text-3xl font-semibold md:text-left text-center mt-5`}>Feedback About Their <br /> Experience With Us</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,  // from 0px up to 585px (basically mobile)
                        },
                        586: {
                            slidesPerView: 1,  // from 586px up to (next breakpoint - 1)
                        },
                        1024: {
                            slidesPerView: 3,  // from 1024px and up
                        },
                    }}
                    className='mt-10 rounded-[30px]'
                >
                    <SwiperSlide className='md:p-2 p-[2px]'>
                        <TestimonialCard image={testimonial_1} />
                    </SwiperSlide>
                    <SwiperSlide className='md:p-2 p-[2px]'>
                        <TestimonialCard image={testimonial_3} />
                    </SwiperSlide>
                    <SwiperSlide className='md:p-2 p-[2px]'>
                        <TestimonialCard image={testimonial_4} />
                    </SwiperSlide>
                    <SwiperSlide className='md:p-2 p-[2px]'>
                        <TestimonialCard image={testimonial_1} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (
        <div className='testimonial md:p-0 py-10'>
            <div className='max-w-[1900px] mx-auto w-full overflow-hidden '>
                <div className='flex md:flex-row flex-col items-center gap-16 w-full'>
                    <div className='md:w-[40%] w-full overflow-hidden relative'>
                        <Image width={766} height={687} className='md:w-[766px] md:h-[687px] object-cover object-right' src={testimonial} alt='testimonial-image' />
                        <Image src={testimonial_bg} className='absolute bottom-0 left-0 !-z-[1]' alt='bg-testimonial' />
                    </div>
                    <div className='w-full md:w-[60%] overflow-hidden'>
                        <TestimonialSlide />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;