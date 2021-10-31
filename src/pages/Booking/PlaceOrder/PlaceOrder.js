import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import photo from '../../../images/Packages/photo.jpg'

const PlaceOrder = () => {
    const { serviceId} = useParams();
    const  [service, setService] = useState({})


    useEffect(() =>{
       fetch(`http://localhost:3000/services/${serviceId}`)
      .then (res => res.json())
      .then(data => setService(data))
    }, [])
    return (
        <div className="row my-5">
            <div className="col-lg-4">
                <img src={service.img} alt="" />
                <h3>{service.name}</h3>
                <p>Location: {service.location}</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                 <h6>Reviews <br />{service.reviews}</h6>
                 <hr />
                
                 <h6>Vacation style <br />Holiday Type</h6>
                 <hr />
                
                 <h6>Duration: {service.duration}</h6>
                 <hr />
                 
                 <h6>Purchase: ${service.purchase}</h6>
                </div>
                <div className="col-lg-5 col-md-6 col-sm-12 text-xl-start ">
                  <p>{service.description}.  If a man stays in one place for a long time, he becomes monotonous. Travelling removes our monotony and gives pleasure. It also broadens our.Traveling fosters a medium to build human connections with one another by learning about culture, food, new sites, music, and the way people live their day to day lives in different parts of the world. It's the best on-site learning a person can get. The internet can only explain so much about a place....</p>
                </div>
                <div className="row m-5">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-xl-start">
                        <h2 className="my-3">The tour package inclusions and exclusions at a glance</h2>
                        <h5>What is included in this tour?</h5>
                        <p>Items that are included in the cost of tour price.</p>

                        <ul className="my-3  text-xl-start">
                            <li>All breakfasts, lunches and dinners & dining</li>
                            <li>All accommodation including tea houses en route</li>
                            <li>All transportation including taxis and coaches</li>
                            <li>Flights from Heathrow if booked inc. of flight</li>
                            <li>Tour and trekking guide for entire journey</li>
                        </ul>
                       </div>
                       <div className="col-lg-6 col-md-6 col-sm-12">
                <img src={photo} alt="" />
                </div>
                       </div>
                
            </div>
    );
};

export default PlaceOrder;

//https://themes.waituk.com/entrada-modern/