import Form from './SignUpPageForm'
import { Container, LogoIcon, Page, Title } from './styled'

function SignUpPage() {
	return (
		<Page>
			<Container>
				<LogoIcon />
				<Title>Create an account</Title>
				<Form />
			</Container>
		</Page>
	)
}

export default SignUpPage
