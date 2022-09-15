import { Button } from "@mui/material";
import React from "react";
import { useSwiper } from "swiper/react";

// navigation button for swipper js next button
export const NavigationButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Button
      onClick={() => swiper.slideNext()}
      sx={{
        // border:'1px solid #93959e' ,
        color: "#fff",
        background: "#2dbe6c",
        padding: "15px 6px",
        // borderRadius:'50%',
        // marginRight: "8px",
        boxShadow: "inset 0 0 0 0 #000",
        transition: "ease-out 0.3s",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          color: "#fff",
          boxShadow: "inset 130px 0 0 0 #000",
          border: "2px solid #2dbe6c",
        },
      }}
    >
      {children}
    </Button>
  );
};

// navigatioon button foor swiiper previous buttoon
export const NavigationButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <Button
      onClick={() => swiper.slidePrev()}
      sx={{
        // border:'1px solid #93959e' ,
        color: "#fff",
        background: "#2dbe6c",
        padding: "15px 6px",
        marginRight: "10px",
        boxShadow: "inset 0 0 0 0 #000",
        transition: "ease-out 0.3s",
        borderRadius: "5px",
        cursor: "pointer",
        "&:hover": {
          color: "#fff",
          boxShadow: "inset 130px 0 0 0 #000",
          border: "2px solid #2dbe6c",
        },
      }}
    >
      {children}
    </Button>
  );
};
