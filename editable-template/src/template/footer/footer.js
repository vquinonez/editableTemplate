import React, { Component } from 'react';
import './footer.css';

function Footer ({children}) {
  return (
    <footer className="footer white-txt">
        {children}
    </footer>
  );
}

export default Footer;
