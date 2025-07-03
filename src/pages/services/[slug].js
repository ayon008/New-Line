import Head from 'next/head';
import React from 'react';
import { Banner } from '../about';
import { siteName } from '../_app';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/router';
import { services } from '@/Shared/Services/Services';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PrimaryButton from '@/Shared/Buttons/PrimaryButton';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';

const Index = () => {
    const { slug } = useRouter().query;
    console.log(slug);
    const service = services.find((s) => s.slug === slug);
    console.log(service);

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
                <title>{service?.title} | {siteName}</title>
            </Head>
            <Banner name={service?.title} breadcum={<span className=''><span className='text-primary'>Home</span> {'>'} Our Services {'>'} <span>{service?.title}</span></span>} />
            <div className='grid md:grid-cols-[2fr_1fr] grid-cols-1 my-14 2xl:px-0 px-6 gap-8'>
                <div className='md:space-y-8 space-y-6'>
                    <Image
                        width={735}
                        height={438}
                        src={service?.image}
                        className='w-full h-auto rounded-[30px]'
                        alt={service?.title}
                    />
                    <h1 className='md:text-5xl text-4xl font-semibold'>{service?.title}</h1>
                    <p className='text-secondary text-base'>{service?.description}</p>
                    {service?.fullDescription?.map((para, index) => (
                        <p key={index} className='text-secondary text-base'>
                            {para}
                        </p>
                    ))}

                    <h2 className='md:text-5xl text-4xl font-semibold'>
                        {service?.serviceQualityTitle}
                    </h2>
                    <p className='text-secondary text-base'>
                        {service?.serviceQualityDescription}
                    </p>

                    <div className='flex items-center gap-6 md:flex-row flex-col'>
                        <Image
                            src={service?.image}
                            width={350}
                            height={273}
                            alt=''
                            className='object-center object-cover rounded-[30px]'
                        />
                        <ul className='service-list text-secondary space-y-2 text-sm'>
                            {service?.highlights?.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <h3 className='text-3xl font-semibold'>
                        {service?.benefitsTitle || 'Benefits of Cleaning With Us'}
                    </h3>
                    <p className='text-secondary text-base'>
                        {service?.benefitsDescription || service?.serviceQualityDescription}
                    </p>

                    <div className='flex items-center gap-6 flex-col md:flex-row'>
                        <Image
                            src={service?.image}
                            width={350}
                            height={273}
                            alt=''
                            className='object-center object-cover rounded-[30px]'
                        />
                        <ul className='service-list text-secondary space-y-2 text-sm pl-0'>
                            {service?.highlights?.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <p className='text-secondary text-base'>
                        Specialized cleaning for factories, warehouses, and other industrial sites, often requiring specific equipment and expertise. Trained and experienced cleaners who are knowledgeable in various cleaning techniques.
                    </p>
                </div>

                <div>
                    <div className='bg-[#F6F6F6] p-10 rounded-[30px] space-y-6'>
                        <h2 className='text-2xl font-semibold text-black'>Categories</h2>
                        {services?.map((service, i) => {
                            return (
                                <div key={i}>
                                    <Link className='cursor-pointer' href={`/services/${service.slug}`}>
                                        <div className='bg-white py-6 px-8 rounded-[40px]'>
                                            <p className='flex items-center justify-between'>
                                                <span className='text-secondary tracking-wider'>{service?.title}</span>
                                                <ArrowRight />
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className='bg-[#F6F6F6] p-10 rounded-[30px] mt-10'>
                        <h2 className='text-2xl font-semibold text-black mb-10'>Contact Us</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid grid-cols-1 gap-6">
                                <div>
                                    <Input
                                        {...register('name', { required: 'Name is required' })}
                                        className="p-8 rounded-[30px] bg-white"
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Invalid email address',
                                            },
                                        })}
                                        className="p-8 rounded-[30px] bg-white"
                                        type="email"
                                        placeholder="Email Address"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        {...register('phone', {
                                            required: 'Phone number is required',
                                            minLength: {
                                                value: 10,
                                                message: 'Phone number must be at least 10 digits',
                                            },
                                        })}
                                        className="p-8 rounded-[30px] bg-white"
                                        type="text"
                                        placeholder="Phone Number"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                                    )}
                                </div>

                                <div>
                                    <Input
                                        {...register('subject', { required: 'Subject is required' })}
                                        className="p-8 rounded-[30px] bg-white"
                                        type="text"
                                        placeholder="Subject"
                                    />
                                    {errors.subject && (
                                        <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="my-6">
                                <Textarea
                                    {...register('message', { required: 'Message is required' })}
                                    placeholder="Your Message"
                                    className="min-h-[150px] resize-none w-full"
                                />
                                {errors.message && (
                                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                                )}
                            </div>

                            <div className="mx-auto w-fit">
                                <PrimaryButton text="Submit Message" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;