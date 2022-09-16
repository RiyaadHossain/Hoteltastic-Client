import client from "../../Helper/axios"
import { reviewActions } from "./reviewSlice"

const getReviews = () => {
    return async dispatch => {
        try {
            const { data } = await client.get("/api/review/allReviews")
            dispatch(reviewActions.getReviews(data.reviews))
        } catch (error) {
            console.log(error);
        }
    }
}

export const postReview = (reviewData) => {
    return async dispatch => {
        try {
            const { data } = await client.post("/api/review/addReview", reviewData)
            if (data) {
                dispatch(reviewActions.postReview())
                dispatch(getReviews())
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateReview = ({ reviewData, id }) => {
    return async dispatch => {
        try {
            const { data } = await client.patch(`/api/review/updateReview/${id}`, reviewData)
            if (data) {
                dispatch(reviewActions.updateReview())
                dispatch(getReviews())
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const deleteReview = (id) => {
    return async dispatch => {
        try {
            const { data } = await client.delete(`/api/review/deleteReview/${id}`)
            if (data) {
                dispatch(reviewActions.deleteReview())
                dispatch(getReviews())
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default getReviews;