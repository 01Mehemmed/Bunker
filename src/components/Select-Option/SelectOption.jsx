import React from 'react'
import './So.css'
import { useState } from 'react';

const SelectOption = ({ languages }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Az');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-button">
        {selectedLanguage} <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {languages
            .filter((language) => language !== selectedLanguage)
            .map((language) => (
              <li key={language.id} onClick={() => selectLanguage(language.name)}>
                {language.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};


export default SelectOption