import React from 'react';
import sleeping from '../../../image/sleeping.jpg';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='div-container'>
            <h1>This page is not available</h1>
            <h3>404</h3>
            <img className='size' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;