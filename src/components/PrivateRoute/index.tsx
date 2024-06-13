import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import Navbar from 'components/Navbar'
import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import { Wrapper } from './styled'

function PrivateRoute() {
	const { id } = useTypedSelector(selectUser)
	const { unSetUser } = useActions()
	const auth = getAuth()
	const navigate = useNavigate()

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (!user) {
				unSetUser()
				navigate(AUTH_PAGE_ROUTE)
			}
		})
	}, [])

	if (!id) {
		return <Navigate to={AUTH_PAGE_ROUTE} />
	}

	return (
		<Wrapper>
			<Navbar />
			<Outlet />
		</Wrapper>
	)
}

export default PrivateRoute
