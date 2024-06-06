import { Route, Routes } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute'
import {
	AUTH_PAGE_ROUTE,
	HOME_PAGE_ROUTE,
	SIGNIN_PAGE_ROUTE,
	SIGNUP_PAGE_ROUTE,
} from 'constants/routes'
import AuthPage from 'pages/AuthPage'
import HomePage from 'pages/HomePage'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'

function App() {
	return (
		<Routes>
			<Route path={AUTH_PAGE_ROUTE} element={<AuthPage />} />
			<Route path={SIGNIN_PAGE_ROUTE} element={<SignInPage />} />
			<Route path={SIGNUP_PAGE_ROUTE} element={<SignUpPage />} />
			<Route element={<PrivateRoute />}>
				<Route path={HOME_PAGE_ROUTE} element={<HomePage />} />
			</Route>
		</Routes>
	)
}

export default App
