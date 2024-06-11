import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserSlice {
	tweets: {
		author: string
		createdAt: string
		text: string
		likes: number
	}[]
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
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserSlice>) => {
			return { ...state, ...action.payload }
		},
	},
})

export default userSlice
