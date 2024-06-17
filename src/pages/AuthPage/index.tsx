import { Link, Navigate, useNavigate } from 'react-router-dom'

import authImg from 'assets/images/AuthImg.png'
import {
	COOKIE_POLICY_PAGE_ROUTE,
	FEED_PAGE_ROUTE,
	PRIVACY_PAGE_ROUTE,
	SIGNIN_PAGE_ROUTE,
	SIGNUP_PAGE_ROUTE,
	TERMS_PAGE_ROUTE,
} from 'constants/routeLinks'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { signUpUserWithGoogle } from 'src/api/signUpUserWithGoogle'
import { selectUser } from 'store/selectors/userSelectors'

import { footerLinks } from './config'
import {
	AuthImg,
	Button,
	Container,
	Footer,
	FooterLink,
	GoogleIcon,
	Info,
	Login,
	LogoIcon,
	Page,
	SubTitle,
	Title,
	Warning,
} from './styled'

function AuthPage() {
	const { id } = useTypedSelector(selectUser)
	const navigate = useNavigate()
	const { setUser } = useActions()

	if (id) {
		return <Navigate to={FEED_PAGE_ROUTE} />
	}

	const handleGoogleAuth = async () => {
		const userData = await signUpUserWithGoogle()

		if (userData) {
			setUser(userData)
		}
	}

	const handleSignUpWithEmailClick = () => {
		navigate(SIGNUP_PAGE_ROUTE)
	}

	return (
		<>
			<Page>
				<Container>
					<AuthImg src={authImg} alt="" />
					<Info>
						<LogoIcon />
						<Title>Happening now</Title>
						<SubTitle>Join Twitter today</SubTitle>
						<Button onClick={handleGoogleAuth}>
							<GoogleIcon />
							<span>Sign up with Google</span>
						</Button>
						<Button onClick={handleSignUpWithEmailClick}>Sign up with email</Button>
						<Warning>
							By singing up you agree to the <Link to={TERMS_PAGE_ROUTE}>Terms of Service</Link> and{' '}
							<Link to={PRIVACY_PAGE_ROUTE}>Privacy Policy</Link>, including <Link to={COOKIE_POLICY_PAGE_ROUTE}>Cookie Use</Link>
							.
						</Warning>
						<Login>
							Already have an account? <Link to={SIGNIN_PAGE_ROUTE}>Log in</Link>
						</Login>
					</Info>
				</Container>
			</Page>
			<Footer>
				{footerLinks.map(({ link, title }, i) => (
					<FooterLink key={i} to={link}>
						{title}
					</FooterLink>
				))}
			</Footer>
		</>
	)
}

export default AuthPage
