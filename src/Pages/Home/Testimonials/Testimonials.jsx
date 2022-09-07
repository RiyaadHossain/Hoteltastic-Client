import { Box, Typography, } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Autoplay,Navigation,EffectCoverflow, Pagination } from "swiper";
import Card from '../../../Components/Carousel/Card';
import Testimonial from './Testimonial';


const Testimonials = () => {
    return (
        <Box sx={{
            background:'#e5f8ed',
                padding:{
                    xs:"40px 10px",
                    sm:"60px 20px",
                    md:"100px 80px"
            }}}>
            <Typography sx={{textAlign:'center',color:'#2dbe6c',fontWeight:'bold',marginBottom:'10px'}}>TESTIMONIALS</Typography>
            <Typography variant='h4' sx={{textAlign:'center',fontWeight:'bold'}}>What They Say About Us</Typography>
            {/* carousel starts here */}
            <Box>
            <Swiper 
             spaceBetween={30}
             centeredSlides={true}
             autoplay={{
               delay: 2500,
               disableOnInteraction: false,
             }}
             pagination={{
               clickable: true,
             }}
             navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
        // effect={"coverflow"}
        // grabCursor={true}
        // centeredSlides={true}
        // slidesPerView={"auto"}
        // coverflowEffect={{
        //   rotate: 50,
        //   stretch: 0,
        //   depth: 100,
        //   modifier: 1,
        //   slideShadows: true,
        // }}
        // breakpoints={{
        //     640: {
        //       slidesPerView: 1,
        //       spaceBetween: 50,
        //     },
        //     768: {
        //       slidesPerView: 2,
        //       spaceBetween: 40,
        //     },
        //     1024: {
        //       slidesPerView: 3,
        //       spaceBetween: 50,
        //     }
        // }}
        // pagination={true}
        // modules={[EffectCoverflow, Pagination]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial></Testimonial>
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial></Testimonial>
        </SwiperSlide>

      </Swiper>
            </Box>
        </Box>
    );
};

export default Testimonials;