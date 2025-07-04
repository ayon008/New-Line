import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../public/self_maid_resized_500x111_transparent.png'
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


export const Logo = () => {
    return (
        <div>
            <Link href={'/'}>
                <Image src={logo} priority width={213} className='md:w-[213px] w-[180px] object-cover' height={60} alt='logo-new-cleaning' />
            </Link>
        </div>
    )
}
export const Nav = () => {
    const navItems = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/services', name: 'Services' },
        { path: '/contact', name: 'Contact' }
    ]
    const pathName = useRouter().asPath;
    const [open, setOpen] = useState(false);
    useEffect(() => {
        setOpen(false)
    }, [pathName])
    return (
        <div className='max-w-[1280px] w-full mx-auto px-6 2xl:px-0 flex items-center justify-between overflow-hidden'>
            <Logo />
            <div className='md:flex hidden items-center gap-6'>
                {
                    navItems.map((items, i) => {
                        return (
                            <Link className={`font-medium uppercase tracking-widest ${pathName === items.path ? 'text-primary' : 'text-black hover:text-primary duration-300'}`} key={i} href={`${items.path}`}>{items.name}</Link>
                        )
                    })
                }
            </div>
            <div className='md:block hidden'>
                <Link href={'/contact'}>
                    <PrimaryButton text={'get a quote'} />
                </Link>
            </div>
            <div className='md:hidden block'>
                <Sheet open={open} onOpenChange={setOpen}>
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
                                                <Link href={`${item.path}`} className={`uppercase tracking-widest ${pathName === item.path ? 'text-primary' : 'text-black hover:text-primary duration-300'}`}>{item.name}</Link>
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
        <div className='w-full bg-white md:rounded-bl-[50px] md:rounded-br-[50px] rounded-br-[8px] rounded-bl-[8px] shadow-xl py-1'>
            <Nav />
        </div>
    );
};

export default Navbar;