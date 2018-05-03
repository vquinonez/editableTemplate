import React, { Component } from 'react';
import './hero.css';

function Hero ( {children} ) {
  return (
    <header className="hero white-txt">
      {children}
    </header>
  );
}

export default Hero;
