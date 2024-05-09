import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const FooterMenu = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row>
          {/* Account Section */}
          <Col md={3}>
            <h5>Account</h5>
            <ul className="list-unstyled">
              <li><a href="#">Login</a></li>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">View Cart</a></li>
            </ul>
          </Col>

          {/* Customer Service Section */}
          <Col md={3}>
            <h5>Customer Service</h5>
            <ul className="list-unstyled">
              <li><a href="#">Rebate & Promotion</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </Col>

          {/* Company Profile Section */}
          <Col md={3}>
            <h5>Company Profile</h5>
            <ul className="list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Store Locations</a></li>
            </ul>
          </Col>

          {/* Social Media Section */}
          <Col md={3}>
            <h5>Social Media</h5>
            <div>
              <a href="#" className="text-light mr-3"><FaFacebook size={24} /></a>
              <a href="#" className="text-light"><FaInstagram size={24} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterMenu;
