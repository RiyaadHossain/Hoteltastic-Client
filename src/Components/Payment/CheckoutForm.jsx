import React, { useState } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import './Payment.css'
import Swal from 'sweetalert2';


// const appearance = {
//     theme: 'stripe',
//     variables: {
//       fontWeightNormal: '600',
//       borderRadius: '2px',
//       colorBackground: 'red',
//       colorPrimary: '#DF1B41',
//       colorPrimaryText: 'black',
//       spacingGridRow: '40px !important',
//     },
//     rules: {
//       '.Label': {
//         marginBottom: '20px'
//       },
//       '.Tab, .Input, .Block': {
//         boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)',
//         padding: '12px'
//       }
//     }
//   }

const CheckoutForm = ({room}) => {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const {startFrom} = room;
    const {user} = useSelector((state) => state.auth);
    console.log(user);



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target.phone.value);
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: {
				email: user.user.email,
				name: user.user.name,
				phone: event.target.phone.value,
			}
        })
    
        if(!error) {
            try {
                const {id} = paymentMethod
                const response = await axios.post("http://localhost:5001/api/payment", {
                    email: user?.user?.email,
                    name: user?.user?.name,
                    amount:  startFrom,
                    tnxID:id,
                    day:1,
                    roomID:room._id,
                    roomName:room.propertyName,
                    payment:true,
                })
    
                if(response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }
    
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}. Please try again!`,
                  })

            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}. Please try again!`,
              })
        }
      };


  
    return (
        <>
        {!success ? 
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input name='email' required style={{padding:15,width:'100%',marginBottom:4}} defaultValue={user?.user?.email} readOnly/>
                <label htmlFor="phone">Phone</label>
                <input name='phone' required style={{padding:15,width:'100%',marginBottom:5}} type='number'/>
                <label htmlFor="card">Card Info</label>
                <fieldset name='card' className="FormGroup">
                    <div className="FormRow">
                    {/* options={appearance} */}
                        <CardElement/>
                    </div>
                </fieldset>
                <div className='pay-button'>
                <button style={{
                    width:'100%',
                    cursor:'pointer',
                    padding:'15px 6px',
                    borderRadius:5,
                    backgroundColor:'#2dbe6c',
                    border:'1px solid #2dbe6c',
                    color:'white',
                    fontWeight:'bold',
                    marginTop:'20px',
                }}>PAY</button>
                </div>
            </form>
        :
            <Box>
                <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
            </Box> 
        }
        </>
    );
};

export default CheckoutForm;