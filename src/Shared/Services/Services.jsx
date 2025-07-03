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

const sharedHighlights = [
    'Reliable service from trusted pros',
    'Custom plans to match your schedule',
    'Fast booking & clear communication',
    'We don’t cut corners—we clean them',
    'Perfect for homes, offices & rentals',
    'Move-in/move-out deep clean options',
    'Flexible weekly or one-time visits',
]

const sharedBenefits = [
    'Eco-friendly and non-toxic cleaning products',
    'Trained and experienced staff',
    'Custom cleaning plans',
    'Fast and efficient service',
]
export const services = [
    {
        slug: 'residential-cleaning',
        title: 'Residential Cleaning',
        description:
            'Enjoy a consistently clean home with our reliable residential cleaning services. Whether you need weekly, biweekly, or monthly upkeep, we tailor our approach to fit your lifestyle and schedule. Let us take care of the chores so you can focus on what matters most.',
        image: image8,
        fullDescription: [
            'Our Residential Cleaning provides top-quality results and peace of mind.',
            'Weekly, biweekly, or monthly home upkeep made simple and reliable.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Residential Cleaning',
        benefits: sharedBenefits,
    },
    {
        slug: 'deep-cleaning-services',
        title: 'Deep Cleaning Services',
        description:
            'Give your space the refresh it deserves with our detailed deep cleaning service. Ideal for seasonal cleaning or preparing for special occasions, we go beyond the surface to sanitize and restore every corner of your home or business.',
        image: image2,
        fullDescription: [
            'Our Deep Cleaning Services provides top-quality results and peace of mind.',
            'A detailed top-to-bottom refresh for a cleaner, healthier space.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Deep Cleaning Services',
        benefits: sharedBenefits,
    },
    {
        slug: 'move-in-move-out-cleaning',
        title: 'Move-In & Move-Out Cleaning',
        description:
            'Moving can be stressful—let us handle the cleaning. Our move-in and move-out services ensure your old or new space is spotless, making it ideal for renters, landlords, homeowners, and realtors looking for a professional finish.',
        image: image4,
        fullDescription: [
            'Our Move-In & Move-Out Cleaning provides top-quality results and peace of mind.',
            'Perfect for renters, homeowners, and realtors for spotless transitions.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Move-In & Move-Out Cleaning',
        benefits: sharedBenefits,
    },
    {
        slug: 'vacation-rental-airbnb-cleaning',
        title: 'Vacation Rental & Airbnb Cleaning',
        description:
            'Keep your vacation property guest-ready with fast, efficient cleaning services. We handle turnovers, restocking toiletries, and even light exterior maintenance—so your guests always walk into a clean, welcoming space.',
        image: image3,
        fullDescription: [
            'Our Vacation Rental & Airbnb Cleaning provides top-quality results and peace of mind.',
            'Guest-ready service with restocking, turnover, and light landscaping.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Vacation Rental & Airbnb Cleaning',
        benefits: sharedBenefits,
    },
    {
        slug: 'office-cleaning-services',
        title: 'Office Cleaning Services',
        description:
            'Maintain a professional and hygienic work environment with our flexible office cleaning solutions. From conference rooms to cubicles, we clean discreetly during or after business hours to ensure minimal disruption and maximum cleanliness.',
        image: image5,
        fullDescription: [
            'Our Office Cleaning Services provides top-quality results and peace of mind.',
            'Discreet and flexible office cleaning to match your business hours.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Office Cleaning Services',
        benefits: sharedBenefits,
    },
    {
        slug: 'commercial-cleaning-services',
        title: 'Commercial Cleaning Services',
        description:
            'Support your retail, hospitality, or industrial business with our tailored commercial cleaning services. We understand the demands of high-traffic environments and deliver solutions that prioritize safety, presentation, and sanitation.',
        image: image6,
        fullDescription: [
            'Our Commercial Cleaning Services provides top-quality results and peace of mind.',
            'Ideal for retail, hospitality, and industrial spaces.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Commercial Cleaning Services',
        benefits: sharedBenefits,
    },
    {
        slug: 'multi-family-apartment-cleaning',
        title: 'Multi-Family & Apartment Cleaning',
        description:
            'We handle everything from tenant move-out cleans to regular maintenance of shared spaces like lobbies, gyms, and hallways. Perfect for apartment complexes, condos, and multi-unit properties that require consistent and thorough upkeep.',
        image: image1,
        fullDescription: [
            'Our Multi-Family & Apartment Cleaning provides top-quality results and peace of mind.',
            'From common areas to tenant-ready turnovers—leave it to us.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Multi-Family & Apartment Cleaning',
        benefits: sharedBenefits,
    },
    {
        slug: 'contract-cleaning-services',
        title: 'Contract Cleaning Services',
        description:
            'Ensure long-term cleanliness and consistency with our contract-based cleaning plans. Ideal for businesses, property managers, and large facilities, our team works on your schedule to provide dependable, ongoing service.',
        image: image7,
        fullDescription: [
            'Our Contract Cleaning Services provides top-quality results and peace of mind.',
            'Scheduled long-term cleaning for businesses and property managers.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Contract Cleaning Services',
        benefits: sharedBenefits,
    },
    {
        slug: 'custom-cleaning-plans',
        title: 'Custom Cleaning Plans',
        description:
            'Have unique needs? We offer fully customizable cleaning plans that adapt to your space, budget, and preferences. Whether you need one-time service or ongoing care, our solutions are designed around you.',
        image: image9,
        fullDescription: [
            'Our Custom Cleaning Plans provides top-quality results and peace of mind.',
            'Tailored to your unique space, schedule, and preferences.',
        ],
        serviceQualityTitle: 'Service Quality',
        serviceQualityDescription:
            'We focus on detail, reliability, and client satisfaction in every clean.',
        highlights: sharedHighlights,
        benefitsTitle: 'Benefits of Custom Cleaning Plans',
        benefits: sharedBenefits,
    },
]

export const ServiceCard = ({ service }) => {
    const { title, description, image, slug } = service;
    return (
        <div className='bg-white rounded-[30px] h-[538px] z-10 md:p-6 p-4 group hover:-translate-y-[4px] translate-y-0 transition-all duration-300 ease-in flex flex-col'>
            <div className='flex justify-between items-center'>
                <div className='bg-secondary w-fit rounded-3xl flex items-center gap-1 py-2 px-3'>
                    <PercentCircle className='w-5 h-5' />
                    <p>Discount 50%</p>
                </div>
                <div>
                    <Link href={`/services/${slug}`}>
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
                        <p className='text-sm mt-2 text-secondary'>{description.slice(0,60)}...
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