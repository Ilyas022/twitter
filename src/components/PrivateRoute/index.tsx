import { Navigate } from 'react-router-dom'

import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

function PrivateRoute({ Component }: { Component: React.ComponentType }) {
	const { id } = useTypedSelector(selectUser)

	return id ? <Component /> : <Navigate to={AUTH_PAGE_ROUTE} />
}
export default PrivateRoute
