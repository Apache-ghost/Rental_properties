import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="about-us">
          <h3>About Us</h3>
          <p>
            Our house searching app is designed to make the process of finding
            your dream home easier and more efficient. With our powerful search
            tools and comprehensive listings, you can discover the perfect
            property that meets your needs and budget.
          </p>
        </div>
        <div className="location">
          <h3>Location</h3>
          <p>
            Our headquarters is located at 123 Main Street, Anytown USA. We
            operate nationwide, with a focus on providing the best service to
            our customers across the country.
          </p>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p>+237 677880739</p>
          <p>housesystem@gmail.com</p>
        </div>
        <div className="follow-us">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
</div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2023 House Searching App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;