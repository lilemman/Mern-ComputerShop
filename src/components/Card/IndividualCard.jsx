import React from 'react';
import { Card } from 'react-bootstrap';
import { IconContext } from 'react-icons';
const IndividualCard = ({ icon, title, description }) => {
  const IconComponent = icon;
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center mb-5 mt-2" >
          <IconContext.Provider value={{ size: '6.5rem', className: 'mr-2' }}>
            <IconComponent />
          </IconContext.Provider>
          <Card.Title>{title}</Card.Title>
        </div>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default IndividualCard;
