import React, { useState } from 'react';
import './Header.scss';
import Logo from '../../assets/logo/logo.png';
import { Link, NavLink } from 'react-router-dom';

// const activeLink=({isActive})=>(isActive ? `${styles.active}` : "")

const Header = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('Shop');

  const hadleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  return (
    <header>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/shop"
                  className={activeMenuItem === 'Shop' ? 'active' : ''}
                  onClick={() => hadleMenuItemClick('Home')}
                />
                Shop
              </li>
            </ul>
            <div className="header__right">
              <span className="links">
                <NavLink to="/login" className={activeMenuItem === 'Login' ? 'active' : ''}
                  onClick={() => hadleMenuItemClick('Login')}>
                  Login
                </NavLink>
                <NavLink to="/register" className={activeMenuItem === 'Register' ? 'active' : ''}
                  onClick={() => hadleMenuItemClick('Register')}>
                  Register
                </NavLink>
                <NavLink
                  to="/order-history"
                  className={activeMenuItem === 'order-history' ? 'active' : ''}
                  onClick={() => hadleMenuItemClick('order-history')}
                >
                  My Order
                </NavLink>
              </span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
