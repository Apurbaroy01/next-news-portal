import Link from 'next/link';
import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';

const Navbar = () => {
    return (
        <header className='py-4 shadow-md'>
            <nav className='max-w-11/12 mx-auto flex justify-between items-center'>
                <div>
                    <Link href="/">Daily News</Link>
                </div>


                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className='flex flex-row '>
                            <NavigationMenuLink href='/news'>News</NavigationMenuLink>

                            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>Web Development</NavigationMenuLink>
                                <NavigationMenuLink>Mobile Apps</NavigationMenuLink>
                                <NavigationMenuLink>SEO</NavigationMenuLink>
                            </NavigationMenuContent>


                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>


                <div>
                    <button>Login</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;