import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'


const stripePromise = loadStripe('pk_test_51L1DNCDSQhYM6brtwNmSUwREJfOaTnI8RVEu5U7tRoLvCbvvPhH2BsKB07x5SJzT2UJCsYvXF6GsofraA93lunJJ00c5Oqj7Dy')


const PaymentContainer = () => {

    // const options = {
    //     // passing the client secret obtained from the server
    //     clientSecret: '{{CLIENT_SECRET}}',
    //   };

    return (
        <>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
            
        </>
    );
};

export default PaymentContainer;