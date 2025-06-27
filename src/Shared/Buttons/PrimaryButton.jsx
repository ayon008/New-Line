import { Button } from '@/components/ui/button';
import React from 'react';

const PrimaryButton = ({ text }) => {
    return (
        <Button className={'uppercase text-white bg-primary md:py-8 md:px-10 py-6 px-8 md:text-sm text-[10px] overflow-hidden rounded-[80px] primary-btn'}>
            {text}
        </Button>
    );
};

export default PrimaryButton;