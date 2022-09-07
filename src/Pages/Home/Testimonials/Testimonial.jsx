import { Box, Typography } from '@mui/material';
import React from 'react';

const Testimonial = () => {
    return (
        <Box sx={{width:'100%'}}>
            <Box sx={{
                width : '100px',
                display : 'flex',
                justifyContent : 'center',
                mx : 'auto',
                marginBottom:'25px'
            }}><img style={{width:'100%',background:'inherit',borderRadius:'40%'}} src="http://azim.commonsupport.com/Realshed/assets/images/resource/testimonial-1.jpg" alt="" /></Box>
            <Box>
                <Typography sx={{
                    textAlign:'center',
                    mx:'auto',
                    width:'50%',
                    lineHeight:'2',
                    fontWeight:'600',
                    fontSize:{
                        xs:'14px',
                        md:'18px',
                    }
                }}>Our goal each day is to ensure that our residents’ needs are not only met but exceeded. To make that happen we are committed to provid ing an environment in which residents can enjoy.</Typography>
                <Box sx={{marginTop:'40px'}}>
                <Typography sx={{
                    mx:'auto',
                    textAlign:'center',
                    marginTjop:'40px',
                    fontWeight:'600',
                    color:'#2dbe6c',
                    fontSize:{
                        xs:'14px',
                        md:'18px',
                    }
                    }}>Mark Keneth</Typography>
                <Typography sx={{
                    mx:'auto',
                    textAlign:'center',
                    }}>Instructor</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonial;