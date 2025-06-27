import Navbar from '@/Shared/Navbar';
import NavComponent from '@/Shared/NavComponent';
import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], // choose weights you need
    variable: '--font-montserrat', // optional CSS variable
});

const Main = () => {
    return (
        <div className={`${montserrat.className}`}>
            <NavComponent />
            <Navbar />
        </div>
    );
};

export default Main;