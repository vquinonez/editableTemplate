import React, { Component } from 'react';
import './button.css';

function Button ( {children, color, colorText, inverted, className} ) {
  return (
    <button className={`
        ${(className) ? className : ''} 
        color-container 
        ${(inverted) ? 'inverted' : ''}
    `} style={ (!inverted) ? {backgroundColor: color , color: colorText} : 
                            {backgroundColor: 'trasparent', color: color, borderColor: color}}>
        {children}
    </button>
  );
}

export default Button;
