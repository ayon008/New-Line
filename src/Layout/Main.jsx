import Navbar from '@/Shared/Navbar';
import NavComponent from '@/Shared/NavComponent';
import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], // choose weights you need
    variable: '--font-montserrat', // optional CSS variable
});

const Main = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <div className='absolute right-0 left-0 top-0 z-50 bg-white md:rounded-bl-[50px] md:rounded-br-[50px] rounded-br-[8px] rounded-bl-[8px]'>
                <NavComponent />
                <Navbar />
            </div>
            {children}
        </div>
    );
};

export default Main;