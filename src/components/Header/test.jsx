import React, { useState } from 'react';
import './Header.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo/logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto ml-4rem">
            <Nav.Link href="/" className="fs-2">
              EA <span className="text-warning">Computers</span>
            </Nav.Link>
          </Nav>

          <Nav className="me-auto ml-4rem">
            <Nav.Link href="/shop" className="fs-5">
              {' '}
              Shop
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="/login" className="fs-5">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="fs-5">
              Register
            </Nav.Link>
            <Nav.Link href="/order-history" className="fs-5">
              My Orders
            </Nav.Link>
            <Nav.Link href="/cart" className="fs-5 cart">
              Cart <FaShoppingCart size={20} />
              <p>0</p>
            </Nav.Link>
          </Nav>
        </Container>
        <div className="menu-icon">
    
         <FiMenu size={28} onClick={toggleMenu} />{' '}
      </div>
      </Navbar>
      
    </>
  );
};

export default Header;
