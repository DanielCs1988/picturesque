import React from 'react';
import './Logo.css';
import logo from '../../../assets/logo.png';

const Logo = () => (
    <div className="logo">
        <img src={logo} alt="Supercharge Logo" />
    </div>
);

export default Logo;