import { AUTH_PAGE_ROUTE } from 'constants/routes'

import SignInPageForm from './SignInPageForm'
import { Container, LogoIcon, Page, SignUp, Title } from './styled'

function SignInPage() {
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
