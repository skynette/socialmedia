import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import HomePage from "./scenes/homePage"
import LoginPage from "./scenes/loginPage"
import ProfilePage from "./scenes/profilePage"


const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={<LoginPage />} />
				<Route exact path="/home" element={<HomePage />} />
				<Route exact path="/profile/:userId" element={<ProfilePage />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App