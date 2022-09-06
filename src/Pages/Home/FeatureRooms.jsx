import { Box, Typography } from '@mui/material';
import React from 'react';

const FeatureRooms = () => {
     return (
          <Box sx={{
               backgroundColor: "#e5f8ed",
               textAlign: "center",
               fontFamily: "'Rubik', sans-serif",
               padding: "100px 0px 120px 0px"
          }}>
               <Typography
                    sx={{
                         fontSize: {
                              xs: "38px",
                              sm: "45px",
                              md: "18px",
                         },
                         textTransform: "uppercase",
                         fontFamily: "'Rubik', sans-serif",
                         fontWeight: "500"

                    }}
                    fontWeight="bold"
                    color="#2dbe6c"
               >
                    Features
               </Typography>
               <Typography
                    sx={{
                         fontWeight: "500",
                         fontFamily: "'Rubik', sans-serif",
                         fontSize: {
                              xs: "38px",
                              sm: "45px",
                              md: "40px",
                         },
                    }}
                    fontWeight="bold"
               >
                    Featured Property
               </Typography>

               <Typography
                    sx={{
                      maxWidth:"50%",
                      margin:"0 auto"  
                    }}
                    color="#93959e"
               >
                    Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt
                    labore dolore magna aliqua enim.
               </Typography>


          </Box>
     );
};

export default FeatureRooms;