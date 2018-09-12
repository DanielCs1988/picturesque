import React from 'react';
import Logo from "./Logo/Logo";
import './Navigation.css';
import NavigationItems from "./NavigationItems/NavigationItems";

const Navigation = () => (
    <div className="navbar">
        <div>
            <Logo />
            <span>PICTURESQUE</span>
        </div>
        <NavigationItems />
    </div>
);

export default Navigation;