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
					<Route element={<AllRooms />} path="/allrooms" />
					<Route element={<Properties />} path="/property" />
					<Route element={<SignIn />} path="/signin" />
					<Route element={<SignUp />} path="/signup" />
				</Routes>
			</Layout>
		</>
	)
}

export default App
