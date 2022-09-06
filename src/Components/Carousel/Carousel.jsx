import React from 'react';
// import Swiper from 'react-id-swiper';
import 'swiper/css'

import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Card from './Card'



// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import {Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Box } from '@mui/material';



const Carousel = () => {
  
  return (
    <div className='' style={{height: '300px'}}>
      <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={1}
  // pagination={true}

  coverflowEffect={{
    rotate: 0,
    // rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 2,
    // modifier: 1,
    slideShadows: true,
  }}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}

  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }}
  loop={true}
  navigation={true}
  // pagination={true}
  modules={[Autoplay,EffectCoverflow, Pagination]}
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
    {({ isActive }) => (
      <Box>Current slide is {isActive ? 'active' : 'not active'}</Box>
    )}
  </SwiperSlide>
</Swiper>
    </div>
  )
  
};

export default Carousel;