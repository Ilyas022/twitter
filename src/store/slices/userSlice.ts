import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Timestamp } from 'firebase/firestore'

import { updateUser } from 'store/thunks/userThunks'

interface UserSlice {
	id: string
	token: string
	name: string
	surname: string
	birthDate: Timestamp | null
	phone: string | null
	email: string
	tag: string
	numberOfTweets: number
	followers: number
	following: number
	about: string
	imageUrl: string | null
}

const initialState: UserSlice = {
	id: '',
	token: '',
	name: '',
	surname: '',
	birthDate: null,
	phone: '',
	email: '',
	tag: '',
	numberOfTweets: 0,
	followers: 0,
	following: 0,
	about: '',
	imageUrl: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserSlice>) => ({ ...state, ...action.payload }),
		unSetUser: () => initialState,
		incTweetsNumber: (state) => ({ ...state, numberOfTweets: state.numberOfTweets + 1 }),
		decTweetsNumber: (state) => ({ ...state, numberOfTweets: state.numberOfTweets - 1 }),
	},
	extraReducers(builder) {
		builder.addCase(updateUser.fulfilled, (state, action) => ({ ...state, ...action.payload }))
	},
})

export default userSlice
