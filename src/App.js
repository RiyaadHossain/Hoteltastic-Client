import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './Components/Layout'
import client from './Helper/axios'
import AllRooms from './Pages/AllRooms/AllRooms'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import Contact from './Pages/Contact/Contact'
import LandingPage from './Pages/Home/LandingPage/LandingPage'
import NotFound from './Pages/NotFound404/NotFound'
import Properties from './Pages/Property/Properties'

function App() {

	useEffect(() => {
		client.get('/api/room/allRooms')
			.then((data) => console.log(data))
			.catch(err => console.log(err))
	}, [])

	return (
		<>
			<Layout>
				<Routes>
					<Route element={<LandingPage />} path="/" />
					<Route element={<AllRooms />} path="/allrooms" />
					<Route element={<Properties />} path="/property" />
					<Route element={<SignIn />} path="/signin" />
					<Route element={<SignUp />} path="/signup" />
					<Route element={<Contact />} path="/contact" />
					<Route element={<NotFound/>} path="*" />

				</Routes>
			</Layout>
		</>
	)
}

export default App
