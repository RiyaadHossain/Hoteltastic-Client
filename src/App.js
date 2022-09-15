import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
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
import { socialSignIn } from "./Store/auth/authAction";
import UserLayout from './Pages/Dashboard/User/UserLayout'

function App() {
	const dispatch = useDispatch()
	const [loading, setLoading] = useState(true)
	useEffect(() => {
		dispatch(initialUser())
		dispatch(getRooms())
	}, [dispatch])

	useEffect(() => {
		const user = async () => {
			try {
				const URL = "http://localhost:5001/auth/login/success";
				const { data } = await client.get(URL, { withCredentials: true });
				if (data) {
					console.log(data.user._json.email)
					dispatch(socialSignIn(data.user._json.email));
				}
			} catch (error) {
				console.log(error);
			}
		};
		user()
	}, [dispatch]);

	// ----------------preloader----------------//
	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 3000)
	}, [])


	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<Layout>
					<Routes>
						<Route element={<LandingPage />} path="/" />
						<Route element={<AllRooms />} path="/allrooms" />
						<Route element={<Properties />} path="/property" />
						<Route element={<SignIn />} path="/signin" />
						<Route element={<SignUp />} path="/signup" />
						<Route element={<Contact />} path="/contact" />
						<Route element={<UserLayout />} path='/Userdashboard' />
						<Route element path='' />
						<Route element path='' />
						<Route element path='' />
						<Route element path='' />
						<Route element path='' />
						<Route element path='' />
						<Route element={<NotFound />} path="*" />

					</Routes>
				</Layout>
			)}
		</>
	)

}

export default App;
