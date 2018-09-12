import React from 'react';
import { Link } from "react-router-dom";
import './Picture.css';

const Picture = ({ title, url, id }) => (
    <div className="picture">
        <Link to={`/pictures/${id}`}>
            <img src={url} alt={title} />
        </Link>
    </div>
);

export default Picture;