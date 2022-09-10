import { Box, Typography} from '@mui/material';
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
            textAlign: "center",
               fontFamily: "'Rubik', sans-serif",
            //    padding: "80px 0px 120px 0px"
            padding:{
                xs:"40px 10px",
                sm:"60px 20px",
                md:"80px 80px"
        }
        }}>
            <Typography variant='h6' sx={{textAlign:'center',color:'#2dbe6c',fontWeight:600,}}>OUR AGENTS</Typography>
            <Typography variant='h4' sx={{textAlign:'center',fontWeight:600,color:'#2d2929',fontFamily: "'Rubik', sans-serif",marginBottom:2}}>Meet Our Excellent Agents</Typography>
            <Typography  sx={{
                textAlign:'center',
                mx:'auto',
                color:"#93959e",
                width:{
                    xs:'100%',
                    sm:'97%',
                    md:'50%',
                    lg:'50%'
                }
            }}>Lorem ipsum dolor sit amet consectetur adipisicing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.</Typography>
            <Box style={{height:'100%'}}>
                <Carousel></Carousel>
            </Box>
        </Box>
    );
};

export default OurAgents;