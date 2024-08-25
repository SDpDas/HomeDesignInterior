'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const links = [
    { path: '/', name: 'home' },
    { path: '/about', name: 'about' },
    { path: '/gallery', name: 'gallery' },
    { path: '/projects', name: 'projects' },
    { path: '/contact', name: 'contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

    const renderLinks = () => {
        return links.map((link, index) => (
            <Link
                href={link.path}
                key={index}
                className={`uppercase ${linkStyles}`}
            >
                {link.path === path && (
                    <motion.span
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        transition={{ type: 'tween' }}
                        layoutId='underline'
                        className={`${underlineStyles}`}
                    />
                )}
                {link.name}
            </Link>
        ));
    };

    return (
        <nav className={containerStyles}>
            {renderLinks()}
        </nav>
    );
};

export default Nav;

