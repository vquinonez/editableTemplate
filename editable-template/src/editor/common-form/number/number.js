import React, { Component } from 'react';
import './number.css';

function Number ( { label, secondLabel, className, onChange } ) {
  return (
    <div className={`form-container ${(className) ? className : ''}`}>
        <label>{label}</label>
        <input type="number" onChange={onChange}></input>
        <span>{secondLabel}</span>
    </div>
  );
}

export default Number;
