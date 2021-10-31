import React from 'react';

import { Link } from 'react-router-dom';

const Discount = ({discount}) => {
    const {name, img, price} = discount;
    return (
        <div className="col-lg-4  mb-5">
            <img className="img" src={img} alt="" />
            <h5>{name}</h5>
            <h6>Purchase: ${price}</h6>
            <Link to={`/duscountdetails/$`}> <button className="btn btn-warning">Check </button></Link>
        

            
        </div>
    );
};

export default Discount;