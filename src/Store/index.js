import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import roomSlice from './room/roomSlice'


export const store = configureStore({
    reducer: {
        auth: authSlice,
        room: roomSlice
    },
})