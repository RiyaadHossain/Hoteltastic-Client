import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    success: false,
    loading: true,
    message: '',
    reviews: []
}

const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        getReviews: (state, actions) => {

            state.reviews = actions.payload
        },
        postReview: (state, actions) => {
            state.message = 'Your Review Posted Successfully'
        },
        updateReview: (state, actions) => {
            state.message = 'Your Review Updated Successfully'
        },
        deleteReview: (state, actions) => {
            state.message = 'Your Review Deleted Successfully'
        }
    }
})

export const reviewActions = reviewSlice.actions
export default reviewSlice.reducer