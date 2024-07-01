import { Navigate } from 'react-router-dom'

import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useTypedSelector } from 'hooks/useTypedSelector'
import TweetSearchBar from 'pages/ProfilePage/TweetSearchBar'
import { selectUser } from 'store/selectors/userSelectors'

import { Text } from './styled'

function NotFoundPage() {
	const { id } = useTypedSelector(selectUser)
	if (!id) {
		return <Navigate to={AUTH_PAGE_ROUTE} />
	}
	return (
		<>
			<Text>There is no such page</Text>
			<TweetSearchBar />
		</>
	)
}

export default NotFoundPage
