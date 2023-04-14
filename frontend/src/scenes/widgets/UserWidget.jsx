import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, WorkOutlineOutlined } from "@mui/icons-material"

import { Box, Typography, Divider, useTheme } from "@mui/material"
import UserImage from "components/UserImage"
import FlexBetween from "components/FlexBetween"
import WidgetWrapper from "components/WidgetWrapper"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const UserWidget = ({ userId, picturePath }) => {
	const [user, setUser] = useState(null)
	const { palette } = useTheme()
	const navigate = useNavigate()
	const dark = palette.neutral.dark
	const medium = palette.neutral.medium
	const main = palette.neutral.main
	const token = useSelector((store) => store.token)


	const getUser = async () => {
		const response = await fetch(`http://localhost:3001/${userId}`, {
			method: "GET",
			headers: { Authorization: `Bearer ${token}` }
		})
		const data = await response.json()
		setUser(data)
	}

	useEffect(() => getUser(), []) // eslint-disable-line react-hooks/exhaustive-deps

	if (!user) {
		return null
	}

	const {
		firstName,
		lastName,
		location,
		occupation,
		viewedProfile,
		impressions,
		friends,
	} = user


	return (
		<WidgetWrapper>
			{/* first row */}
			<FlexBetween gap="0.5rem" pb="1.1rem" onClick={() => navigate(`/profile/${userId}`)}>
				<FlexBetween gap="1rem">
					<UserImage image={picturePath} />

					<Box>
						<Typography
							variant="h4"
							color={dark}
							fontWeight="500"
							sx={{
								"&:hover": {
									color: palette.primary.light,
									cursor: "pointer"
								}
							}}
						>
							{firstName} {lastName}
						</Typography>
						<Typography color={medium}>
							{friends.length}
						</Typography>
					</Box>

					<ManageAccountsOutlined />
				</FlexBetween>
				<Divider />

				{/* second row */}
				<Box p="1rem 0">
					<Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
						<LocationOnOutlined fontSize="large" sx={{ color: main }} />
						<Typography color={medium}>{location}</Typography>

					</Box>
					<Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
						<WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
						<Typography color={medium}>{occupation}</Typography>

					</Box>
				</Box>

				{/* third row */}
				<Box p="1rem 0">
					<FlexBetween mb="0.5rem">

					</FlexBetween>
				</Box>

			</FlexBetween>
		</WidgetWrapper>
	)
}

export default UserWidget