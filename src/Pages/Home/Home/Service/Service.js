import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const{id,name, img, description,price} = service;
   const Navigate = useNavigate();
    const navigateToServiceDetail = id => {
Navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigateToServiceDetail(id)} className='btn btn-primary'>Book - {name}</button>
        </div>
    );
};

export default Service;