import Navbar, { Nav } from '@/Shared/Navbar';
import NavComponent from '@/Shared/NavComponent';
import React, { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';
import { motion } from 'motion/react'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], // choose weights you need
    variable: '--font-montserrat', // optional CSS variable
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
        <div className={`${montserrat.className}`}>
            <div className='absolute right-0 left-0 top-0 z-50 bg-white md:rounded-bl-[50px] md:rounded-br-[50px] rounded-br-[8px] rounded-bl-[8px]'>
                <NavComponent />
                <Navbar />
            </div>
            <motion.div
                initial={{ top: '-1000px', opacity: 0 }}
                animate={state ? { top: '0px', opacity: 1 } : { top: '-1000px', opacity: 0 }}
                className={`bg-white z-50 py-4 shadow-2xl fixed left-0 right-0 transition-all duration-300`}>
                <Nav />
            </motion.div>
            {children}
        </div>
    );
};

export default Main;