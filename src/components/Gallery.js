import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDotCircle } from "@fortawesome/free-regular-svg-icons";

import galleryImage1 from "../_images/gallery-img-1.jpg";

const Gallery = () => {
  return (
    <>
      <div className='gallery'>
        <img className='gallery__image' src={galleryImage1} alt='CNC Tooling' />
      </div>
      <div className='gallery-nav'>
        <ul className='gallery-nav__list'>
          <li className='gallery-nav__item'>
            <FontAwesomeIcon icon={faDotCircle} />
          </li>
          <li className='gallery-nav__item'>
            <FontAwesomeIcon icon={faCircle} />
          </li>
          <li className='gallery-nav__item'>
            <FontAwesomeIcon icon={faCircle} />
          </li>
          <li className='gallery-nav__item'>
            <FontAwesomeIcon icon={faCircle} />
          </li>
          <li className='gallery-nav__item'>
            <FontAwesomeIcon icon={faCircle} />
          </li>
          <li className='gallery-nav__item'>
            <FontAwesomeIcon icon={faCircle} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Gallery;
