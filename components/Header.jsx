'use client';

import React, { useEffect, useState } from 'react';

//Components
import Logo from './logo'
import Nav from './nav';
import MobileNavigation from './MobileNav';
import ThemeToggler from './ThemeToggler';
import { usePathname } from 'next/navigation';

const Header = () => {

    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const scrollYPos = window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        });

        return() => window.removeEventListener('scroll', scrollYPos);
    });

    return (
        <header
        className={`${
            header ? 'h-16 bg-tertiary shadow-lg dark:bg-accent' : 'h-16 dark:bg-transparent'
        } sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'} flex items-center`}
        >
            <div className='container mx-auto flex-1'>
                <div className='flex items-center justify-between  h-full'>
                    {/* Logo Section */}
                    <Logo className='flex items-center gap-x-6 rounded my-auto' />
                    <div className='flex items-center gap-x-4 my-auto'>
                        {/*Nav Section*/}
                        <Nav
                            containerStyles={'hidden xl:flex gap-x-8 items-center'}
                            linkStyles={'relative hover:text-primary transition-all'}
                            underlineStyles={'absolute left-0 top-full h-[2px] bg-primary w-full'}
                        />

                        {/* Theme Toggler */}
                        <ThemeToggler />

                        {/* Mobile Navigation */}
                        <div className='xl:hidden'>
                            <MobileNavigation />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header