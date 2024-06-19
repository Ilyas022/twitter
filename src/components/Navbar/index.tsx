import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

import defaultUserIcon from 'assets/images/defaultUserIcon.png'
import AddTweet from 'components/AddTweet'
import NavbarLinks from 'components/NavbarLinks'
import PopUp from 'components/PopUp'
import { AUTH_PAGE_ROUTE } from 'constants/routes'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import {
	Button,
	LogoIcon,
	NavbarItem,
	ProfileCarTag,
	ProfileCard,
	ProfileCardIcon,
	ProfileCardInfo,
	ProfileCardName,
} from './styled'

function Navbar() {
	const { name, imageUrl, tag } = useTypedSelector(selectUser)
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
			<NavbarLinks />
			<Button onClick={handleOpenPopUp}>Tweet</Button>
			<ProfileCard>
				<ProfileCardIcon src={imageUrl || defaultUserIcon} />
				<ProfileCardInfo>
					<ProfileCardName>{name}</ProfileCardName>
					<ProfileCarTag>{tag}</ProfileCarTag>
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
