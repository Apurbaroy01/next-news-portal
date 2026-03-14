"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import { Switch } from '../ui/switch';
import { Button } from '../ui/button';
import { TfiAlignRight } from 'react-icons/tfi';
import { usePathname } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';



const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    return (
        <header className='py-2 shadow-md'>
            <nav className='max-w-11/12 mx-auto flex justify-between items-center'>
                <div className='font-bold text-xl'>
                    <Link href="/">Daily News</Link>
                </div>


                <NavigationMenu className='hidden lg:flex'>
                    <NavigationMenuList>
                        <NavigationMenuItem className='flex flex-row items-center'>
                            <NavigationMenuLink href='/news' className={`${pathname === '/news' ? 'underline text-red-400 font-semibold' : ''}`}>News</NavigationMenuLink>

                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-gray-50'>
                                <ul>
                                    <li>
                                        <NavigationMenuLink href='/services/web'>Web Development</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href='/services/app'>Mobile Apps</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink href='/services/seo'>SEO</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>

                            <NavigationMenuLink href='/about' className={`${pathname === '/about' ? 'underline text-red-400 font-semibold' : ''}`}>About</NavigationMenuLink>
                            <NavigationMenuLink href='/contact' className={`${pathname === '/cantact' ? 'underline text-red-400 font-semibold' : ''}`}>Contact</NavigationMenuLink>


                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>


                <div className='hidden lg:flex items-center space-x-2 '>
                    <span>Dark Mode</span>
                    <Switch />
                    <div>
                        <Button variant="default">Login</Button>
                    </div>
                </div>

                {/* mobile menu */}
                <div className='lg:hidden'>
                    <Button variant="outline" onClick={() => setOpen(!open)}>
                        {
                            open ? <IoMdClose /> : <TfiAlignRight />
                        }
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;