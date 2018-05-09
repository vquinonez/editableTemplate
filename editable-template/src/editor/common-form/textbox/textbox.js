import React, { Component } from 'react';
import './textbox.css';

function TextBox ( { label, className, onChange } ) {
  return (
    <div className={`form-container ${(className) ? className : ''}`}>
        <label>{label}</label>
        <input type="text" onChange={onChange}></input>
    </div>
  );
}

export default TextBox;
