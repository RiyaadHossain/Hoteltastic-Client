import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PropertyDetails = () => {
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
               >
                    Property Details
               </Typography>
               <Box sx={{
                    borderTop: "2px solid #e5e7ec",
                    paddingTop: "20px",
                    marginTop: "3px",
                    display: "flex",
                    flexWrap: "wrap"

               }}>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Property ID: <Typography color="#808288"> ZOP251C</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Rooms: <Typography color="#808288"> 06</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Garage Size: <Typography color="#808288"> 200 Sq Ft</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Property Price: <Typography color="#808288"> $30000</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Bedrooms: <Typography color="#808288"> 04</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Year Built: <Typography color="#808288"> 01 April, 2019</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Property Type: <Typography color="#808288"> Apertment</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Bathrooms: <Typography color="#808288"> 03</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Property Status: <Typography color="#808288"> For Sale</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Property Size:  <Typography color="#808288"> 2024 Sq Ft</Typography>
                    </Typography>
                    <Typography sx={{
                         display: "flex",
                         fontWeight: '500',
                         width: "33%",
                         marginBottom:"15px"

                    }}
                    >
                         Garage:  <Typography color="#808288"> 01</Typography>
                    </Typography>
               </Box>
          </Box>

     );
};

export default PropertyDetails;