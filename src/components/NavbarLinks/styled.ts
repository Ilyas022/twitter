import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Bookmarks from 'assets/icons/navbar/bookmarksIcon.svg?react'
import Explore from 'assets/icons/navbar/exploreIcon.svg?react'
import Home from 'assets/icons/navbar/homeIcon.svg?react'
import Lists from 'assets/icons/navbar/listsIcon.svg?react'
import Messages from 'assets/icons/navbar/messagesIcon.svg?react'
import More from 'assets/icons/navbar/moreIcon.svg?react'
import Notification from 'assets/icons/navbar/notificationIcon.svg?react'
import Profile from 'assets/icons/navbar/profileIcon.svg?react'
import { getGaps, getIndents, getFontWeights, getFonts, getColors } from 'utils/themeGetters'

import { NavbarLinkProps } from './types'

export const BookmarksIcon = styled(Bookmarks)``
export const HomeIcon = styled(Home)``
export const ExploreIcon = styled(Explore)``
export const ListsIcon = styled(Lists)``
export const MessagesIcon = styled(Messages)``
export const MoreIcon = styled(More)``
export const NotificationIcon = styled(Notification)``
export const ProfileIcon = styled(Profile)``

export const LinksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 2)};
	width: fit-content;
	margin-bottom: ${(props) => getIndents(props, 4, 6)};
`

export const NavbarLink = styled(Link)<NavbarLinkProps>`
	display: inline-flex;
	align-items: center;
	width: fit-content;
	font-weight: ${(props) => getFontWeights(props, 3)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	gap: ${(props) => getGaps(props, 2)};
	transition: color 0.3s;
	color: ${(props) => props.$active && getColors(props).primary};

	&:hover {
		color: ${(props) => getColors(props).hover};
	}
`
