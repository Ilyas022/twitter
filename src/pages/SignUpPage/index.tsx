import { Navigate } from 'react-router-dom'

import { HOME_PAGE_ROUTE } from 'constants/routes'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import Form from './SignUpPageForm'
import { Container, LogoIcon, Page, Title } from './styled'

function SignUpPage() {
	const { id } = useTypedSelector(selectUser)

	if (id) {
		return <Navigate to={HOME_PAGE_ROUTE} />
	}

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
