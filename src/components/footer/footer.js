import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h3>Contact Us</h3>
      <div className="footer__content">
        <div className="footer__item">
          <h4>Address</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer__item">
          <h4>Phone</h4>
          <p>
            <a href="tel:+79267506681">+79267506681</a>
          </p>
        </div>
        <div className="footer__item">
          <h4>E-mail</h4>
          <p>
            <a href="mailto:mail@example.com">mail@example.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;