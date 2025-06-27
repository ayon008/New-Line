import { Button } from '@/components/ui/button';
import React from 'react';

const PrimaryButton = ({ text }) => {
    return (
        <Button className={'uppercase text-white bg-primary py-8 px-12 rounded-[80px] primary-btn'}>
            {text}
        </Button>
    );
};

export default PrimaryButton;