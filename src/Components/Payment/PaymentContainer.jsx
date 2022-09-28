import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropertyCalculate from '../../Pages/Property/PropertySideBar/PropertyCalculate';
import userEvent from '@testing-library/user-event';



const stripePromise = loadStripe('pk_test_51L1DNCDSQhYM6brtwNmSUwREJfOaTnI8RVEu5U7tRoLvCbvvPhH2BsKB07x5SJzT2UJCsYvXF6GsofraA93lunJJ00c5Oqj7Dy')


  const options = {
    stripePromise,
  };


const PaymentContainer = () => {
    const rooms = useSelector((state) => state.room).rooms;
    const id = useParams()
    console.log(rooms,'rooms',id);
    const room = rooms.find((room) => room._id === id.id)
    const {propertyImage,propertyName,propertyDesciption,startFrom} = room
    const {user} = useSelector((state) => state.auth);
    console.log(room.startFrom,'pay room');

    
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
                flexDirection: {
                    xs: 'column',
                    md: 'row',
                },
                justifyContent: 'space-around',
                alignItems: 'center',
                // minHeight: '80vh',
                height: {
                  md:'100vh'
                },
                maxWidth:'1000px',
                margin:'20px auto',
                padding:'20px'
            }}>
                {/* ----------------Room Data Card----------------*/}
                <Box sx={{
                    width:{
                        xs:'100%',
                        sm:'100%',
                        md:'50%',
                        lg:'50%',
                    },
                    height:'100%',
                    background:'#fff',
                    border:'1px solid #ccc',
                    borderRadius:'5px',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                    margin:'20px',
                    padding:5,
                    overflowY:'scroll',
                    }}>
                <Typography>Check the booking info <span style={{color:'#2dbe6c',fontWeight:600,fontSize:'20px'}}>{user.user.name}</span> !</Typography>
                <Box sx={{width:'100%'}}>
                  <img width='100%' src={propertyImage} alt="RoomImage" />
                  <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                  }}>
                  <Typography sx={{fontWeight:600}}>{propertyName}</Typography>
                  <Typography sx={{fontWeight:600}}>${startFrom}.00</Typography>
                  </Box>
                  <Typography>{propertyDesciption?.slice(0,50)}...</Typography>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    borderBottom:'1px solid #ccc',
                    paddingBottom:'20px',
                  }}>
                  <Typography sx={{fontWeight:600}}>Subtotal</Typography>
                  <Typography sx={{fontWeight:600}}>${startFrom}.00</Typography>
                  </Box>
                  <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:'20px',
                    borderBottom:'1px solid #ccc',
                    paddingBottom:'20px',
                  }}>
                  <Typography sx={{fontWeight:600}}>Total</Typography>
                  <Typography sx={{fontWeight:600}}>${startFrom}.00</Typography>
                  </Box>
                </Box>
                </Box>
                {/* ------------------------room card section ends here---------------------- */}

                {/* ----------------payment card----------------- */}
            {/* <Box> */}

                
                <Box sx={{
                    width:{
                        xs:'100%',
                        sm:'100%',
                        md:'50%',
                        lg:'50%',
                    },
                    // minHeight:{
                    //   md:'580px'
                    // },
                    height:'100%',
                    padding:5,
                    background:'#fff',
                    border:'1px solid #ccc',
                    borderRadius:'5px',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                }}>
                    <Box>
                    {/* <Typography sx={{marginBottom:5,fontSize:20}}>Please Pay Here To Confirm the Booking</Typography> */}
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm room={room}/>
                    </Elements>
                    </Box>
                </Box>

                </Box>
            {/* </Box> */}
            
        </>
    );
};

export default PaymentContainer;