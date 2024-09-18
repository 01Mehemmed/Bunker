import React, { useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import DropClasses from './dropdown.module.scss'
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { NavLink, Link } from 'react-router-dom';
import Search from '../Search/Search';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className={DropClasses.hamburgerMenu}>
            <button className={DropClasses.hamburgerIcon} onClick={toggleMenu}>
                <GiHamburgerMenu />
            </button>
            <div className={`${DropClasses.dropdownMenu} ${isOpen ? DropClasses.open : ''}`}>
                <button className={DropClasses.closeIcon} onClick={toggleMenu}>
                    <IoIosClose />
                </button>
                <ul className={DropClasses.menu}>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/Projects'>Projects</NavLink></li>
                    <li><NavLink to='/Services'>Services</NavLink></li>
                    <li><NavLink to='/Blogs'>Blogs</NavLink></li>
                    <li><NavLink to='/Contact'>Contact Us</NavLink></li>
                    <Search />
                </ul>
            </div>
        </div>
    );
}

export default Dropdown