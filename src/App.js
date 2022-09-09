import { Route, Routes } from 'react-router-dom'
import Layout from './Components/Layout'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import LandingPage from "./Pages/Home/LandingPage/LandingPage"

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route element={<LandingPage />} path="/" />
					<Route element={<SignIn />} path="/signin" />
					<Route element={<SignUp />} path="/signup" />
				</Routes>
			</Layout>
		</>
	)
}

export default App
