import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PropertyDescription = () => {
     return (
          <Box>
               <Typography
				sx={{
					fontWeight: '500',
					fontFamily: "'Rubik', sans-serif",
					fontSize: {
						xs: '38px',
						sm: '45px',
						md: '40px',
					},
				}}
				fontWeight="bold"
			>
				Property Desciption
			</Typography>
               
          </Box>
     );
};

export default PropertyDescription;