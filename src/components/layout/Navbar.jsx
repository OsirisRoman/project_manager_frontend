import React from 'react';

const Navbar = () => {
  return (
    <header className='app-header'>
      <p className='nombre-usuario'>
        Hola <span>Osiris Román</span>
      </p>
      <nav className='nav-principal'>
        <a href='#!'>Log Out</a>
      </nav>
    </header>
  );
};

export default Navbar;
