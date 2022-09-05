import React from 'react';
// import Swiper from 'react-id-swiper';
import 'swiper/css'

import { Swiper, SwiperSlide } from "swiper/react";



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";



const Carousel = () => {
  return (
    <div className='' style={{height: '300px'}}>
      <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={"auto"}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
  </SwiperSlide>
</Swiper>
    </div>
  )
  
};

export default Carousel;