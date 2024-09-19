import React, { useContext, useEffect, useState } from 'react'
import headerClasses from './header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import HeaderLogo from '../../../public/media/images/Logo.png'
import Dropdown from './Dropdown-menu/Dropdown'
import { DataContext } from '../../DataContext/DataContext'
import Search from './Search/Search'
import Icons from './SocialMedia/Icons'

const Header = () => {
  const { data, loading, error } = useContext(DataContext);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <header>
      <div className={headerClasses.container}>
        <div className={headerClasses.top}>
          <div className={headerClasses.left}>
            <h1>
              <Link to="/">
                <img src={HeaderLogo} alt="Bunker-Logo" />
              </Link>
            </h1>
          </div>
          <div className={headerClasses.top_right}>
            <Icons />
            <div className={headerClasses.languages_Box}>
            </div>
            <Dropdown />
          </div>
        </div>
      </div>
      <div className={headerClasses.bottom}>
        <div className={headerClasses.container}>
          <div className={headerClasses.left}>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={headerClasses.right}>
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;