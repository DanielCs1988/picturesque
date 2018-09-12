import React from 'react';
import { NavLink } from "react-router-dom";
import './NavigationItem.css';

const navigationItem = ({ link, children }) => (
    <li className="navigation-item">
        <NavLink to={link}>{children}</NavLink>
    </li>
);

export default navigationItem;