import React, { Component } from 'react';
import './section.css';

function Section ( {title, children, className} ) {
  return (
    <section className={`${className}`}>
        <header>
            <h1>{title}</h1>
        </header>
        {children}
    </section>
  );
}

export default Section;
