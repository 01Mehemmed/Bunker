import React, { useContext, useEffect, useState } from 'react'
import headerClasses from './header.module.scss'
import { Link, NavLink } from 'react-router-dom'
import SelectOption from '../Select-Option/SelectOption'
import HeaderLogo from '../../../public/media/images/Logo.png'
import { IoIosSearch } from 'react-icons/io'
import Dropdown from './Dropdown-menu/Dropdown'
import { DataContext } from '../../DataContext/DataContext'
import Search from './Search/Search'

const Header = () => {
  const [languageOptions, setLanguageOptions] = useState([]);
  const { data, loading, error } = useContext(DataContext);

  useEffect(() => {
    fetch('http://localhost:3001/select-option')
      .then((response) => response.json())
      .then((data) => {
        setLanguageOptions(data);
      })
      .catch((error) => console.error('Error fetching data', error));
  }, []);

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
          </div>
          <Dropdown />
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