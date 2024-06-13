import { getAuth } from 'firebase/auth'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useLocation, useNavigate } from 'react-router-dom'

import defaultUserIcon from 'assets/images/defaultUserIcon.png'
import AddTweet from 'components/AddTweet'
import PopUp from 'components/PopUp'
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
	const [popUpOpen, setPopUpOpen] = useState(false)

	const handleLogOutClick = () => {
		auth.signOut()
		unSetUser()
		navigate(AUTH_PAGE_ROUTE)
	}

	const handleOpenPopUp = () => {
		setPopUpOpen((prev) => !prev)
	}

	return (
		<NavbarItem>
			<LogoIcon />
			<LinksContainer>
				{navbarLinks.map(({ icon, title, path }) => {
					const linkPath = title === 'Profile' ? `/profile/${id}` : path
					const active = title === 'Profile' ? `${pathname}` === `${path}/${id}` : pathname === path

					return (
						<NavbarLink to={linkPath} key={title} $active={active}>
							{React.createElement(icon)}
							<p>{title}</p>
						</NavbarLink>
					)
				})}
			</LinksContainer>
			<Button onClick={handleOpenPopUp}>Tweet</Button>
			<ProfileCard>
				<ProfileCardIcon src={defaultUserIcon} />
				<ProfileCardInfo>
					<ProfileCardName>Bobur</ProfileCardName>
					<ProfileCarTag>@bobur_mavlonov</ProfileCarTag>
				</ProfileCardInfo>
			</ProfileCard>
			<Button onClick={handleLogOutClick}>Log out</Button>
			{popUpOpen &&
				createPortal(
					<PopUp handleClose={handleOpenPopUp} title="Add tweet">
						<AddTweet onClose={handleOpenPopUp} />
					</PopUp>,
					document.body
				)}
		</NavbarItem>
	)
}

export default Navbar
