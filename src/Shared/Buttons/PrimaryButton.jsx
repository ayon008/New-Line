import { Button } from '@/components/ui/button';
import React from 'react';

const PrimaryButton = ({ text }) => {
    return (
        <div className='w-fit py-2'>
            <Button style={{ boxShadow: '#007CFA 0px 3px 8px -2px' }} className={'uppercase text-white bg-primary md:py-8 md:px-10 py-6 px-8 md:text-sm text-[10px] overflow-hidden rounded-[80px] primary-btn'}>
                {text}
            </Button>
        </div>
    );
};

export default PrimaryButton;