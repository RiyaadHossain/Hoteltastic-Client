import { Box, Button, Card, CardActions, CardContent, styled, Typography } from '@mui/material';
import React from 'react';


const Container = styled(Box)`
    margin:50px
`
const FlexContainer = styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const HotProperty = () => {
    const dealsData = [
        {"name":"Contemporary Apartment",
        "price": 45000,
        "description":"This kind of catergory are the best for personal uses"},
        {"name":"Luxury Villa With Pool",
        "price": 45000,
        "description":"This kind of catergory are the best for personal uses"},
        {"name":"Contemporary Apartment",
        "price": 45000,
        "description":"This kind of catergory are the best for personal uses"},
    ]
    return (
        <Container>
            <Typography variant='h6'>HOT PROPERTY</Typography>
            <FlexContainer>
                <Typography variant='h4'>Our Best Deals</Typography>
                <Box>
                    <Button>Next</Button>
                    <Button>Previus</Button>
                </Box>
            </FlexContainer>
            <Box>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                    FEATURED
                </Typography>
                <Typography variant="h5" component="div">
                be nev ent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
                </Typography>
                <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See Datails</Button>
                </CardActions>
                </Card>
            </Box>
        </Container>
    );
};

export default HotProperty;