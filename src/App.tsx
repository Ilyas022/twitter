import { Route, Routes } from 'react-router-dom'

import Layout from 'components/Layout'
import PrivateRoute from 'components/PrivateRoute'
import { AUTH_PAGE_ROUTE, FEED_PAGE_ROUTE, PROFILE_PAGE_ROUTE, SIGNIN_PAGE_ROUTE, SIGNUP_PAGE_ROUTE } from 'constants/routes'
import AuthPage from 'pages/AuthPage'
import FeedPage from 'pages/FeedPage'
import NotFoundPage from 'pages/NotFoundPage'
import ProfilePage from 'pages/ProfilePage'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'

function App() {
	return (
		<Routes>
			<Route path={AUTH_PAGE_ROUTE} element={<AuthPage />} />
			<Route path={SIGNIN_PAGE_ROUTE} element={<SignInPage />} />
			<Route path={SIGNUP_PAGE_ROUTE} element={<SignUpPage />} />
			<Route element={<Layout />}>
				<Route element={<PrivateRoute />}>
					<Route path={FEED_PAGE_ROUTE} element={<FeedPage />} />
					<Route path={`${PROFILE_PAGE_ROUTE}/:id`} element={<ProfilePage />} />
				</Route>
			</Route>
			<Route element={<Layout />}>
				<Route path="*" element={<NotFoundPage />} />
			</Route>
		</Routes>
	)
}

export default App
