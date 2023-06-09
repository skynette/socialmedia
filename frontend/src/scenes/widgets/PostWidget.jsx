import { ChatBubbleOutlineOutlined, FavoriteBorderOutlined, FavoriteOutlined, ShareOutlined } from "@mui/icons-material"

import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material"
import FlexBetween from "components/FlexBetween"
import Friend from "components/Friend"
import WidgetWrapper from "components/WidgetWrapper"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPost } from "state/authSlice"

const PostWidget = ({
	postId,
	postUserId,
	name,
	description,
	location,
	picturePath,
	userPicturePath,
	likes,
	comments,
}) => {
	const [isComments, setIsComments] = useState(false)
	const dispatch = useDispatch()
	const token = useSelector((store) => store.token)
	const loggedInUserId = useSelector((store) => store.user._id)
	const isLiked = Boolean(likes[loggedInUserId])
	const likeCount = Object.keys(likes).length

	const { palette } = useTheme()
	const main = palette.neutral.main
	const primary = palette.primary.main

	// change the number of likes
	const patchLike = async () => {
		const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/posts/${postId}/like`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ userId: loggedInUserId })
		})
		const updatedPost = await response.json()
		dispatch(setPost({ post: updatedPost }))
	}

	return (
		<WidgetWrapper>
			<Friend
				friendId={postUserId}
				name={name}
				subtitle={location}
				userPicturePath={userPicturePath}
			/>
			<Typography color={main} sx={{ mt: "1rem" }}>
				{description}
			</Typography>
			{picturePath && (
				<img
					width="100%"
					height="auto"
					alt="post"
					style={{ borderRadius: "0.75rem", marginTop: "0.75rem" }}
					src={`${process.env.REACT_APP_SERVER_BASE_URL}/assets/${picturePath}`}
				/>
			)}
			<FlexBetween mt="0.25rem">
				<FlexBetween gap="1rem">

					{/* likes */}
					<FlexBetween gap="0.3rem">
						<IconButton onClick={patchLike}>
							{isLiked ? (
								<FavoriteOutlined sx={{ color: primary }} />
							) : (
								<FavoriteBorderOutlined />
							)}
						</IconButton>
						<Typography>{likeCount}</Typography>
					</FlexBetween>

					{/* comments */}
					<FlexBetween gap="0.3rem">
						<IconButton onClick={() => setIsComments(!isComments)}>
							<ChatBubbleOutlineOutlined />
						</IconButton>
						<Typography>{comments.length}</Typography>
					</FlexBetween>

				</FlexBetween>

				{/* share */}
				<IconButton>
					<ShareOutlined />
				</IconButton>
			</FlexBetween>

			{/* comments */}
			{isComments && (
				<Box mt="0.5rem">
					{comments.map((comment, i) => (
						<Box key={`${name}-${i}`}>
							<Divider />
							<Typography sx={{ color: main, m: "0.5rem", pl: "1rem" }}>{comment}</Typography>
						</Box>
					))}
					<Divider />
				</Box>
			)}
		</WidgetWrapper>
	)
}

export default PostWidget