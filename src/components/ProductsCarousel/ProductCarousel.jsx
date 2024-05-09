// ProductCarousel.js

import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ProductItem from './ProductItem';
import products from './data';

const ProductCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {products.map((product, idx) => (
        <ProductItem key={idx} product={product} />
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
