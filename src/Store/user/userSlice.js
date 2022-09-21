import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    success: false,
    message: '',
    users: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUsers: (state, actions) => {
            state.users = actions.payload
        },
        // postUser: state => {
        //     state.message = 'New user added Successfully'
        // },
        // updateUser: state => {
        //     state.message = "user Details updated Successfully"
        // },
        // deleteUser: state => {
        //     state.message = "user deleted Successfully"
        // }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer