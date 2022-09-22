import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	loading: false,
	success: false,
	message: '',
	users: [],
	admins: [],
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
	},
})

export const userActions = userSlice.actions
export default userSlice.reducer
