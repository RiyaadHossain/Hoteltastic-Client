import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	users: [],
	admins: [],
	favourites: []
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getUsers: (state, actions) => {
			state.users = actions.payload
		},
		updateUser: state => {
			state.message = 'user Details updated Successfully'
		},
		getAdmins: (state, actions) => {
			state.admins = actions.payload
		},
		getFavourites: (state, actions) => {
			state.favourites = actions.payload
		},
		updateFavaourite: state => {
			state.message = 'Room Added to Favourite List'
		},
		deleteFavaourite: state => {
			state.message = 'Room deleted from Favourite List'
		},
	},
})

export const userActions = userSlice.actions
export default userSlice.reducer
