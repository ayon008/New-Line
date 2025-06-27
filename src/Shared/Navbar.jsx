import Image from 'next/image';
import React from 'react';
import logo from '../../public/828e82de-b777-4fda-bb35-cf5b54409638-removebg-preview.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryButton from './Buttons/PrimaryButton';
import { Menu, Sheet } from 'lucide-react';
import { SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
const Navbar = () => {
    const Logo = () => {
        return (
            <div>
                <Image src={logo} width={213} className='md:w-[213px] w-[180px]' height={60} alt='logo-new-cleaning' />
            </div>
        )
    }

    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/contact', name: 'Contact' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' }
    ]

    const pathName = useRouter().asPath;


    return (
        <div className='w-full bg-white md:rounded-bl-[50px] md:rounded-br-[50px] rounded-br-[8px] rounded-bl-[8px] shadow-xl py-4'>
            <div className='max-w-[1280px] w-full mx-auto md:px-20 px-6 flex items-center justify-between overflow-hidden'>
                <Logo />
                <div className='md:flex hidden items-center gap-6'>
                    {
                        navItems.map((items, i) => {
                            return (
                                <Link className={`font-medium ${pathName === items.path ? 'text-primary' : 'text-black hover:text-primary duration-300'}`} key={i} href={`${items.path}`}>{items.name}</Link>
                            )
                        })
                    }
                </div>
                <div className='md:block hidden'>
                    <PrimaryButton text={'get a quote'} />
                </div>
                <div className='md:hidden block'>
                    <Sheet>
                        <SheetTrigger>Open</SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    {/* <Menu /> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;