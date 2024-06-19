import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import MenuBurger from 'components/MenuBurger'
import BurgerButton from 'components/MenuBurger/BurgerBtn'
import Navbar from 'components/Navbar'
import { Wrapper } from 'components/PrivateRoute/styled'

function Layout() {
	const [isMenuOpened, setMenuOpened] = useState(false)
	const handleOpen = () => {
		setMenuOpened((prev) => !prev)
	}

	return (
		<>
			<Wrapper>
				<Navbar />
				<Outlet />
				<BurgerButton isOpened={isMenuOpened} setOpened={handleOpen} />
			</Wrapper>
			<MenuBurger handleOpen={handleOpen} isOpened={isMenuOpened} />
		</>
	)
}

export default Layout
