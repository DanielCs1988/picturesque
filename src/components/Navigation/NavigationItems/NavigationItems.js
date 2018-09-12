import React from 'react';
import './NavigationItems.css';
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
    <ul className="navigation-items">
        <NavigationItem link="/home">Home</NavigationItem>
        <NavigationItem link="/pictures">Pictures</NavigationItem>
    </ul>
);

export default navigationItems;