import { Button } from '@/components/ui/button';
import React from 'react';

const SecondaryButton = ({ text }) => {
    return (
        <div className='py-1'>
            <Button style={{ boxShadow: '#FFC702 0px 3px 8px -2px' }} className={'uppercase text-black bg-secondary bg:bg-secondary md:py-8 md:px-10 py-6 px-8 md:text-sm text-[10px] overflow-hidden rounded-[80px] primary-btn'}>
                {text}
            </Button>
        </div>
    );
};

export default SecondaryButton;