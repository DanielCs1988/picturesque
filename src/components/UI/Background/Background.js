import React from 'react';

const Background = ({ from, to }) => (
    <div style={
        {
            zIndex: '-1',
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: `linear-gradient(${from}, ${to})`
        }
    } />
);

export default Background;