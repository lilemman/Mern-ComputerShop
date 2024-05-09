import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import './Header.scss'; // Import custom CSS file

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container fluid>
        {/* Brand (EA Computers - Left) */}
        <Navbar.Brand href="/" className="fs-1 mx-5">
          EA <span className="text-warning">Computers</span>
        </Navbar.Brand>

        {/* Toggle button for mobile menu */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={toggleMenu}
        >
          <FiMenu size={28} />
        </Navbar.Toggle>

        {/* Collapsible content for the navbar */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={menuOpen ? 'show' : ''}
        >
          {/* Nav links (Shop - Center) */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/shop" className="fs-1 me-3">
              Shop
            </Nav.Link>
          </Nav>

          {/* Additional Nav links (Login, Register, My Orders, Cart - Right) */}
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/login" className="fs-5 me-3">
              Login
            </Nav.Link>
            <Nav.Link href="/register" className="fs-5 me-3">
              Register
            </Nav.Link>
            <Nav.Link href="/order-history" className="fs-5 me-3">
              My Orders
            </Nav.Link>
            <Nav.Link href="/cart" className="fs-5 cart me-3">
              Cart <FaShoppingCart size={20} />
              <p className="mb-0">0</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
