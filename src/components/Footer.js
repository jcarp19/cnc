import React from "react";

const Footer = () => {
  // const getYear = () => {
  //   return theYear;
  // };
  let theYear = 2024;
  return (
    <footer className='footer'>
      <div className='footer__row'>
        <section className='footer__nav'>
          <p></p>
          <ul>
            <li>CNC Tooling Solution</li>
            <li>Contact Us</li>
            <li>Line Card</li>
          </ul>
        </section>
        <section className='footer__social'>
          <p>Follow Us</p>
          <span className='footer__social-icon'>F</span>
          <span className='footer__social-icon'>X</span>
          <span className='footer__social-icon'>Y</span>
          <span className='footer__social-icon'>In</span>
          <span className='footer__social-icon'>I</span>
        </section>
      </div>
      <div className='footer__row'>
        <span className='footer__copyright'>
          Copyright © {theYear} CNC Tooling Solutions, LLC. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
