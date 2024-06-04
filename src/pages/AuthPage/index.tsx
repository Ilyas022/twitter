import { Link, useNavigate } from 'react-router-dom'

import authImg from 'assets/images/AuthImg.png'
import {
	COOKIE_POLICY_PAGE_ROUTE,
	PRIVACY_PAGE_ROUTE,
	SIGNIN_PAGE_ROUTE,
	SIGNUP_PAGE_ROUTE,
	TERMS_PAGE_ROUTE,
} from 'constants/routes'

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
	const navigate = useNavigate()

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
						<Button>
							<GoogleIcon />
							<span>Sign up with Google</span>
						</Button>
						<Button onClick={handleSignUpWithEmailClick}>Sign up with email</Button>
						<Warning>
							By singing up you agree to the <Link to={TERMS_PAGE_ROUTE}>Terms of Service</Link> and{' '}
							<Link to={PRIVACY_PAGE_ROUTE}>Privacy Policy</Link>, including{' '}
							<Link to={COOKIE_POLICY_PAGE_ROUTE}>Cookie Use</Link>.
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
