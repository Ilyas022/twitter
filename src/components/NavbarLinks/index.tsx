import React from 'react'
import { useLocation } from 'react-router-dom'

import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import { navbarLinks } from './config'
import { LinksContainer, NavbarLink } from './styled'

function NavbarLinks({ handleOpen }: { handleOpen?: () => void }) {
	const { pathname } = useLocation()
	const { id } = useTypedSelector(selectUser)

	const handleClick = () => {
		if (handleOpen) {
			handleOpen()
		}
	}
	return (
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
	)
}

export default NavbarLinks
