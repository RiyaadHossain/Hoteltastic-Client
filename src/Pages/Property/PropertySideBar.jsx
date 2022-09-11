import { Box, Typography } from '@mui/material';
import React from 'react';

const PropertySideBar = () => {
     return (
          <Box >
               <Typography
				sx={{
					textAlign:"center",
					fontFamily: "'Rubik', sans-serif",
					fontSize: {
						xs: '38px',
						sm: '45px',
						md: '40px',
					},
				}}
				fontWeight="bold"
			>
				Side BAR
			</Typography>
          </Box>
     );
};

export default PropertySideBar;