import React, { Component } from 'react';
import './toggle-editor.css';

function ToggleEditor ({text, click, style}) {
  return (
    <button className="toggle-editor" onClick={click} style = { style }>
        <h3>{text}</h3>
    </button>
  );
}

export default ToggleEditor;
