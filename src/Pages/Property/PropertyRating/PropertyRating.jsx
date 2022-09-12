import { Box, Rating, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PropertyRating = () => {
     const [reviews, setReviews] = useState([])
     useEffect(() => {
          axios.get(`userReviews.json`).then(data => setReviews(data.data))
     }, [])
     // console.log(reviews);
     return (
          <Box sx={{
               padding: "22px 30px",
               // marginBottom: "30px",
               backgroundColor: "#ffffff",
               boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
               borderRadius: "10px",
          }}>
               {
                    reviews.map(review => {
                         return (
                              <Box sx={{
                                   display: "flex",
                                   color: "#93959e",
                                   py: "15px",
                                   borderTop:"1px solid #e5e7ec",
                                   ":first-child":{
                                   borderTop:"none",
                                   }
                              }}>
                                   <img style={{
                                        height: "40px",
                                        width: "40px",
                                        borderRadius: "50%",
                                        marginRight: "12px"
                                   }} src={review.userImg} alt="" />
                                   <Box >
                                        <Box sx={{
                                             display: "flex",
                                             alignItems:"center"
                                        }}>
                                             <Typography
                                                  sx={{
                                                       fontSize: {
                                                            md: "17px",
                                                       },
                                                       fontFamily: "'Rubik', sans-serif",
                                                       // fontWeight: "500",
                                                       mr:"10px",
                                                       color:"#626263"

                                                  }}
                                             >
                                                  {review.userName}
                                             </Typography>
                                             {/* rating */}
                                             <Rating name="half-rating-read" defaultValue={review.rate} precision={0.5} size="small" readOnly />
                                        </Box>
                                        <Typography
                                             sx={{
                                                  fontSize: {
                                                       // md: "18px",
                                                  },
                                                  fontFamily: "'Rubik', sans-serif",

                                             }}
                                        >
                                             {review.comment}
                                        </Typography>
                                   </Box>

                              </Box>
                         )
                    })
               }
          </Box>
     );
};

export default PropertyRating;