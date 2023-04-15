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
	firstName,
	lastName,
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
	const primary = palette.primary.medium

	// change the number of likes
	const patchLike = async () => {
		const response = await fetch(`http://localhost:3001/posts/${postId}/like`, {
			method: "PATCH",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ postUserId, loggedInUserId })
		})
		const updatedPost = await response.json()
		dispatch(setPost({ post: updatedPost }))
	}

	return (
		<div>PostWidget</div>
	)
}

export default PostWidget