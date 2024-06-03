import { AUTH_PAGE_ROUTE } from 'constants/routes'

import { Button, Container, Form, Input, LogoIcon, Page, SignUp, Title } from './styled'

function SignInPage() {
	return (
		<Page>
			<Container>
				<LogoIcon />
				<Title>Log in to Twitter</Title>
				<Form>
					<Input placeholder="Phone number, email address" />
					<Input placeholder="Password" />
					<Button>Log In</Button>
				</Form>
				<SignUp to={AUTH_PAGE_ROUTE}>Sign up to Twitter</SignUp>
			</Container>
		</Page>
	)
}

export default SignInPage
