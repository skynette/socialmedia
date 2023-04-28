import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material"
import { Box, IconButton, Typography, useTheme } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { setFriends } from "state/authSlice"
import FlexBetween from "./FlexBetween"
import UserImage from "./UserImage"
import { useNavigate } from "react-router-dom"

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { _id } = useSelector((store) => store.user)
	const token = useSelector((store) => store.token)
	const friends = useSelector((store) => store.user.friends)

	const { palette } = useTheme()
	const primaryLight = palette.primary.light
	const primaryDark = palette.primary.dark
	const main = palette.neutral.main
	const medium = palette.neutral.medium

	const isFriend = friends.find((friend) => friend._id === friendId)

	const patchFriend = async (friendId) => {
		console.log("friend id", friendId);
		const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/users/${_id}/${friendId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		})
		const data = await response.json()
		dispatch(setFriends({ friends: data }))
	}

	return (
		<FlexBetween>
			<FlexBetween gap="1rem">
				<UserImage image={userPicturePath} size="55px" />
				<Box onClick={() => {
					navigate(`/profile/${friendId}`)
					navigate(0)
				}}>
					<Typography
						color={main}
						variant="h5"
						fontWeight="500"
						sx={{
							"&:hover": {
								color: primaryLight,
								cursor: "pointer",
							}
						}}
					>
						{name}
					</Typography>
					<Typography color={medium} fontSize="0.75rem">
						{subtitle}
					</Typography>
				</Box>
				<IconButton onClick={() => patchFriend(friendId)}
					sx={{ backgroundColor: primaryLight, p: "0.5rem" }}
				>
					{isFriend ? (
						<PersonRemoveOutlined sx={{ color: primaryDark }} />
					) : (
						<PersonAddOutlined sx={{ color: primaryDark }} />
					)}
				</IconButton>
			</FlexBetween>
		</FlexBetween >
	)
}

export default Friend