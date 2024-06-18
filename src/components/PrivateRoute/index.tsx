import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import MenuBurger from 'components/MenuBurger'
import BurgerButton from 'components/MenuBurger/BurgerBtn'
import Navbar from 'components/Navbar'
import { AUTH_PAGE_ROUTE } from 'constants/routeLinks'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import { Wrapper } from './styled'

function PrivateRoute() {
	const [isMenuOpened, setMenuOpened] = useState(false)
	const { id } = useTypedSelector(selectUser)
	const { unSetUser } = useActions()
	const auth = getAuth()
	const navigate = useNavigate()

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (!user) {
				unSetUser()
				navigate(AUTH_PAGE_ROUTE)
			}
		})
	}, [])
	const handleOpen = () => {
		setMenuOpened((prev) => !prev)
	}

	if (!id) {
		return <Navigate to={AUTH_PAGE_ROUTE} />
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

export default PrivateRoute
