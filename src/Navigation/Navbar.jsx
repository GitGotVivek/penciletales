
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaLinkedin, FaXmark } from "react-icons/fa6";
import { FaSquareXTwitter, FaSquarePinterest } from "react-icons/fa6";
import Modal from './Modal';
import Login from '../Auth/Login';
import { IoIosArrowDropup } from "react-icons/io";
import { ImUser } from "react-icons/im";
import logo from "../Images/logo.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isIcon, setIsIcon] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: '/', link: "Home" },
        { path: '/about', link: "About" },
        { path: '/blogs', link: "Blogs" },
        { path: '/contact', link: "Contact" },
        { path: '/user-profile', link: "Profile" },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-black/25'}`}>
            <nav className='p-2 max-w-7xl mx-auto flex justify-between items-center'>
                <a href="/" className='text-md font-bold text-white flex items-center'>
                    <img src={logo} alt="Logo" className="w-20px rounded-lg h-[85px] md:w-32px lg:w-[100px] bg-slate-900 " />
                </a>

                <ul className='hidden md:flex gap-8 lg:gap-12 text-lg'>
                    {navItems.map(({ path, link }) => (
                        <li className='text-white' key={path}>
                            <NavLink
                                className={({ isActive }) => isActive ? 'active' : ''}
                                to={path}>{link}</NavLink>
                        </li>
                    ))}
                </ul>

                <div className='hidden md:flex lg:flex gap-2 md:gap-4 items-center'>
                    <div className={`flex gap-2 md:gap-4 items-center transition-all duration-300 ${isIcon ? 'opacity-100' : 'opacity-0'} ${isIcon ? 'translate-x-0' : 'translate-x-full'}`}>
                        <a href="/" className={`text-white sm:text-xl md:text-2xl lg:text-2xl hover:text-orange-500 transition-opacity duration-300 ${isIcon ? 'delay-200 opacity-100' : 'opacity-0'}`}><FaLinkedin /></a>
                        <a href="/" className={`text-white sm:text-xl md:text-2xl lg:text-2xl hover:text-orange-500 transition-opacity duration-300 ${isIcon ? 'delay-150 opacity-100' : 'opacity-0'}`}><FaSquareXTwitter /></a>
                        <a href="/" className={`text-white sm:text-xl md:text-2xl lg:text-2xl hover:text-orange-500 transition-opacity duration-300 ${isIcon ? 'delay-100 opacity-100' : 'opacity-0'}`}><FaSquarePinterest /></a>
                    </div>
                    <button className={`bg-orange-500 px-1 py-1 text-3xl md:text-2xl lg:text-3xl font-bold rounded-full hover:bg-white transition-all duration-200 ease-in ${isIcon ? 'transform rotate-[-90deg]' : 'transform rotate-0'}`} onClick={() => setIsIcon(prev => !prev)}><IoIosArrowDropup /></button>

                    <div className='w-[2px] h-14 bg-white mx-2'></div>

                    <div className='flex flex-col items-center'>
                        <button className='text-white px-1 py-1 text-2xl md:text-xl lg:text-2xl font-bold border-2 border-orange-500 rounded-full transition-all duration-200 ease-in'>
                            <ImUser />
                        </button>
                        <span className='text-white text-sm font-bold mt-1'>Vivek</span>
                    </div>
                </div>

                <div className='md:hidden flex items-center gap-4'>
                    <div className='flex flex-col items-center'>
                        <button className='text-white px-1 py-1 text-2xl font-bold border-2 border-orange-500 rounded-full transition-all duration-200 ease-in'>
                            <ImUser />
                        </button>
                        <span className='text-white text-sm font-bold'>Vivek</span>
                    </div>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-5 h-5 text-white' /> : <FaBars className='w-5 h-5 text-white' />}
                    </button>
                </div>
            </nav>

            <div>
                <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-16 bg-slate-900 ${isMenuOpen ? 'fixed top-0 left-0 w-full transition-all ease-out duration-200' : 'hidden'}`}>
                    {navItems.map(({ path, link }) => (
                        <li className='text-white hover:text-orange-500 transition-all duration-200 ease-in' key={path}>
                            <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {isModalOpen && <Login isOpen={isModalOpen} onClose={closeModal} from='navbar' />}
        </header>
    );
};

export default Navbar;
