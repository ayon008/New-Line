import Image from 'next/image';
import React from 'react';
import logo from '../../public/828e82de-b777-4fda-bb35-cf5b54409638-removebg-preview.png'
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryButton from './Buttons/PrimaryButton';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


export const Nav = () => {
    const Logo = () => {
        return (
            <div>
                <Link href={'/'}>
                    <Image src={logo} width={213} className='md:w-[213px] w-[180px]' height={60} alt='logo-new-cleaning' />
                </Link>
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
        <div className='max-w-[1280px] w-full mx-auto px-6 2xl:px-0 flex items-center justify-between overflow-hidden'>
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
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader className={'pt-20'}>
                            <SheetDescription>
                                <Logo />
                                <div className='pt-10'>
                                    {navItems.map((item, i) => {
                                        return (
                                            <div className='border-b py-3'>
                                                <Link href={`${item.path}`} className={`${pathName === item.path ? 'text-primary' : 'text-black hover:text-primary duration-300'}`}>{item.name}</Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}


const Navbar = () => {
    return (
        <div className='w-full bg-white md:rounded-bl-[50px] md:rounded-br-[50px] rounded-br-[8px] rounded-bl-[8px] shadow-xl py-4'>
            <Nav />
        </div>
    );
};

export default Navbar;