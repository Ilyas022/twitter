import { Navigate } from 'react-router-dom'

import { AUTH_PAGE_ROUTE, PROFILE_PAGE_ROUTE } from 'constants/routeLinks'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import SignInPageForm from './SignInPageForm'
import { Container, LogoIcon, Page, SignUp, Title } from './styled'

function SignInPage() {
	const { id } = useTypedSelector(selectUser)

	if (id) {
		return <Navigate to={`${PROFILE_PAGE_ROUTE}/${id}`} />
	}

	return (
		<Page>
			<Container>
				<LogoIcon />
				<Title>Log in to Twitter</Title>
				<SignInPageForm />
				<SignUp to={AUTH_PAGE_ROUTE}>Sign up to Twitter</SignUp>
			</Container>
		</Page>
	)
}

export default SignInPage
