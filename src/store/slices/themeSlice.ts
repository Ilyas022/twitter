import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
	name: 'light' | 'dark'
}

const initialState: InitialState = {
	name: 'light',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (_, action) => {
			return { name: action.payload }
		},
	},
})

export default themeSlice
