import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  let currentDate = new Date();
  let theYear = currentDate.getFullYear();
  return (
    <footer className='footer'>
      <div className='footer__row'>
        <section className='footer__nav'>
          <p></p>
          <ul className='footer__nav-list'>
            <li className='footer__nav-item'>
              <Link to='/' className='nav__link--white'>
                CNC Tooling Solution
              </Link>
            </li>
            <li className='footer__nav-item'>
              <Link to='contact' className='nav__link--white'>
                Contact Us
              </Link>
            </li>
            <li className='footer__nav-item'>
              <Link to='line-card' className='nav__link--white'>
                Line Card
              </Link>
            </li>
          </ul>
        </section>
        <section className='footer__social'>
          <p>Follow Us</p>
          <span className='footer__social-icon'>
            <Link to='' className='nav__link--white'>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </span>
          <span className='footer__social-icon'>
            <Link to='' className='nav__link--white'>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>
          </span>
          <span className='footer__social-icon'>
            <Link to='' className='nav__link--white'>
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </span>
          <span className='footer__social-icon'>
            <Link
              to='https://www.linkedin.com/company/cnc-tooling-solutions-llc/'
              className='nav__link--white'
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </Link>
          </span>
          <span className='footer__social-icon'>
            <Link to='' className='nav__link--white'>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </span>
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
