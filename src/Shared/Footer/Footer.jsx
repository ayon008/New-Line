import React from 'react';
import { Logo } from '../Navbar';
import { ArrowRight, Facebook, Instagram, MapPin, Phone, Send, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import footer_Image from '../../../public/footer.jpg'
const Footer = () => {
    return (
        <div className='footer relative'>
            <div className='max-w-[1280px] w-full mx-auto 2xl:px-0 px-6 pt-20 pb-40'>
                <div className='flex items-center justify-between md:flex-row flex-col gap-10 w-full bg-white/10 backdrop-blur-3xl border border-white/20 rounded-[40px] px-10 py-4'>
                    <Logo />
                    <div className='flex items-center gap-10 text-white'>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-1 mt-20 md:gap-0 gap-20'>
                    <div className='space-y-10'>
                        <h3 className='footer-headline text-2xl text-white font-semibold'>Contact Us</h3>
                        <div className='flex items-center gap-6'>
                            <div className='w-14 h-14 flex justify-center items-center rounded-full border border-secondary'>
                                <MapPin className='text-[#FFC702] w-6 h-6' />
                            </div>
                            <div>
                                <h3 className='text-xl text-white font-semibold'>Address</h3>
                                <p className='text-white text-base font-medium'>Dhaka,Bangladesh</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <div className='w-14 h-14 flex justify-center items-center rounded-full border border-secondary'>
                                <Phone className='text-[#FFC702] w-6 h-6' />
                            </div>
                            <div>
                                <h3 className='text-xl text-white font-semibold'>Phone</h3>
                                <p className='text-white text-base font-medium'>+880-1726-108060</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-6'>
                            <div className='w-14 h-14 flex justify-center items-center rounded-full border border-secondary'>
                                <MapPin className='text-[#FFC702] w-6 h-6' />
                            </div>
                            <div>
                                <h3 className='text-xl text-white font-semibold'>Email Us</h3>
                                <p className='text-white text-base font-medium'>shariar.ayon128@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='footer-headline text-2xl text-white font-semibold'>Quick Links</h3>
                        <div className='mt-10 space-y-4'>
                            <div className='w-fit'>
                                <Link href={'/about'}>
                                    <div className='flex items-center gap-2 group/footer'>
                                        <ArrowRight className='text-[#FFC702] -rotate-[45deg] group-hover/footer:rotate-0 transition-all duration-200 ease-in' />
                                        <p className='text-base text-white font-medium group-hover/footer:text-[#FFC702] transition-all duration-200 ease-in'>About Us</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='w-fit'>
                                <Link href={'/contact'}>
                                    <div className='flex items-center gap-2 group/footer'>
                                        <ArrowRight className='text-[#FFC702] -rotate-[45deg] group-hover/footer:rotate-0 transition-all duration-200 ease-in' />
                                        <p className='text-base text-white font-medium group-hover/footer:text-[#FFC702] transition-all duration-200 ease-in'>Contact Us</p>
                                    </div>
                                </Link>
                            </div>
                            <div className='w-fit'>
                                <Link href={'/services'}>
                                    <div className='flex items-center gap-2 group/footer'>
                                        <ArrowRight className='text-[#FFC702] -rotate-[45deg] group-hover/footer:rotate-0 transition-all duration-200 ease-in' />
                                        <p className='text-base text-white font-medium group-hover/footer:text-[#FFC702] transition-all duration-200 ease-in'>Service Us</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='footer-headline text-2xl text-white font-semibold'>Our Services</h3>
                        <div className='mt-10 space-y-4'>
                            {[
                                { name: 'Basement Plumbing', href: '/services/basement-plumbing' },
                                { name: 'Drain Plumbing', href: '/services/drain-plumbing' },
                                { name: 'Water Line Repair', href: '/services/water-line-repair' },
                                { name: 'Kitchen Plumbing', href: '/services/kitchen-plumbing' },
                                { name: 'Gas Line Services', href: '/services/gas-line-services' },
                                { name: 'Bathroom Services', href: '/services/bathroom-services' },
                            ].map((service, index) => (
                                <div className='w-fit'>
                                    <Link key={index} href={service.href}>
                                        <div className='flex items-center gap-2 group/footer'>
                                            <ArrowRight className='text-[#FFC702] -rotate-[45deg] group-hover/footer:rotate-0 transition-all duration-200 ease-in' />
                                            <p className='text-base text-white font-medium group-hover/footer:text-[#FFC702] transition-all duration-200 ease-in'>
                                                {service.name}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className='footer-headline text-2xl text-white font-semibold'>News Letter</h3>
                        <p className='text-white text-sm my-6'>Subscribe to our Newsletter</p>
                        <div>
                            <form className='bg-white relative rounded-[30px] p-1'>
                                <Input className={'bg-white py-6 rounded-[30px] pr-24'} type="email" placeholder="Email" />
                                <Button type={'submit'} className={'py-6 !px-8 rounded-[30px] absolute right-1 top-1/2 -translate-y-1/2'}>
                                    <Send className='' />
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={footer_Image} className='absolute z-10 -left-2 right-0 bottom-0 h-[120px] object-cover' alt="Footer image" />
            <p className='bottom-4 left-1/2 -translate-x-1/2 z-20 absolute md:text-base text-xs text-center'>Copyright © 2025 <a href="https://portfolio-lake-five-93.vercel.app/" className='text-primary'>Shariar Ayon</a>. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;