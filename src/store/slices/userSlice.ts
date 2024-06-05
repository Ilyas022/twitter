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
