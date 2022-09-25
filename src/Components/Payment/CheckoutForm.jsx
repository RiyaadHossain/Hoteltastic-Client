import React, { useState } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from 'axios';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';


const appearance = {
    theme: 'stripe',
    variables: {
      fontWeightNormal: '600',
      borderRadius: '2px',
      colorBackground: 'red',
      colorPrimary: '#DF1B41',
      colorPrimaryText: 'black',
      spacingGridRow: '40px !important',
    },
    rules: {
      '.Label': {
        marginBottom: '20px'
      },
      '.Tab, .Input, .Block': {
        boxShadow: '0px 3px 10px rgba(18, 42, 66, 0.08)',
        padding: '12px'
      }
    }
  }

const CheckoutForm = ({room}) => {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const {startFrom} = room;
    const {user} = useSelector((state) => state.auth);
    console.log(user.user.email,'auth');

    console.log(success,'succes')



    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('payment problem');
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            billing_details: {
				email: user.user.email,
				name: user.user.name,
				phone: user?.user?.phone,
			}
        })
        console.log(paymentMethod,'paymentMethod');
    
        if(!error) {
            try {
                console.log(paymentMethod,'payment method')
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
                console.log(response,'response');
    
                if(response.data.success) {
                    console.log("Successful payment")
                    setSuccess(true)
                }
    
            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message,'errror')
        }
      };


  
    return (
        <>
        {!success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={appearance}/>
                    </div>
                </fieldset>
                <button sx={{cursor:'pointer',marginTop:20,padding:10}}>Pay</button>
            </form>
        :
            <div>
                <h2>You just bought a sweet spatula congrats this is the best decision of you're life</h2>
            </div> 
        }
        </>
    );
};

export default CheckoutForm;