import {  Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PropertyDescription = () => {
     return (
          <Box sx={{
               padding: "43px 30px",
               marginBottom: "30px",
               backgroundColor: "#ffffff",
               boxShadow: "0 10px 30px 0px rgb(0 0 0 / 10%)",
               borderRadius: "10px",
          }}>
               <Typography
                    sx={{
                         fontWeight: '500',
                         fontFamily: "'Rubik', sans-serif",
                         borderBottom: "2px solid #e5e7ec",
                         paddingBottom: "10px",
                         fontSize: {
                              md: '22px',
                         },
                    }}
               // fontWeight="bold"
               >
                    Property Desciption
               </Typography>
               <Typography sx={{
                    borderTop: "2px solid #e5e7ec",
                    paddingTop: "10px",
                    marginTop: "3px",
               }}
                    variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing sed eiusm tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud exercitation laboris nisi ut aliquip ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur occaecat, <br />

                    Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim est laborum. Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium totam rem aperiam.
               </Typography>
          </Box>

     );
};

export default PropertyDescription;