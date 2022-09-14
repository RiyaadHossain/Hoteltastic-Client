import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    allPayments: []
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        getPayment: (state, actions) => {
            state.allPayments = actions.payload
        }
    }
})

export const paymentActions = paymentSlice.actions
export default paymentSlice.reducer