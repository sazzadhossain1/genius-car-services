import React from 'react';
import Expert from '../Expert/Expert';

const experts = [
    {id: 1, name: 'will Smith', img:'https://media.istockphoto.com/photos/happy-customer-and-auto-mechanic-using-touchpad-in-a-workshop-picture-id1248187106?k=20&m=1248187106&s=612x612&w=0&h=rJnKi_0uL970R7ps8cauKxR9hfmp8Nu49BTrqueeOIg='},

    {id: 2, name: 'Chris Rook', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu83H1O_Wzn8Hx5sPoqH6sx9VTDzrzqEcm_ekJjGsT2Sqc6Us2AgAUn6cqfHbn0Jmven4&usqp=CAU'},

    {id: 3, name: 'Dwayne Rook', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUgBwFwFkxJUnFjZH47JHKyJcluYYoldl3NLcCMZeUzEgBYSR9CJYaHOgf9en4EPXQ6co&usqp=CAU'},


    {id: 4, name: 'Messy vai', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPywToX73b3j6-hjROIqyKvzyV8n7Q2pHVrk_jHN_Mn7TfL6mWuwCqDSsDO1WqboiQ8f0&usqp=CAU'},


    {id: 5, name: 'Boro mama', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vLT2kN6jP2CsIGtvdnOPPeIoT2Lk79S8WEMt67Yf6MvmxC4Ra8IpRJN8WUlAW9d6aYM&usqp=CAU'},


    {id: 6, name: 'Dada vai', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5x0GsYk0sGeaCcrbN3bM1RuipWpWYK8G7SRGYOT1WfbTG4G0aNauooOV4mLyMuLY_7IQ&usqp=CAU'}
]

const Experts = () => {
    return (
        <div id='experts' className='container'>
            <h1 className='text-primary text-center'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                    key={expert.id} expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;