import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { serviceId} = useParams();

    useEffect(() =>{
       fetch(`http://localhost:3001/placeorder/serviceId`)
    }, [])
    return (
        <div>
            <h2>this is: {serviceId}</h2>
        </div>
    );
};

export default PlaceOrder;

//https://themes.waituk.com/entrada-modern/