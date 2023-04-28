import { Box, Typography, useTheme } from "@mui/material"
import Friend from "components/Friend"
import WidgetWrapper from "components/WidgetWrapper"
import { useDispatch, useSelector } from "react-redux"
import { setFriends } from "state/authSlice"
import { useEffect } from "react"

const FriendListWidget = ({ userId }) => {
	const dispatch = useDispatch()
	const { palette } = useTheme()
	const token = useSelector((store) => store.token)
	const friends = useSelector((store) => store.user.friends)

	const getFriends = async () => {
		const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/users/${userId}/friends`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		const data = await response.json()
		dispatch(setFriends({ friends: data }))
	}

	useEffect(() => {
		getFriends()
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<WidgetWrapper>
			<Typography
				color={palette.neutral.dark}
				variant="h5"
				fontWeight="500"
				sx={{ marginBottom: "1.5rem" }}
			>
				Friend List
			</Typography>
			<Box
				display="flex"
				flexDirection="column"
				gap="1.5rem"
			>
				{friends.map((friend) => (
					<Friend key={friend._id}
						friendId={friend._id}
						name={`${friend.firstName} ${friend.lastName}`}
						subtitle={friend.occupation}
						userPicturePath={friend.picturePath}
					/>
				))}
			</Box>
		</WidgetWrapper>
	)
}

export default FriendListWidget