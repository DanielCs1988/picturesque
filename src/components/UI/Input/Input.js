import React from 'react';
import './Input.css';

const Input = ({ label, ...props }) => (
    <div className="form-control">
        <label htmlFor={props.id}>{label}</label>
        <input type="text" {...props} />
    </div>
);

export default Input;