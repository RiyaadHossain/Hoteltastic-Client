import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import AllRooms from './Pages/AllRooms/AllRooms'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import LandingPage from './Pages/Home/LandingPage/LandingPage'
import Properties from './Pages/Property/Properties'

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route element={<LandingPage />} path="/" />
<<<<<<< HEAD
					<Route element={<AllRooms />} path="/allrooms" />
=======
					<Route element={<Properties />} path="/property" />
>>>>>>> a320c0d9dcbed935f79a7dc778a0b28bce59c0e6
					<Route element={<SignIn />} path="/signin" />
					<Route element={<SignUp />} path="/signup" />
				</Routes>
			</Layout>
		</>
	)
}

export default App
