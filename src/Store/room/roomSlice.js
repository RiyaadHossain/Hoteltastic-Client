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
        postRooms: state => { }
    }
})

export const roomActions = roomSlice.actions
export default roomSlice.reducer