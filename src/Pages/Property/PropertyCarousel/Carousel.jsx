import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "./styles.css";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";
import { Box } from "@mui/material";
import { NavigationButtonNext, NavigationButtonPrev } from "../../Home/HotProperty/NavigationButton";

export default function App() {
  return (
    <Swiper
      grabCursor={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
    >
      {/* navifation button for swipper slide */}
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: 'absolute',
        width: '100%',
        padding: '0 15px',
        top: '50%',
        zIndex: 1
      }}>
        <NavigationButtonPrev>
          <ArrowBackIosNewIcon />
        </NavigationButtonPrev>
        <NavigationButtonNext>
          <ArrowForwardIosIcon />
        </NavigationButtonNext>
      </Box>
      <SwiperSlide>
        <img src="https://i.ibb.co/FBvw55H/30-770x520.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/YRTd4yh/thumb-08-770x520.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co/6NKHhjW/dormitorio-infantil-muebles-mencor-1-770x520.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="http://azim.commonsupport.com/Realshed/assets/images/resource/property-details-1.jpg" />
      </SwiperSlide>
    </Swiper>
    // </>
  );
}
