import { Box, Button, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FeatureRoom from './FeatureRoom';

const FeatureRooms = () => {
     const roomStore = useSelector((state) => state.room).rooms;
     const rooms = [...roomStore]
     const navigate = useNavigate()
     return (
          <Box sx={{
               backgroundColor: "#e5f8ed",
               textAlign: "center",
               fontFamily: "'Rubik', sans-serif",
               padding: "80px 0px 80px 0px "
          }}>
               <Typography
                    sx={{
                         fontSize: {
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
                              xs: "25px",
                              sm: "30px",
                              md: "40px",
                         },
                    }}
                    fontWeight="bold"
               >
                    Featured Room
               </Typography>

               <Typography
                    sx={{
                         maxWidth: {
                              xs: "80%",
                              sm: "70%",
                              md: "50%"
                         },
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
                    marginTop: "30px"
               }}>
                    {
                         rooms.reverse().slice(0, 3).map(room => <FeatureRoom
                              key={room.id}
                              room={room}
                         />)
                    }
               </Box>

               <Button
                    onClick={() => navigate(`/allRooms`)}
                    sx={{
                         color: "white",
                         border: "1px solid #2dbe6c",
                         background: "#2dbe6c",
                         mt: 1,
                         padding: "9px 0px",
                         fontSize: "15px",
                         width: "160px",
                         boxShadow: "inset 0 0 0 0 white",
                         transition: "ease-out 0.5s",
                         "&:hover": {
                              color: "#2dbe6c",
                              boxShadow: "inset 160px 0 0 0 white",
                         }

                    }} >See All Rooms
               </Button>
          </Box>
     );
};

export default FeatureRooms;