import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({pac}) => {
    const { _id, name, img, description, location, duration, purchase, reviews} = pac;
    return (
        <Card className = "mx-4 rounded-3" style={{ width: '22rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-xl-start">
         <p>{location}</p>
         <h5>{name}</h5>
         <h5>Purchase: ${purchase}</h5>
         <p>Famous for: {description}</p>
         <small>Duration: {duration} </small>
         <p> Reviews:{reviews}</p>
         <br />

          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
          <Link to={`/placeorder/${_id}`}><Button variant="primary">Book Now</Button></Link>
        </Card.Body>
      </Card>
    );
};

export default Package;