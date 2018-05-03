import React, { Component } from 'react';
import './header.css';

import HeaderExtras from './header-extras/header-extras'

function Header () {
  return (
    <header className="header">
      <h1>Titulo</h1>
      <HeaderExtras></HeaderExtras>
    </header>
  );
}

export default Header;
