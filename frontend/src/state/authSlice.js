import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	mode: "light",
	user: null,
	token: null,
	posts: [],
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		
	}
})

export default authSlice.reducer