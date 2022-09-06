import { Box, Typography,styled } from '@mui/material';
import React from 'react';
import Carousel from './Carousel/Carousel';


const Container = styled(Box)`
   margin-top: 200px;
   margin-bottom:200px;
   background-img : url(https://c4.wallpaperflare.com/wallpaper/686/492/997/simple-simple-background-wallpaper-preview.jpg)
`
// background-img: url(https://c4.wallpaperflare.com/wallpaper/686/492/997/simple-simple-background-wallpaper-preview.jpg)
// margin-top:500;
// margin-bottom:300;
// height:100vh
const OurAgents = () => {
    return (
        <Container >
            <Typography variant='h5' style={{textAlign:'center',color:'#2dbe6c',fontWeight:600,marginTop:20}}>OUR AGENTS</Typography>
            <Typography variant='h3' style={{textAlign:'center',fontWeight:600,color:'#2d2929',marginTop:20}}>Meet Our Excellent Agents</Typography>
            <Box style={{height:'100%'}}>
                <Carousel></Carousel>
            </Box>
        </Container>
    );
};

export default OurAgents;