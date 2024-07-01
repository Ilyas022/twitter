import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import themeSlice from './slices/themeSlice'
import userSlice from './slices/userSlice'

const persistConfig = {
	key: 'store',
	storage,
}

const rootReducer = combineReducers({
	user: userSlice.reducer,
	theme: themeSlice.reducer,
})

const persistedReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		}),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
