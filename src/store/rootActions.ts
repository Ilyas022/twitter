import themeSlice from './slices/themeSlice'
import userSlice from './slices/userSlice'
import { updateUser } from './thunks/userThunks'

const rootActions = {
	updateUser,
	...userSlice.actions,
	...themeSlice.actions,
}

export default rootActions
