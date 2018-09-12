import React from 'react';
import {Link} from "react-router-dom";
import './CreatePictureButton.css';

const CreatePictureButton = () => (
    <Link to="/pictures/new">
        <button className="create-picture-btn">+</button>
    </Link>
);

export default CreatePictureButton;