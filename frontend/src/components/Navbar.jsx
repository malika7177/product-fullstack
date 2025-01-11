import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMoon } from 'react-icons/io5';
import { LuSun } from 'react-icons/lu';
import { FaRegPlusSquare } from "react-icons/fa";
import './navbar.css'

const Navbar = () => {
  const [colorMode, setColorMode] = useState('light');

  const toggleColorMode = () => {
    setColorMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-mode', colorMode === 'light');
  };

  return (
    <div className={`navbar ${colorMode}`}>
      <div className="container">
        <h1 className="logo">
          <Link to="/">Product Store 🛒</Link>
        </h1>
        <div className="actions">
          <Link to="/create">
            <button className="create-button">
              <FaRegPlusSquare size={25} />
            </button>
          </Link>
          <button onClick={toggleColorMode} className="toggle-button">
            {colorMode === 'light' ? <IoMoon /> : <LuSun size={25} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;