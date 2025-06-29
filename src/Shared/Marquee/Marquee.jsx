
import React from 'react';
import Marquee from "react-fast-marquee";

const marqueeItems = [
    "Best Cleaning",
    "Cleaning Agency",
    "Dry Cleaning",
    "Floor Cleaning",
    "Door Cleaning",
    "Window Cleaning"
];

export const StarIcon = () => (
    <svg
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="presentation"
        aria-hidden="true"
    >
        <path
            d="M10 0L12.7009 7.29909L20 10L12.7009 12.7009L10 20L7.29909 12.7009L0 10L7.29909 7.29909L10 0Z"
            fill="#FFC702"
        />
    </svg>
);

const Marquees = () => {
    return (
        <div className='bg-primary px-6'>
            <Marquee autoFill className='py-10'>
                {marqueeItems.map((item, index) => (
                    <div key={index} className='flex items-center gap-6 pl-6'>
                        <h1 className={`text-white text-4xl font-semibold`}>{item}</h1>
                        <StarIcon />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default Marquees;
