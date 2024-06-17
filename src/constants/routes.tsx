import PrivateRoute from 'components/PrivateRoute'
import AuthPage from 'pages/AuthPage'
import FeedPage from 'pages/FeedPage'
import ProfilePage from 'pages/ProfilePage'
import SignInPage from 'pages/SignInPage'
import SignUpPage from 'pages/SignUpPage'

import { AUTH_PAGE_ROUTE, SIGNIN_PAGE_ROUTE, SIGNUP_PAGE_ROUTE, FEED_PAGE_ROUTE, PROFILE_PAGE_ROUTE } from './routeLinks'

export const routes = [
	{ path: AUTH_PAGE_ROUTE, element: <AuthPage /> },
	{ path: SIGNIN_PAGE_ROUTE, element: <SignInPage /> },
	{ path: SIGNUP_PAGE_ROUTE, element: <SignUpPage /> },
	{
		element: <PrivateRoute />,
		children: [
			{ path: FEED_PAGE_ROUTE, element: <FeedPage /> },
			{ path: `${PROFILE_PAGE_ROUTE}/:id`, element: <ProfilePage /> },
		],
	},
	{ path: '*', element: <p>not found page</p> },
]
