import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropertyCalculate from '../../Pages/Property/PropertySideBar/PropertyCalculate';


const stripePromise = loadStripe('pk_test_51L1DNCDSQhYM6brtwNmSUwREJfOaTnI8RVEu5U7tRoLvCbvvPhH2BsKB07x5SJzT2UJCsYvXF6GsofraA93lunJJ00c5Oqj7Dy')


  const options = {
    stripePromise,
  };


const PaymentContainer = () => {
    const rooms = useSelector((state) => state.room).rooms;
    const id = useParams()
    console.log(rooms,'rooms',id);
    const room = rooms.find((room) => room._id === id.id)
    const {propertyImage,propertyName} = room
    console.log(room,'pay room');

    
    return (
        <>


    {/* ------------------top section----------------------- */}

    <Box
        sx={{
          width: "100%",
          height: "15rem",
          padding: "130px 0px 130px 0px",
          background: `#5b5b5b url(${propertyImage}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundBlendMode: "overlay",
          color: "#fff",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              sm: "34px",
              md: "44px",
            },
            marginBottom: "10px",
            fontWeight: 300,
          }}
        >
          Booking for <span style={{color:'#2dbe6c',fontWeight:500}}>{propertyName}</span>
          <Box className="dividerBox">
            <Box className="divider"></Box>
          </Box>
        </Typography>
      </Box>
      {/* -----------------top section ends here----------------- */}

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                minHeight: '80vh',
                maxWidth:'1400px',
                margin:'20px auto',
                padding:'20px'
            }}>
                {/* ----------------Room Data Card----------------*/}
                <Box sx={{
                    width:'50%',
                    background:'#fff',
                    border:'1px solid #ccc',
                    borderRadius:'5px',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                    margin:'20px'
                    }}>
                <PropertyCalculate room={{room}}/>
                </Box>

                {/* ----------------payment card----------------- */}
            {/* <Box> */}

                
                <Box sx={{
                    width:'50%',
                    padding:10,
                    background:'#fff',
                    border:'1px solid #ccc',
                    borderRadius:'5px',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                }}>
                    <Typography sx={{marginBottom:10,fontSize:20}}>Please Pay Here To Confirm the Booking</Typography>
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm room={room}/>
                    </Elements>
                </Box>

                </Box>
            {/* </Box> */}
            
        </>
    );
};

export default PaymentContainer;