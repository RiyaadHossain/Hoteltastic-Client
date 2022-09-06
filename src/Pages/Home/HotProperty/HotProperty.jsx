import { Box,styled, Typography } from '@mui/material';
import React from 'react';


const Container =styled(Box)`
    margin-top: 100px;
    margin-bottom:100px;
`

const HotProperty = () => {
    return (
        <Container>
            <Typography>HOT PROPERTY</Typography>
        </Container>
    );
};

export default HotProperty;