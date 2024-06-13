import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserSlice {
	id: string
	token: string
	name: string
	surname: string
	birthDate: number | null
	phone: string | null
	email: string
	tag: string
	numberOfTweets: number
	followers: number
	following: number
	about: string
}

const initialState: UserSlice = {
	id: '',
	token: '',
	name: '',
	surname: '',
	birthDate: 0,
	phone: '',
	email: '',
	tag: '',
	numberOfTweets: 0,
	followers: 0,
	following: 0,
	about: '',
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserSlice>) => {
			return { ...state, ...action.payload }
		},
		unSetUser: () => {
			return initialState
		},
		incTweetsNumber: (state) => {
			return { ...state, numberOfTweets: state.numberOfTweets + 1 }
		},
		decTweetsNumber: (state) => {
			return { ...state, numberOfTweets: state.numberOfTweets - 1 }
		},
	},
})

export default userSlice
