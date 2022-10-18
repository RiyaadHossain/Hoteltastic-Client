import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import paymentSlice from './payment/paymentSlice'
import reviewSlice from './review/reviewSlice'
import roomSlice from './room/roomSlice'
import userSlice from './user/userSlice'

export const store = configureStore({
	reducer: {
		auth: authSlice,
		room: roomSlice,
		review: reviewSlice,
		user: userSlice,
		booking: paymentSlice,
	},
})
