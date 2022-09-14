import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    message: '',
    user: {},
    token: ''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        initialSignIn: {
            
        },
        signIn: (state, actions) => {
            state.isLoggedIn = true
            state.user = actions.payload
        },
        signUp: (state, actions) => {
            state.isLoggedIn = true 
            state.user = actions.payload
        },
        signOut: (state) => {
            state = initialState
            localStorage.clear()
        }
    }
})

export const authAction = authSlice.actions

export default authSlice.reducer