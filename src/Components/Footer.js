// Footer.js

import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo">Bakery Name</h2>
          <p>
            Welcome to Bakery Name! We provide delicious baked goods made with love.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +1 123-456-7890</span>
            <span><i className="fas fa-envelope"></i> info@bakery.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Bakery Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
