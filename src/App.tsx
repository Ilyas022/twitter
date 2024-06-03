import { Route, Routes } from 'react-router-dom'

import { AUTH_PAGE_ROUTE } from 'constants/routes'
import AuthPage from 'pages/AuthPage'

function App() {
	return (
		<Routes>
			<Route path={AUTH_PAGE_ROUTE} element={<AuthPage />} />
		</Routes>
	)
}

export default App
