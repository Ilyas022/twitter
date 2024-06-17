import styled, { css } from 'styled-components'

import Search from 'assets/icons/searchIcon.svg?react'
import { device } from 'constants/breakpoints'
import {
	getBordersRadii,
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

import { ContainerProps } from './types'

const largeBreakPoint = '1600px'
const pcTabletBreakPoint = '1000px'

export const SearchBarItem = styled.div`
	padding-top: ${(props) => getIndents(props, 3)};
	padding-left: ${(props) => getIndents(props, 5)};

	@media ${`(max-width: ${largeBreakPoint})`} {
		position: absolute;
		top: ${(props) => getSizes(props, 0, -11)};
		right: ${(props) => getSizes(props, 1, -2)};
		padding: 0;
	}

	@media ${`(max-width: ${pcTabletBreakPoint})`} {
		right: ${(props) => getSizes(props, 5)};
	}

	@media ${device.sm} {
		top: ${(props) => getSizes(props, 0, -9)};
		right: unset;
		left: ${(props) => getSizes(props, 1, -2)};
	}
`

export const SeacrhContainer = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 2)};
	padding: ${(props) => getIndents(props, 2, -1)} ${(props) => getIndents(props, 3)};
	border-radius: ${(props) => getBordersRadii(props, 4, 23)};
	width: ${(props) => getSizes(props, 9, 23)};
	height: ${(props) => getSizes(props, 2, 7)};
	background-color: ${(props) => getColors(props).secondary};
	margin-bottom: ${(props) => getIndents(props, 4, 6)};

	@media ${`(max-width: ${largeBreakPoint})`} {
		padding: ${(props) => getIndents(props, 2)};
	}

	@media ${device.sm} {
		height: auto;
		width: auto;

		gap: ${(props) => getGaps(props, 0, 2)};
		padding: ${(props) => getIndents(props, 1, 2)} ${(props) => getIndents(props, 3)};
	}
`

export const SeacrhInput = styled.input`
	background-color: transparent;
	font-size: ${(props) => getFonts(props, 1, 2)};
	color: ${(props) => getColors(props).textColor};
	margin-right: auto;

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0)};
	}
`

export const LikeIcon = styled(Search)`
	width: ${(props) => getSizes(props, 0)};
	height: ${(props) => getSizes(props, 0)};

	@media ${device.sm} {
		width: ${(props) => getSizes(props, 0, -10)};
		height: ${(props) => getSizes(props, 0, -10)};
	}
`

export const TweetsContainer = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: ${(props) => getGaps(props, 0, 2)};
	min-height: ${(props) => getSizes(props, 5)};
	background-color: ${(props) => getColors(props).secondary};
	border-radius: ${(props) => getBordersRadii(props, 4, 2)};
	overflow: hidden;
	padding: ${(props) => getIndents(props, 1, 2)};

	${({ $opened }) =>
		!$opened &&
		css`
			display: none;
		`}

	@media ${`(max-width: ${largeBreakPoint})`} {
		min-height: ${(props) => getSizes(props, 3)};
	}
`

export const SearchTweetItem = styled.button`
	display: flex;
	gap: ${(props) => getGaps(props, 0, 2)};
	transition: all 0.3s;
	border-radius: ${(props) => getBordersRadii(props, 4, 2)};
	overflow: hidden;
	padding: ${(props) => getIndents(props, 1, 2)};

	&:hover {
		background-color: ${(props) => getColors(props).border};
	}
`

export const TweetText = styled.p`
	font-size: ${(props) => getFonts(props, 1)};
`

export const NoTweetsText = styled.p`
	font-size: ${(props) => getFonts(props, 1)};
	text-align: center;
	margin: auto 0;
`

export const UserImage = styled.img`
	border-radius: 50%;
	object-fit: cover;
	width: ${(props) => getSizes(props, 2)};
	height: ${(props) => getSizes(props, 2)};

	@media ${`(max-width: ${largeBreakPoint})`} {
		width: ${(props) => getSizes(props, 2)};
		height: ${(props) => getSizes(props, 2)};
	}
`
