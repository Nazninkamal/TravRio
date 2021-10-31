import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:3000/services')
        .then(res => res.json())
        .then(data => setPackages(data));

    }, [])
    
    return (
        <div id="packages">
            <h5 className="mt-5">Popular Travel Packages</h5>
            <h2 className="mb-5">Featured Travel Packages</h2>
            <div className="service-container">
            { 
            packages.map(pac => <Package
             key = {pac.id}
             pac= {pac}
             
             ></Package>)
             }
            </div>
            
        </div>
    );
};

export default Packages;