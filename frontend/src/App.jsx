import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import HomePage from "./scenes/homePage"
import LoginPage from "./scenes/loginPage"
import ProfilePage from "./scenes/profilePage"
import { Provider } from "react-redux"
import store from "./store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistStore } from "redux-persist"



const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistStore(store)}>
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<LoginPage />} />
						<Route exact path="/home" element={<HomePage />} />
						<Route exact path="/profile/:userId" element={<ProfilePage />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	)
}

export default App