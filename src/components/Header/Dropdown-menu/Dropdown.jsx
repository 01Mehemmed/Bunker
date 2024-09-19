import React, { useContext, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import DropClasses from './dropdown.module.scss'
import { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { NavLink, Link } from 'react-router-dom';
import Search from '../Search/Search';
import { DataContext } from '../../../DataContext/DataContext';

const Dropdown = () => {
    const { dropmenudata, loading, error } = useContext(DataContext)

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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

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
            {
                dropmenudata?.map((item) => (
                    <li key={item.id}>
                        <NavLink 
                            to={item.path}
                            onClick={toggleMenu} // Her tıklamada menüyü kapatır
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))
            }
            <Search />
        </ul>
    </div>
</div>
    );
}

export default Dropdown