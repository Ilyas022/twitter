import { Route, Routes } from 'react-router-dom'

import { routes } from 'constants/routes'

function App() {
	return (
		<Routes>
			{routes.map((route, index) => (
				<Route key={index} {...(route.path ? { path: route.path } : {})} element={route.element}>
					{route.children &&
						route.children.map((childRoute, childIndex) => (
							<Route key={childIndex} path={childRoute.path} element={childRoute.element} />
						))}
				</Route>
			))}
		</Routes>
	)
}

export default App
