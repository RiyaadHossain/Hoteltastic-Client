import tokenClient from '../../Helper/axios'
import { userActions } from './userSlice'

const getUsers = () => {
	return async dispatch => {
		try {
			const { data } = await tokenClient.get('/api/user/allUsers')
			if (data) {
				dispatch(userActions.getUsers(data.users))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const updateUser = ({ id, ...rest }) => {
	return async dispatch => {
		try {
			const { data } = await tokenClient.patch(`/api/user/updateUser/${id}`, rest)
			console.log({id, rest});
			console.log(data);
			if (data) {
				dispatch(userActions.updateUser())
				dispatch(getUsers())
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const getAdmins = () => {
	return async dispatch => {
		try {
			const { data } = await tokenClient.get('/api/admin/admins')
			if (data) {
				dispatch(userActions.getAdmins(data?.admins))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

const getFavourites = () => {
	return async dispatch => {
		try {
			const { data } = await tokenClient.get('/api/user/favourite-room')
			if (data) {
				dispatch(userActions.getFavourites(data?.favouriteRoom))
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const postFavourites = (body) => {
	return async dispatch => {
		try {
			const { data } = await tokenClient.post(`/api/user/favourite-room`, body)
			if (data) {
				dispatch(getFavourites())
				dispatch(userActions.updateFavaourite())
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export const deleteFavourites = ({ id }) => {
	return async dispatch => {
		try {
			console.log({ id })
			const { data } = await tokenClient.delete(`/api/user/favourite-room/${id}`)
			if (data) {
				dispatch(getFavourites())
				dispatch(userActions.deleteFavaourite())
			}
		} catch (error) {
			console.log(error)
		}
	}
}

export default getUsers
export { getFavourites }
