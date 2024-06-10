import { Navigate, Outlet } from 'react-router-dom'

import Navbar from 'components/Navbar'
import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import { Wrapper } from './styled'

function PrivateRoute() {
	const { id } = useTypedSelector(selectUser)

	if (!id) {
		return <Navigate to={AUTH_PAGE_ROUTE} />
	}

	return (
		<Wrapper>
			<Navbar />
			<Outlet />
			<p>search</p>
		</Wrapper>
	)
}

export default PrivateRoute
