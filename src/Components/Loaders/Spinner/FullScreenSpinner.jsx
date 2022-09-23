import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const FullScreenSpinner = () => {
     return (
          <Box sx={{
               padding:"30vh 0",
          }}>
               <Box className='loader'>
                    <Typography component='span' sx={{
                         color: '#000'
                    }}>Loading...</Typography>
               </Box>
          </Box>
     );
};

export default FullScreenSpinner;