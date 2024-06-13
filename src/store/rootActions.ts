import themeSlice from './slices/themeSlice'
import userSlice from './slices/userSlice'

const rootActions = {
	...userSlice.actions,
	...themeSlice.actions,
}

export default rootActions
