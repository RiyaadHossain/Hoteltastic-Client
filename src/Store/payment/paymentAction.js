import client from '../../Helper/axios'
import { paymentActions } from './paymentSlice'

export const getPayment = () => {
	return async dispatch => {
		try {
			const { data } = await client.get('/api/payment/allBookings')
			dispatch(paymentActions.getPayment(data))
		} catch (error) {
			console.log(error)
		}
	}
}
