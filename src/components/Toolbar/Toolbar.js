import React from 'react';
import './Toolbar.css';

const Toolbar = ({ onEdit, onDelete, onGoBack }) => (
    <div className="toolbar">
        <button className="btn" onClick={onEdit}>EDIT</button>
        <button className="btn" onClick={onDelete}>DELETE</button>
        <button className="btn" onClick={onGoBack}>BACK</button>
    </div>
);

export default Toolbar;