import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

import galleryImage1 from "../_images/slide1.jpg";
import galleryImage2 from "../_images/slide2.jpg";
import galleryImage3 from "../_images/slide3.jpg";
import galleryImage4 from "../_images/slide4.jpg";
import galleryImage5 from "../_images/slide5.jpg";
import showcase from "../_images/fowler.jpg";

const Gallery = () => {
  return (
    <>
      <div className='slides'>
        <div className='slides__showcase'>
          <img src={showcase} alt='Product Showcase' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage1} alt='CNC Tooling Slide' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage2} alt='CNC Tooling Slide' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage3} alt='CNC Tooling Slide' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage4} alt='CNC Tooling Slide' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage5} alt='CNC Tooling Slide' />
        </div>
      </div>
      {/* <div className='gallery-nav'>
        <div className='gallery-nav__dot'></div>
        <div className='gallery-nav__dot'></div>
        <div className='gallery-nav__dot'></div>
      </div> */}
    </>
  );
};

export default Gallery;
