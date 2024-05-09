import React from 'react';
import './FooterLinks.scss';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo/logo.png'
const FooterLinks = () => {
  return (
    <>
      <section className="contact">
        <div className="contact__container">
          <div className="contact__icon">
            <FaFacebook className="i" />
            <FaTwitter className="i" />
            <FaInstagram className="i" />
          </div>
          <h2>Lets Talk?</h2>
          <Link to="/">
            <p className="btn btn-dark">Make an enquire</p>
          </Link>
        </div>
      </section>
      <section className='footer-section'>
        <div className='container footer'>

        </div>
      </section>
    </>
  );
};

export default FooterLinks;
