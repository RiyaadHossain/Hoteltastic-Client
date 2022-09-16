import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    success: false,
    message: '',
    rooms: []
}

const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        getRooms: (state, actions) => {
            state.rooms = actions.payload
        },
        postRoom: state => {
            state.message = 'New Room added Successfully'
        },
        updateRoom: state => {
            state.message = "Room Details updated Successfully"
        },
        deleteRoom: state => {
            state.message = "Room deleted Successfully"
        }
    }
})

export const roomActions = roomSlice.actions
export default roomSlice.reducer