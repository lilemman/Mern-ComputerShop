import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../assets/images/Banner1.png';


const Slider = () => {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          <Link>
            <img className="d-block w-100  " src={banner1} alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link>
            <img className="d-block w-100" src={banner1} alt="Second slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link>
            <img className="d-block w-100" src={banner1} alt="Third slide" />
          </Link>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
