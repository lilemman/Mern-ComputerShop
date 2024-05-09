// ProductItem.js

import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductItem = ({ product }) => {
  return (
    <Carousel.Item>
      <img className="d-block w-100" src={product.image} alt={product.name} />
      <Carousel.Caption>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button>Add To Cart</button>
      </Carousel.Caption>
    </Carousel.Item>
  );
};

export default ProductItem;
