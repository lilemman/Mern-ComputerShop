import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import IndividualCard from '../Card/IndividualCard';
import { FaShippingFast, FaShoppingCart, FaWallet } from 'react-icons/fa';
const Cards = () => {
  const cardsData = [
    {
      icon: FaShippingFast,
      title: 'Free Shipping',
      description: 'We offer free shipping for orders over $150',
    },
    {
      icon: FaWallet,
      title: 'Secure Payment',
      description: 'Payments are secured',
    },
    {
      icon: FaShoppingCart,
      title: 'Quality Products',
      description: 'We sell quality products backed by our waranty program',
    },
  ];
  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-5 mb-5"
      // style={{ minHeight: '100vh' }}
    >
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index}>
            <IndividualCard
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
