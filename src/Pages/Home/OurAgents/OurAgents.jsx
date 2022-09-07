import { Box, Typography,styled } from '@mui/material';
import React from 'react';
import Carousel from './Carousel/Carousel';


// const Container = styled(Box)`
//    margin-top: 100px;
//    margin-bottom:100px;
//    background:'#e5f8ed'
// `
const OurAgents = () => {
    return (
        <Box sx={{
            background:'#e5f8ed',
            padding:{
                xs:"40px 10px",
                sm:"60px 20px",
                md:"100px 80px"
        }
        }}>
            <Typography variant='h5' style={{textAlign:'center',color:'#2dbe6c',fontWeight:600,marginTop:20}}>OUR AGENTS</Typography>
            <Typography variant='h3' style={{textAlign:'center',fontWeight:600,color:'#2d2929',marginTop:20}}>Meet Our Excellent Agents</Typography>
            <Box style={{height:'100%'}}>
                <Carousel></Carousel>
            </Box>
        </Box>
    );
};

export default OurAgents;