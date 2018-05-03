import React, { Component } from 'react';
import './header-extras.css';

function HeaderExtras () {
    const extras = [
        {herf: '#', label: 'Item'},
        {herf: '#', label: 'Item2'},
        {herf: '#', label: 'Item3'},
        {herf: '#', label: 'Item4'},
    ], extraElements = [];

    extras.forEach((extra, index) => {
        extraElements.push(<li key={index}><a href={extra.herf}>{extra.label}</a></li>)
    })

    return (
        <div className="extras">
            <ul>
                {extraElements}
            </ul>
        </div>
    );
}

export default HeaderExtras;
