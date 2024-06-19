import { getAuth } from 'firebase/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import NavbarLinks from 'components/NavbarLinks'
import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useActions } from 'hooks/useActions'
import { useScrollLock } from 'hooks/useScrollLock'

import { Button, LogoIcon, Menu, TogglerContainer } from './styled'
import { MenuBurgerProps } from './types'
import { ThemeToggler } from '../ThemeToggler'

function MenuBurger({ isOpened, handleOpen }: MenuBurgerProps) {
	const [lockScroll, unlockScroll] = useScrollLock()
	const auth = getAuth()

	const { unSetUser } = useActions()

	const navigate = useNavigate()

	const handleLogOutClick = () => {
		auth.signOut()
		unSetUser()
		navigate(AUTH_PAGE_ROUTE)
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
			<NavbarLinks handleOpen={handleOpen} />
			<Button onClick={handleLogOutClick}>Log out</Button>
		</Menu>
	)
}

export default MenuBurger
