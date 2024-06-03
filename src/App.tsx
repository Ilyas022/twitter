import { Route, Routes } from 'react-router-dom'

import { AUTH_PAGE_ROUTE, SIGNIN_PAGE_ROUTE } from 'constants/routes'
import AuthPage from 'pages/AuthPage'
import SignInPage from 'pages/SignInPage'

function App() {
	return (
		<Routes>
			<Route path={AUTH_PAGE_ROUTE} element={<AuthPage />} />
			<Route path={SIGNIN_PAGE_ROUTE} element={<SignInPage />} />
		</Routes>
	)
}

export default App
