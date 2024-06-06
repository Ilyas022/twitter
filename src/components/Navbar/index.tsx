import React from 'react'
import { useLocation } from 'react-router-dom'

import defaultUserIcon from 'assets/images/defaultUserIcon.png'

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

	return (
		<NavbarItem>
			<LogoIcon />
			<LinksContainer>
				{navbarLinks.map(({ icon, title, path }) => (
					<NavbarLink to={path} key={title} $active={pathname === path}>
						{React.createElement(icon)}
						<p>{title}</p>
					</NavbarLink>
				))}
			</LinksContainer>
			<Button>Tweet</Button>
			<ProfileCard>
				<ProfileCardIcon src={defaultUserIcon} />
				<ProfileCardInfo>
					<ProfileCardName>Bobur</ProfileCardName>
					<ProfileCarTag>@bobur_mavlonov</ProfileCarTag>
				</ProfileCardInfo>
			</ProfileCard>
		</NavbarItem>
	)
}

export default Navbar
