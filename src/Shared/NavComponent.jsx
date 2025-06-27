import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';

const NavComponent = () => {
    return (
        <div className='bg-primary max-w-[1580px] mx-auto md:block hidden rounded-bl-[50px] rounded-br-[50px]'>
            <div className='max-w-[1280px] w-full mx-auto px-20 py-4'>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <a
                            href="tel:+8801726108060"
                            className='flex items-center gap-2 border-r border-secondary pr-10'
                        >
                            <Phone size={'14px'} color='#FFC702' />
                            <p className='text-white text-sm hover:text-secondary transition-all duration-300'>+880-1726-108060</p>
                        </a>

                        <a
                            href="mailto:shariar.ayon128@gmail.com"
                            className='flex items-center gap-2 px-10 border-r border-secondary'
                        >
                            <Mail size={'14px'} color='#FFC702' />
                            <p className='text-white text-sm hover:text-secondary transition-all duration-300'>shariar.ayon128@gmail.com</p>
                        </a>

                        <a
                            href="https://www.google.com/maps/place/Dhaka,+Bangladesh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 pl-10'
                        >
                            <MapPin size={'14px'} color='#FFC702' />
                            <p className='text-white text-sm hover:text-secondary transition-all duration-300'>Dhaka, Bangladesh</p>
                        </a>
                    </div>
                    <div className='flex items-center gap-4'>
                        <p className='text-sm text-white'>Follow Us:</p>
                        <Facebook
                            size={14}
                            className="text-white hover:text-secondary cursor-pointer transition-colors duration-200"
                        />
                        <Twitter
                            size={14}
                            className="text-white hover:text-secondary cursor-pointer transition-colors duration-200"
                        />
                        <Instagram
                            size={14}
                            className="text-white hover:text-secondary cursor-pointer transition-colors duration-200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavComponent;