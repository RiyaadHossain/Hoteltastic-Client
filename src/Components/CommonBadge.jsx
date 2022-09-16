import { Typography } from '@mui/material';
import React from 'react';

const CommonBadge = () => {
    return (
        <>
            <Typography sx={{
                    color:'#fff',
                    background: ' #f2b241',
                    padding:'5px 10px',
                    fontWeight: 'bold',
                    borderRadius: '5px',
                    fontSize:'12px'
                }}>FEATURED</Typography>
        </>
    );
};

export default CommonBadge;