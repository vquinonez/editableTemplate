import React, { Component } from 'react';
import './colors.css';

function Color ( {name, color, className} ) {
  return (
    <div className={`${className} color-container`}>
        <div className="color" style={{backgroundColor: color}}>
            <footer>
                <h3>{name}</h3>
            </footer>
        </div>
    </div>
  );
}

export default Color;
