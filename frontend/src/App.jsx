import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import LoginPage from "./scenes/loginPage"
import ProfilePage from "./scenes/profilePage"
import HomePage from "./scenes/homePage"
import store from "./store"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistStore } from "redux-persist"

import { useMemo } from "react"
import { useSelector } from "react-redux"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material"
import { themeSettings } from "./theme"

const App = () => {
	const mode = useSelector((store) => store.mode)
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
	const isAuth = Boolean(useSelector((store) => store.token))

	return (
		<PersistGate loading={null} persistor={persistStore(store)}>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route exact path="/" element={<LoginPage />} />
						<Route exact path="/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
						<Route exact path="/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</PersistGate>
	)
}

export default App