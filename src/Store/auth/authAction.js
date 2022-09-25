import client from '../../Helper/axios'
import { authAction } from './authSlice'

export const signIn = userData => {
	return async dispatch => {
		try {
			const { data } = await client.post('/api/user/signin', userData)
			if (data) {
				const user = JSON.stringify({
					token: data.token,
					email: data.user.email,
				})
				localStorage.setItem('user', user)
				localStorage.setItem('token', data.token)
				dispatch(authAction.signIn(data))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const socialSignIn = email => {
	return async dispatch => {
		try {
			const { data } = await client.post('/api/user/socialLogin', { email })
			if (data) {
				const user = JSON.stringify({
					token: data.token,
					email: data.user.email,
				})
				localStorage.setItem('user', user)
				dispatch(authAction.signIn(data))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const signUp = userData => {
	return async dispatch => {
		const userSignUp = async () => {
			const { data } = await client.post('api/user/signup', userData)
			if (data) {
				dispatch(authAction.signUp(data))
			}
		}

		try {
			userSignUp()
		} catch (error) {}
	}
}

export const initialUser = () => {
	return async dispatch => {
		const user = JSON.parse(localStorage.getItem('user'))
		if (user) {
			const { data } = await client.get(`api/user/getUser/${user.email}`)
			dispatch(authAction.signIn(data))
		}
	}
}

export const addAdmin = adminData => {
	return async dispatch => {
		try {
			const { data } = await client.put('/api/user/socialLogin', {
				adminData,
			})
			if (data) {
				const user = JSON.stringify({
					token: data.token,
					email: data.user.email,
				})
				localStorage.setItem('user', user)
				dispatch(authAction.signIn(data))
			}
		} catch (error) {
			console.log(error)
		}
	}
}
