import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "state/authSlice"
import PostWidget from "./PostWidget"


const PostsWidget = ({ userId, isProfile = false }) => {
	const dispatch = useDispatch()
	const posts = useSelector(store => store.posts)
	const token = useSelector(store => store.token)

	// Fetch posts for all users
	const getPosts = async () => {
		const response = await fetch("http://localhost:3001/posts", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
		const data = await response.json()
		dispatch(setPosts({ posts: data }))
	}

	// Fetch posts for a specific user
	const getUserPosts = async () => {
		const response = await fetch(`http://localhost:3001/posts/${userId}/posts`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		})
		const data = await response.json()
		dispatch(setPosts({ posts: data }))
	}

	useEffect(() => {
		if (isProfile) {
			getUserPosts()
		}
		else {
			getPosts()
		}
	}, []) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			{posts.map(
				({
					_id,
					userId,
					firstName,
					lastName,
					description,
					location,
					picturePath,
					userPicturePath,
					likes,
					comments,
				}) => (
					<PostWidget
						key={_id}
						postId={_id}
						postUserId={userId}
						name={`${firstName} ${lastName}`}
						description={description}
						location={location}
						picturePath={picturePath}
						userPicturePath={userPicturePath}
						likes={likes}
						comments={comments}
					/>
				)
			)}
		</>
	)
}

export default PostsWidget