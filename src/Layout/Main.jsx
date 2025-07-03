import Navbar, { Nav } from '@/Shared/Navbar';
import NavComponent from '@/Shared/NavComponent';
import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react'
import { Archivo } from 'next/font/google';
import Footer from '@/Shared/Footer/Footer';
import ScrollTopButton from '@/Shared/Buttons/TopButton';
import FadeIn from '@/Animation/FadeIn';

const archivo = Archivo({
    subsets: ['latin'], // or ['latin-ext'] if needed
    weight: ['400', '500', '600', '700'], // choose what weights you need
    variable: '--font-archivo', // optional: useful for Tailwind config
    display: 'swap', // optional
});


const Main = ({ children }) => {
    const [state, setState] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setState(true);
            } else if (window.scrollY < 150) {
                setState(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${archivo.className} overflow-x-hidden`}>
            <FadeIn>
                <div className='absolute right-0 left-0 top-0 z-50 bg-white md:rounded-bl-[50px] md:rounded-br-[50px] rounded-br-[8px] rounded-bl-[8px]'>
                    <NavComponent />
                    <Navbar />
                </div>
                <motion.div
                    initial={{ top: '-1000px', opacity: 0 }}
                    animate={state ? { top: '0px', opacity: 1 } : { top: '-1000px', opacity: 0 }}
                    className={`bg-white z-50 py-1 shadow-2xl fixed left-0 right-0 transition-all duration-300`}>
                    <Nav />
                </motion.div>
                {children}
                <ScrollTopButton />
                <Footer />
            </FadeIn>
        </div>
    );
};

export default Main;