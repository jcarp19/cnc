import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle } from "@fortawesome/free-solid-svg-icons";

import galleryImage1 from "../_images/gallery1.jpg";
import galleryImage2 from "../_images/gallery2.jpg";
import galleryImage3 from "../_images/gallery3.jpg";

const Gallery = () => {
  return (
    <>
      <div className='slides'>
        <div className='slides__slide'>
          <img src={galleryImage1} alt='CNC Tooling Slide' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage2} alt='CNC Tooling Slide' />
        </div>
        <div className='slides__slide'>
          <img src={galleryImage3} alt='CNC Tooling Slide' />
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
