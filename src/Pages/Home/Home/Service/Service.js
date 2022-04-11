import React from 'react';

const Service = ({service}) => {
    const{name, img, description,price} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;