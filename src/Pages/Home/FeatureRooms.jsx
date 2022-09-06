import { Box, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeatureRoom from './FeatureRoom';

const FeatureRooms = () => {
     const [features, setFeatures] = useState([])
     useEffect(() => {
          axios.get(`features.json`).then(data => setFeatures(data.data))
     }, [])
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
                         maxWidth: "50%",
                         margin: "0 auto"
                    }}
                    color="#93959e"
               >
                    Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt
                    labore dolore magna aliqua enim.
               </Typography>

               <Box sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginTop:"30px"
               }}>
                    {
                         features.map(feature => <FeatureRoom
                              key={feature.id}
                              feature={feature}
                         />)
                    }
               </Box>


          </Box>
     );
};

export default FeatureRooms;