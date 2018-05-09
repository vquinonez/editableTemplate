import React, { Component } from 'react';
import './color.css';

function Color ( {className, label, name, onChange, hex} ) {
 
    return (
        <div className={`form-container color ${className}`}>
            <label>{label}</label>
            <div className="color-form">
                <input name={name} type="text" onChange={onChange}></input>
                <div className="placeholder" style={{backgroundColor: hex}}></div>
            </div>
        </div>
    );
}

export default Color;
