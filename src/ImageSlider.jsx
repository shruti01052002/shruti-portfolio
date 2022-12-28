import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react'
import image from "./Images";

const ImageSlider = () => {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const blan = '_blank';
  return (
    <>
      <div className="imgslider">
        <Slider {...settings} style={{ overflow: 'hidden' }}>
          {image.map((item) => (
            <div key={item.id}>
              <a href={item.lnk} target={blan} style={{ border: 'none' }}><img src={item.src} alt={item.alt} className='code_img' /></a>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default ImageSlider;