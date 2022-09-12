import { Box, Typography } from '@mui/material';
import React from 'react';

const Location = () => {
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
                 Location
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
                      Address: <Typography color="#808288"> Badda,Dhaka</Typography>
                 </Typography>
                 <Typography sx={{
                      display: "flex",
                      fontWeight: '500',
                      width: "33%",
                      marginBottom:"15px"

                 }}
                 >
                      Country: <Typography color="#808288">Bangladesh</Typography>
                 </Typography>
                 <Typography sx={{
                      display: "flex",
                      fontWeight: '500',
                      width: "33%",
                      marginBottom:"15px"

                 }}
                 >
                     Neighborhood : <Typography color="#808288"> Andersonville</Typography>
                 </Typography>
                 <Typography sx={{
                      display: "flex",
                      fontWeight: '500',
                      width: "33%",
                      marginBottom:"15px"

                 }}
                 >
                      State/county: <Typography color="#808288"> California</Typography>
                 </Typography>
                 <Typography sx={{
                      display: "flex",
                      fontWeight: '500',
                      width: "33%",
                      marginBottom:"15px"

                 }}
                 >
                      Zip/Postal Code: <Typography color="#808288"> 2403</Typography>
                 </Typography>
                 <Typography sx={{
                      display: "flex",
                      fontWeight: '500',
                      width: "33%",
                      marginBottom:"15px"

                 }}
                 >
                      City: <Typography color="#808288"> Brooklyn</Typography>
                 </Typography>
            </Box>
            {/* gooogle embed map starts here */}
            <Box sx={{
                width:'100%',
                paddingTop:2,
                height:{
                    xs:'300px',
                    sm:'300px',
                    md:'400px'
                }
            }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.8223928042!2d90.27919385980498!3d23.78088745600753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1662929185906!5m2!1sen!2sbd" width="100%" height="100%" style={{
                border:0,
                borderRadius:'10px',
                allowfullscreen:"",
                loading:"lazy",
                referrerpolicy:"no-referrer-when-downgrade"
            }}></iframe>
            </Box>
       </Box>
    );
};

export default Location;