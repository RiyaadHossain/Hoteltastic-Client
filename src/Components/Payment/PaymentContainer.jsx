import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'
import { Box } from '@mui/material';
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
    console.log(room,'pay room');

    
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                minHeight: '80vh',
                maxWidth:'70%',border:'1px solid red',
                margin:'0 auto'
            }}>
                {/* ----------------Room Data Card----------------*/}
                <Box sx={{
                    width:'50%',
                    background:'#fff',
                    border:'1px solid #ccc',
                    borderRadius:'5px',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                    }}>
                <PropertyCalculate />
                </Box>

                {/* ----------------payment card----------------- */}
                <Box sx={{
                    width:'50%',
                    padding:10,
                    background:'#fff',
                    border:'1px solid #ccc',
                    borderRadius:'5px',
                    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
                }}>
                    <Elements stripe={stripePromise} options={options}>
                        <CheckoutForm room={room}/>
                    </Elements>
                </Box>
            </Box>
            
        </>
    );
};

export default PaymentContainer;