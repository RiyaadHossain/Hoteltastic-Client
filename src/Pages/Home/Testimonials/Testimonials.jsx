import { Box, Typography, } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.module.css";

// import required modules
import { Autoplay,Navigation,Pagination } from "swiper";
// import Card from '../OurAgents/Carousel/Card';
import Testimonial from './Testimonial';


const Testimonials = () => {
    return (
        <Box sx={{
            background:'#e5f8ed',
                padding:{
                    xs:"40px 10px",
                    sm:"60px 20px",
                    md:"80px 80px"
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
             loop={true}
            //  pagination={{
            //    clickable: true,
            //  }}
             navigation={true}
             modules={[Autoplay, Pagination, Navigation]}
             className="mySwiper"
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