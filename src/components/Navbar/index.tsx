import { getAuth } from 'firebase/auth'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import defaultUserIcon from 'assets/images/defaultUserIcon.png'
import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import { navbarLinks } from './config'
import {
	Button,
	LinksContainer,
	LogoIcon,
	NavbarItem,
	NavbarLink,
	ProfileCarTag,
	ProfileCard,
	ProfileCardIcon,
	ProfileCardInfo,
	ProfileCardName,
} from './styled'

function Navbar() {
	const { pathname } = useLocation()
	const { id } = useTypedSelector(selectUser)
	const auth = getAuth()
	const { unSetUser } = useActions()
	const navigate = useNavigate()

	const handleLogOutClick = () => {
		auth.signOut()
		unSetUser()
		navigate(AUTH_PAGE_ROUTE)
	}

	return (
		<NavbarItem>
			<LogoIcon />
			<LinksContainer>
				{navbarLinks.map(({ icon, title, path }) => {
					const linkPath = title === 'Profile' ? `/profile/${id}` : path
					return (
						<NavbarLink to={linkPath} key={title} $active={pathname === path}>
							{React.createElement(icon)}
							<p>{title}</p>
						</NavbarLink>
					)
				})}
			</LinksContainer>
			<Button>Tweet</Button>
			<ProfileCard>
				<ProfileCardIcon src={defaultUserIcon} />
				<ProfileCardInfo>
					<ProfileCardName>Bobur</ProfileCardName>
					<ProfileCarTag>@bobur_mavlonov</ProfileCarTag>
				</ProfileCardInfo>
			</ProfileCard>
			<Button onClick={handleLogOutClick}>Log out</Button>
		</NavbarItem>
	)
}

export default Navbar
