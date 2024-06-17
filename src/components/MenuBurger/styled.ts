import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
import Bookmarks from 'assets/icons/navbar/bookmarksIcon.svg?react'
import Explore from 'assets/icons/navbar/exploreIcon.svg?react'
import Home from 'assets/icons/navbar/homeIcon.svg?react'
import Lists from 'assets/icons/navbar/listsIcon.svg?react'
import Messages from 'assets/icons/navbar/messagesIcon.svg?react'
import More from 'assets/icons/navbar/moreIcon.svg?react'
import Notification from 'assets/icons/navbar/notificationIcon.svg?react'
import Profile from 'assets/icons/navbar/profileIcon.svg?react'
import {
	getBordersRadii,
	getColors,
	getFontWeights,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

import { MenuProps, NavbarLinkProps } from './types'

export const BookmarksIcon = styled(Bookmarks)``
export const HomeIcon = styled(Home)``
export const ExploreIcon = styled(Explore)``
export const ListsIcon = styled(Lists)``
export const MessagesIcon = styled(Messages)``
export const MoreIcon = styled(More)``
export const NotificationIcon = styled(Notification)``
export const ProfileIcon = styled(Profile)``

const pcTabletBreakPoint = '1000px'

export const Menu = styled.div<MenuProps>`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 5;
	display: none;
	width: 100%;
	align-items: stretch;
	background-color: ${({ theme }) => theme.colors.popUpBg};
	transform: translateX(100%);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	@media ${`(max-width: ${pcTabletBreakPoint})`} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: ${(props) => getIndents(props, 1, 2)};
		color: ${(props) => getColors(props).white};
	}

	${(props) =>
		props.$open &&
		css`
			transform: translateX(0);
		`}

	> a {
		text-align: center;
		color: ${({ theme }) => theme.colors.white};
		font-size: ${(props) => getFonts(props, 1)};
	}
	> *:not(:last-child) {
		margin-bottom: ${(props) => getIndents(props, 1, 2)};
	}
`

export const TogglerContainer = styled.div`
	background-color: ${(props) => getColors(props).secondary};
	border-radius: ${(props) => getBordersRadii(props, 4, 17)};
	height: min-content;

	& > label {
		display: block;
	}
`

export const LogoIcon = styled(Logo)`
	color: ${(props) => getColors(props).primary};
	width: ${(props) => getSizes(props, 1, 8)};
	height: ${(props) => getSizes(props, 1, 1)};
	margin-bottom: ${(props) => getIndents(props, 5, 9)};
`

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
