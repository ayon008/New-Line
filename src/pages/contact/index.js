import React from 'react';
import { Banner } from '../about';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PrimaryButton from '@/Shared/Buttons/PrimaryButton';
import Head from 'next/head';
import { siteName } from '../_app';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        Swal.fire({
            title: 'Sending your message...',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            Swal.close();

            if (res.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent!',
                    text: 'We’ll get back to you shortly.',
                });
                reset();
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: error.message || 'Failed to send message.',
            });
        }
    };

    return (
        <>
            <Head>
                <title>Contact Us | {siteName}</title>
            </Head>
            <div>
                <Banner
                    name={'Contact Us'}
                    breadcum={
                        <span>
                            <span className="text-primary">Home</span> {'>'} Contact Us
                        </span>
                    }
                />
                <div className="mt-20 max-w-[1280px] mx-auto w-full 2xl:px-0 px-6">
                    <h2 className="md:text-5xl text-3xl font-semibold text-center">Our Contact Information</h2>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-14">
                        {/* Contact Cards */}
                        {/* ... your MapPin / Phone / Mail cards */}
                    </div>
                    <div className="contact-form mt-20">
                        <div className="md:w-1/2 w-full bg-[#F7F7F7] rounded-[30px] md:p-16 p-6">
                            <h1 className="font-semibold md:text-5xl text-3xl md:text-left text-center mb-10">Get In Touch</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                                    <div>
                                        <Input
                                            {...register('name', { required: 'Name is required' })}
                                            className={'p-8 rounded-[30px] bg-white'}
                                            type={'text'}
                                            placeholder="Your Name"
                                        />
                                        {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Invalid email address',
                                                },
                                            })}
                                            className={'p-8 rounded-[30px] bg-white'}
                                            type={'email'}
                                            placeholder="Email Address"
                                        />
                                        {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            {...register('phone', { required: 'Phone is required' })}
                                            className={'p-8 rounded-[30px] bg-white'}
                                            type={'text'}
                                            placeholder="Phone Number"
                                        />
                                        {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            {...register('subject', { required: 'Subject is required' })}
                                            className={'p-8 rounded-[30px] bg-white'}
                                            type={'text'}
                                            placeholder="Subject"
                                        />
                                        {errors.subject && <p className="text-red-500 mt-1">{errors.subject.message}</p>}
                                    </div>
                                </div>

                                <div className="my-6">
                                    <Textarea
                                        {...register('message', { required: 'Message is required' })}
                                        placeholder="Your Message"
                                        className="min-h-[150px] resize-none"
                                    />
                                    {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
                                </div>

                                <div className="mx-auto w-fit">
                                    <PrimaryButton text={'Submit Message'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
