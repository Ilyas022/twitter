import React from 'react'
import { useLocation } from 'react-router-dom'

import defaultUserIcon from 'assets/images/defaultUserIcon.png'
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
	const { tag } = useTypedSelector(selectUser)

	return (
		<NavbarItem>
			<LogoIcon />
			<LinksContainer>
				{navbarLinks.map(({ icon, title, path }) => {
					const linkPath = title === 'Profile' ? `/profile/${tag.slice(1)}` : path
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
		</NavbarItem>
	)
}

export default Navbar
