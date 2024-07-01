import { createAsyncThunk } from '@reduxjs/toolkit'
import { DocumentReference, DocumentData, getDoc } from 'firebase/firestore'

import { User } from 'types/interfaces'

export const updateUser = createAsyncThunk<User, DocumentReference<DocumentData, DocumentData>>(
	'currency/getExchangeList',
	async (user, { rejectWithValue }) => {
		try {
			const res = await getDoc(user)

			const userInfo = res.data() as User

			return userInfo
		} catch (error) {
			return rejectWithValue(error)
		}
	}
)
