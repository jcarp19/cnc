import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faDotCircle } from "@fortawesome/free-regular-svg-icons";

import galleryImage1 from "../_images/gallery1.jpg";
import galleryImage2 from "../_images/gallery2.jpg";
import galleryImage3 from "../_images/gallery3.jpg";

const Gallery = () => {
  return (
    <>
      <div className='gallery'>
        <img
          className='gallery__image'
          src={galleryImage1}
          alt='CNC Tooling Gallery Slide 1'
        />
        <img
          className='gallery__image'
          src={galleryImage2}
          alt='CNC Tooling Gallery Slide 2'
        />
        <img
          className='gallery__image'
          src={galleryImage3}
          alt='CNC Tooling Gallery Slide 3'
        />
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
