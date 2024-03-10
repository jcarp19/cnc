import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import galleryImage1 from "../_images/slides/slide1.jpg";
import galleryImage2 from "../_images/slides/slide2.jpg";
import galleryImage3 from "../_images/slides/slide3.jpg";
import galleryImage4 from "../_images/slides/slide4.jpg";
import galleryImage5 from "../_images/slides/slide5.jpg";
import galleryImage6 from "../_images/slides/slide6.jpg";
import galleryImage7 from "../_images/slides/slide7.jpg";
import galleryImage8 from "../_images/slides/slide8.jpg";
import galleryImage9 from "../_images/slides/slide9.jpg";
import galleryImage10 from "../_images/slides/slide10.jpg";
import galleryImage11 from "../_images/slides/slide11.jpg";
import galleryImage12 from "../_images/slides/slide12.jpg";

export default function Gallery() {
  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={galleryImage1} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage2} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage3} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage4} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage5} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage6} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage7} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage8} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage9} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage10} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage11} alt='Slide' className='slide' />
      </div>
      <div>
        <img src={galleryImage12} alt='Slide' className='slide' />
      </div>
    </Slider>
  );
}

// const Gallery = () => {

// <Slider {...settings}>
//   <div>
//     <img src={galleryImage1} alt='Gallery Slide 1' />
//   </div>
//   <div>
//     <img src={galleryImage2} alt='Gallery Slide 2' />
//   </div>
//   <div>
//     <img src={galleryImage3} alt='Gallery Slide 3' />
//   </div>
//   <div>
//     <img src={galleryImage4} alt='Gallery Slide 4' />
//   </div>
//   <div>
//     <img src={galleryImage5} alt='Gallery Slide 5' />
//   </div>
//   <div>
//     <img src={galleryImage6} alt='Gallery Slide 6' />
//   </div>
//   <div>
//     <img src={galleryImage7} alt='Gallery Slide 7' />
//   </div>
//   <div>
//     <img src={galleryImage8} alt='Gallery Slide 8' />
//   </div>
//   <div>
//     <img src={galleryImage9} alt='Gallery Slide 9' />
//   </div>
//   <div>
//     <img src={galleryImage10} alt='Gallery Slide 10' />
//   </div>
//   <div>
//     <img src={galleryImage11} alt='Gallery Slide 11' />
//   </div>
//   <div>
//     <img src={galleryImage12} alt='Gallery Slide 12' />
//   </div>
// </Slider>
//   );
// };

// export default Gallery;
