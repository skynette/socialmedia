import { useState } from "react"
import { Box, IconButton, InputBase, Typography, Select, MenuItem, FormControl, useTheme, useMediaQuery } from "@mui/material"

import { Search, Message, DarkMode, LightMode, Notifications, Help, Menu, Close } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { setMode, setLogout } from "state/authSlice"
import { useNavigate } from "react-router-dom"
import FlexBetween from "components/FlexBetween"

const Navbar = () => {
	const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user = useSelector((store) => store.user) || {}
	const isNonMobileScreens = useMediaQuery(useTheme().breakpoints.up("md"))

	const theme = useTheme()
	const neutralLight = theme.palette.neutral.light
	// const dark = theme.palette.neutral.dark
	const background = theme.palette.background.default
	const primaryLight = theme.palette.primary.light
	const alt = theme.palette.background.alt

	const fullName = `${user.firstName} ${user.lastName}`

	return (
		<FlexBetween padding="1rem 6%" backgroundColor={alt}>
			<FlexBetween gap="1.75rem">
				<Typography
					fontWeight="bold"
					fontSize="clamp(1.5rem, 2rem, 2.5rem)"
					color="primary"
					onClick={() => navigate("/home")}
					sx={{
						"&:hover": {
							color: primaryLight,
							cursor: "pointer",
						}
					}}
				>
					SocialMedia
				</Typography>
				{isNonMobileScreens && (
					<FlexBetween backgroundColor={neutralLight} borderRadius="10px" gap="1rem" padding="0.1rem 1.5rem">
						<InputBase placeholder="Search..." sx={{ width: '125px' }} />
						<IconButton><Search /></IconButton>
					</FlexBetween>

				)}
			</FlexBetween>

			{/* DESKTOP NAV */}
			{isNonMobileScreens ? (
				<FlexBetween gap="2rem">
					<IconButton onClick={() => dispatch(setMode())}>
						{theme.palette.mode === "dark" ? <LightMode sx={{ fontSize: "25px" }} /> : <DarkMode sx={{ fontSize: "25px" }} />}
					</IconButton>
					<Message sx={{ fontSize: "25px" }} />
					<Notifications sx={{ fontSize: "25px" }} />
					<Help sx={{ fontSize: "25px" }} />
					<FormControl variant="standard" value={fullName}>
						<Select value={fullName}
							sx={{
								backgroundColor: neutralLight,
								width: "150px",
								borderRadius: "0.25rem",
								p: "0.25rem 1rem",
								"& .MuiSvgIcon-root": {
									pr: "0.25rem",
									width: "3rem",
								},
								"& .MuiSelect-select:focus": {
									backgroundColor: neutralLight,
								}
							}}
						>
							<MenuItem value={fullName}>
								<Typography>{fullName}</Typography>
							</MenuItem>
							<MenuItem onClick={() => setLogout()}>Logout</MenuItem>
						</Select>
					</FormControl>
				</FlexBetween>) :
				(<IconButton
					onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
				>
					<Menu />
				</IconButton>
				)}

			{/* MOBILE NAV */}
			{!isNonMobileScreens && isMobileMenuToggled && (
				<Box
					position="fixed"
					right="0"
					bottom="0"
					height="100%"
					zIndex="10"
					maxWidth="500px"
					minWidth="300px"
					backgroundColor={background}
				>
					{/* CLOSE ICON */}
					<Box display="flex" justifyContent="flex-end" p="1rem">
						<IconButton onClick={() => setIsMobileMenuToggled(false)}><Close /></IconButton>
					</Box>

					{/* MENU ITEMS */}
					<FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
						<IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: "25px" }}>
							{theme.palette.mode === "dark" ? <LightMode sx={{ fontSize: "25px" }} /> : <DarkMode sx={{ fontSize: "25px" }} />}
						</IconButton>
						<Message sx={{ fontSize: "25px" }} />
						<Notifications sx={{ fontSize: "25px" }} />
						<Help sx={{ fontSize: "25px" }} />
						<FormControl variant="standard" value={fullName}>
							<Select value={fullName}
								sx={{
									backgroundColor: neutralLight,
									width: "150px",
									borderRadius: "0.25rem",
									p: "0.25rem 1rem",
									"& .MuiSvgIcon-root": {
										pr: "0.25rem",
										width: "3rem",
									},
									"& .MuiSelect-select:focus": {
										backgroundColor: neutralLight,
									}
								}}
							>
								<MenuItem value={fullName}>
									<Typography>{fullName}</Typography>
								</MenuItem>
								<MenuItem onClick={() => setLogout()}>Logout</MenuItem>
							</Select>
						</FormControl>
					</FlexBetween>

				</Box>
			)}
		</FlexBetween>
	)
}

export default Navbar