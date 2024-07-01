import styled from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
import Bookmarks from 'assets/icons/navbar/bookmarksIcon.svg?react'
import Explore from 'assets/icons/navbar/exploreIcon.svg?react'
import Home from 'assets/icons/navbar/homeIcon.svg?react'
import Lists from 'assets/icons/navbar/listsIcon.svg?react'
import Messages from 'assets/icons/navbar/messagesIcon.svg?react'
import More from 'assets/icons/navbar/moreIcon.svg?react'
import Notification from 'assets/icons/navbar/notificationIcon.svg?react'
import Profile from 'assets/icons/navbar/profileIcon.svg?react'
import { getBordersRadii, getColors, getFontWeights, getFonts, getGaps, getIndents, getSizes } from 'utils/themeGetters'

const pcTabletBreakPoint = '1000px'

export const BookmarksIcon = styled(Bookmarks)``
export const HomeIcon = styled(Home)``
export const ExploreIcon = styled(Explore)``
export const ListsIcon = styled(Lists)``
export const MessagesIcon = styled(Messages)``
export const MoreIcon = styled(More)``
export const NotificationIcon = styled(Notification)``
export const ProfileIcon = styled(Profile)``

export const NavbarItem = styled.nav`
	padding-top: ${(props) => getIndents(props, 4, 7)};
	width: ${(props) => getSizes(props, 8, -25)};

	@media ${`(max-width: ${pcTabletBreakPoint})`} {
		display: none;
	}
`

export const LogoIcon = styled(Logo)`
	color: ${(props) => getColors(props).primary};
	width: ${(props) => getSizes(props, 1, 8)};
	height: ${(props) => getSizes(props, 1, 1)};
	margin-bottom: ${(props) => getIndents(props, 5, 9)};
`

export const Button = styled.button`
	width: 100%;
	text-align: center;
	padding: ${(props) => getIndents(props, 2, 2)};
	background-color: ${(props) => getColors(props).primary};
	border-radius: ${(props) => getBordersRadii(props, 4, 19)};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	color: ${(props) => getColors(props).white};
	margin-bottom: ${(props) => getIndents(props, 9, 4)};

	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => getColors(props).hover};
	}
`

export const ProfileCard = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 5, -3)};
	margin-bottom: ${(props) => getIndents(props, 5)};
`

export const ProfileCardIcon = styled.img`
	width: ${(props) => getSizes(props, 2)};
	height: ${(props) => getSizes(props, 2)};
	border-radius: 50%;
	object-fit: cover;
`

export const ProfileCardInfo = styled.div``

export const ProfileCardName = styled.p`
	font-weight: ${(props) => getFontWeights(props, 3)};
	font-size: ${(props) => getFonts(props, 1)};
	margin-bottom: ${(props) => getIndents(props, 0)};
`

export const ProfileCarTag = styled.p`
	font-weight: ${(props) => getFontWeights(props, 1)};
	font-size: ${(props) => getFonts(props, 1)};
`
