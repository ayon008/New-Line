import React from 'react';
import { Banner } from '../about';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PrimaryButton from '@/Shared/Buttons/PrimaryButton';

const contact = () => {
    return (
        <div>
            <Banner name={'Contact Us'} breadcum={<span className=''><span className='text-primary'>Home</span> {'>'} Contact Us</span>} />
            <div className='mt-20 max-w-[1280px] mx-auto w-full 2xl:px-0 px-6'>
                <h2 className='md:text-5xl text-3xl font-semibold text-center'>Our Contact Information</h2>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-14'>
                    <div className='flex items-center gap-6 border rounded-[20px] px-8 py-6 group/icon'>
                        <div className='w-14 h-auto'>
                            <div className='!w-14 !h-14 flex justify-center items-center rounded-[20px] bg-primary border border-secondary'>
                                <MapPin className='text-white w-6 h-6 transition-transform duration-300 group-hover/icon:rotate-y-180' />
                            </div>
                        </div>
                        <div className='h-auto'>
                            <h3 className='text-xl font-semibold'>Address</h3>
                            <p className='text-secondary text-base font-medium'>
                                374 William S Canning Blvd, Fall River MA 2721, USA
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 border rounded-[20px] px-8 py-6 group/icon'>
                        <div className='w-14 h-auto'>
                            <div className='!w-14 !h-14 flex justify-center items-center rounded-[20px] bg-[#8CC63F] border border-secondary'>
                                <Phone className='text-white w-6 h-6 transition-transform duration-300 group-hover/icon:rotate-y-180' />
                            </div>
                        </div>
                        <div className='h-auto'>
                            <h3 className='text-xl font-semibold'>Phone</h3>
                            <p className='text-secondary text-base font-medium'>
                                +880-172-108060
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-6 border rounded-[20px] px-8 py-6 group/icon'>
                        <div className='w-14 h-auto'>
                            <div className='!w-14 !h-14 flex justify-center items-center rounded-[20px] bg-[#FFC702] border border-secondary'>
                                <Mail className='text-white w-6 h-6 transition-transform duration-300 group-hover/icon:rotate-y-180' />
                            </div>
                        </div>
                        <div className='h-auto'>
                            <h3 className='text-xl font-semibold'>Email</h3>
                            <p className='text-secondary text-base font-medium'>
                                shariar.ayon128@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className='contact-form mt-20'>
                    <div className='md:w-1/2 w-full bg-[#F7F7F7] rounded-[30px] p-20'>
                        <h1 className='font-semibold text-5xl mb-10'>Get In Touch</h1>
                        <form>
                            <div className='grid grid-cols-2 gap-6'>
                                <Input className={'p-8 rounded-[30px] bg-white'} type={'text'} placeholder='Your Name' />
                                <Input className={'p-8 rounded-[30px] bg-white'} type={'email'} placeholder='Email Address' />
                                <Input className={'p-8 rounded-[30px] bg-white'} type={'text'} placeholder='Phone Number' />
                                <Input className={'p-8 rounded-[30px] bg-white'} type={'text'} placeholder='Subject' />
                            </div>
                            <div className='my-6'>
                                <Textarea placeholder='Your Message' />
                            </div>
                            <div className='mx-auto w-fit'>
                                <PrimaryButton text={'Submit Message'} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;