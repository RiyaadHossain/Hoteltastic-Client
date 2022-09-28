import React, { useState } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import './Payment.css'
import Swal from 'sweetalert2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';


const CheckoutForm = ({room}) => {
    const [success, setSuccess ] = useState(false)
    const [tnxID,setTnxID] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const {startFrom} = room;
    const {user} = useSelector((state) => state.auth);
    const [loading,setLoading] = useState(false)



    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
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
                setTnxID(id)
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
                    setLoading(false)
                }
    
            } catch (error) {
                setLoading(false)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}. Please try again!`,
                  })

            }
        } else {
            setLoading(false)
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
            <Typography sx={{marginBottom:5,fontSize:20}}>Please Pay Here To Confirm the Booking</Typography>

                <label htmlFor="email">Email</label>
                <input name='email' required style={{padding:15,width:'100%',marginBottom:4}} defaultValue={user?.user?.email} readOnly/>
                <label htmlFor="phone">Phone</label>
                <input name='phone' required style={{padding:15,width:'100%',marginBottom:5}} type='number'/>
                <label htmlFor="card">Card Info</label>
                <fieldset name='card' className="FormGroup">
                    <div className="FormRow">
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
                }}>
                    {loading ? 'Processinng...' : 'Pay'}
                </button>
                </div>
            </form>
        :
            <Box>
                <CheckCircleOutlineIcon sx={{
                    color:'#2dbe6c',
                    mx:'auto',
                    width:'100%',
                    fontSize:'100px'
                }}/>
                <h1>Payment Successfull!!</h1>
                <h2>You just booked <span style={{color:'#2dbe6c'}}>{room?.propertyName}</span>!!</h2>
                <Typography>Your Transaction ID is : <span  style={{color:'#2dbe6c'}}>{tnxID}</span></Typography>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    marginTop:5,
                }}>
                <Link to='/user/myBookings'><Button variant='contained'>Go to Dashboard</Button></Link>
                <Link to='/'><Button variant='contained'>Go to Homepage</Button></Link>
                </Box>
            </Box> 
        }
        </>
    );
};

export default CheckoutForm;