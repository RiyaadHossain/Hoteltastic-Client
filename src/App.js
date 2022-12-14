import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout'
import client from './Helper/axios'
import Preloader from './Components/Loaders/Preloader/Preloader'
import AllRooms from './Pages/AllRooms/AllRooms'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import Contact from './Pages/Contact/Contact'
import LandingPage from './Pages/Home/LandingPage/LandingPage'
import NotFound from './Pages/NotFound404/NotFound'
import Properties from './Pages/Property/Properties'
import { initialUser } from './Store/auth/authAction'
import getRooms from './Store/room/roomAction'
import { socialSignIn } from './Store/auth/authAction'
import UserLayout from './Pages/Dashboard/User/UserLayout'
import MyProfile from './Pages/MyProfile/MyProfile'
import AdminLayout from './Pages/Dashboard/Admin/AdminLayout'
import AdminHome from './Pages/Dashboard/Admin/AdminHome'
import AdminRooms from './Pages/Dashboard/Admin/AdminRooms'
import AdminUser from './Pages/Dashboard/Admin/AdminUser'
import AllAdmin from './Pages/Dashboard/Admin/AllAdmin'
import UserHome from './Pages/Dashboard/User/UserHome'
import FavouriteRoom from './Pages/Dashboard/User/FavouriteRoom'
import AboutProject from './Pages/AboutProject/AboutProject'
import PaymentContainer from './Components/Payment/PaymentContainer'
import RequirUser from './RequirAuth/RequirUser'
import RequirAdmin from './RequirAuth/RequirAdmin'
import AllBookings from './Pages/Dashboard/Admin/AllBookings'
import MyBookings from './Pages/Dashboard/User/MyBookings'
import getUsers from './Store/user/userAction'

function App() {
	const dispatch = useDispatch()
	const auth = useSelector(state => state.user.user)
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		dispatch(initialUser())
		dispatch(getRooms())
		dispatch(getUsers())
	}, [dispatch, auth])

	useEffect(() => {
		const user = async () => {
			try {
				const URL =
					'https://hoteltastic-server.vercel.app/auth/login/success'
				const { data } = await client.get(URL, { withCredentials: true })
				if (data) {
					dispatch(socialSignIn(data.user._json.email))
				}
			} catch (error) {
				// console.log(error)
			}
		}
		user()
	}, [dispatch])

	// ----------------preloader----------------//
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 1000)
	}, [])

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<>
					<Routes>
						<Route element={<Layout />} path="/">
							<Route index element={<LandingPage />} path="" />
							<Route
								element={
									<RequirUser>
										<AllRooms />
									</RequirUser>
								}
								path="allRooms"
							/>
							<Route
								element={
									<RequirUser>
										<Properties />
									</RequirUser>
								}
								path="property/:id"
							/>
							<Route element={<SignIn />} path="signin" />
							<Route element={<SignUp />} path="signup" />
							<Route element={<AboutProject />} path="aboutproject" />
							<Route element={<Contact />} path="contact" />
							<Route element={<MyProfile />} path="profile" />
							<Route
								element={<PaymentContainer />}
								path="/payment/:id"
							></Route>
						</Route>

						<Route element={<AdminLayout />} path="/admin/">
							<Route
								element={
									<RequirUser>
										<MyProfile />
									</RequirUser>
								}
								path="profile"
							/>
						</Route>
						<Route
							element={
								<RequirUser>
									<RequirAdmin>
										<AdminLayout />
									</RequirAdmin>
								</RequirUser>
							}
							path="/admin/"
						>
							<Route element={<AdminHome />} path="dashboard" />
							<Route element={<AdminRooms />} path="allRoom" />
							<Route element={<AdminUser />} path="user" />
							<Route element={<AllAdmin />} path="admin" />
							<Route element={<AllBookings />} path="allBookings" />
						</Route>
						<Route
							element={
								<RequirUser>
									<UserLayout />
								</RequirUser>
							}
							path="/user/"
						>
							<Route element={<UserHome />} path="dashboard" />
							<Route element={<MyBookings />} path="myBookings" />
							<Route element={<FavouriteRoom />} path="favourite" />
							<Route element={<MyBookings />} path="myBookings" />
						</Route>
						<Route element={<NotFound />} path="*" />
					</Routes>
				</>
			)}
		</>
	)
}

export default App
