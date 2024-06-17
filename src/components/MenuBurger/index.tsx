import { getAuth } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { AUTH_PAGE_ROUTE } from 'constants/routeLinks'
import { useActions } from 'hooks/useActions'
import { useScrollLock } from 'hooks/useScrollLock'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import { Button, LinksContainer, LogoIcon, Menu, NavbarLink, TogglerContainer } from './styled'
import { MenuBurgerProps } from './types'
import { navbarLinks } from '../Navbar/config'
import { ThemeToggler } from '../ThemeToggler'

function MenuBurger({ isOpened, handleOpen }: MenuBurgerProps) {
	const [lockScroll, unlockScroll] = useScrollLock()
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

	const handleClick = () => {
		handleOpen()
	}

	useEffect(() => {
		if (isOpened) {
			lockScroll()
		}

		return () => unlockScroll()
	}, [lockScroll, unlockScroll, isOpened])

	return (
		<Menu $open={isOpened}>
			<LogoIcon />
			<TogglerContainer>
				<ThemeToggler />
			</TogglerContainer>

			<LinksContainer>
				{navbarLinks.map(({ icon, title, path }) => {
					const linkPath = title === 'Profile' ? `/profile/${id}` : path
					const active = title === 'Profile' ? `${pathname}` === `${path}/${id}` : pathname === path

					return (
						<NavbarLink onClick={handleClick} to={linkPath} key={title} $active={active}>
							{React.createElement(icon)}
							<p>{title}</p>
						</NavbarLink>
					)
				})}
			</LinksContainer>

			<Button onClick={handleLogOutClick}>Log out</Button>
		</Menu>
	)
}

export default MenuBurger
