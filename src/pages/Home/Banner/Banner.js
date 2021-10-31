import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.png'
import banner2 from '../../../images/banner/banner-2.png'
import banner3 from '../../../images/banner/banner-3.png'

const Banner = () => {
    return (
        <>
           <Carousel>
               
  <Carousel.Item>
    <img
      className="d-block w-100 h-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
    <h2 className="font">Make your tours awesome</h2>
    <h1 className="font">You Have A Destination, We Have A Place</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2 className="font">Make your tours awesome</h2>
    <h1 className="font">You Have A Destination, We Have A Place</h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 className="font">Make your tours awesome</h2>
    <h1 className="font">You Have A Destination, We Have A Place</h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
    );
};

export default Banner;