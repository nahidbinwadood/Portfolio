// components/Nav.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Nav = () => {
    const router = useRouter();
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (section) => {
        setActiveLink(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0">
                            <Link href="/" className="text-white font-bold text-xl">
                            Portfolio
                                 
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <NavLink active={activeLink === 'hero'} onClick={() => handleClick('hero')}>
                                    Home
                                </NavLink>
                                <NavLink active={activeLink === 'about'} onClick={() => handleClick('about')}>
                                    About
                                </NavLink>
                                {/* Add more links as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ active, children, onClick }) => {
    return (
        <a
            href="#"
            className={`${
                active ? 'text-yellow-500' : 'text-gray-300 hover:text-white'
            } px-3 py-2 rounded-md text-sm font-medium`}
            onClick={(e) => {
                e.preventDefault();
                onClick();
            }}
        >
            {children}
        </a>
    );
};

export default Nav;
