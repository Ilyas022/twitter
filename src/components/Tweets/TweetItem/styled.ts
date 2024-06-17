import styled, { css } from 'styled-components'

import Heart from 'assets/icons/heartIcon.svg?react'
import HeartActive from 'assets/icons/heartIconActive.svg?react'
import Options from 'assets/icons/optionsIcon.svg?react'
import { device } from 'constants/breakpoints'
import {
	getBorders,
	getBordersRadii,
	getColors,
	getFontWeights,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

export const Tweet = styled.div`
	position: relative;
	display: flex;
	gap: ${(props) => getGaps(props, 0)};
	// prettier-ignore
	padding: ${(props) => getIndents(props, 1, 2)} ${(props) => getIndents(props, 5, -5)} ${(props) =>
		getIndents(props, 3)};

	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};

	display: grid;
	grid-template-columns: auto 1fr auto;
	grid-template-rows: auto auto;

	@media ${device.sm} {
		padding: ${(props) => getIndents(props, 1, 2)};
	}
`

export const UsetIcon = styled.img`
	width: ${(props) => getSizes(props, 2, 2)};
	height: ${(props) => getSizes(props, 2, 2)};
`

export const TweetInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: ${(props) => getGaps(props, 0, -3)};
	margin-bottom: ${(props) => getIndents(props, 0, 1)};

	@media ${device.sm} {
		flex-direction: column;
	}
`

export const UserName = styled.p`
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 2)};

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 1)};
	}
`

export const TweetInner = styled.div``

export const UserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 0, -5)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	opacity: 0.6;

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0)};
	}
`

export const Sepatarot = styled.span`
	display: block;
	width: ${(props) => getSizes(props, 0, -22)};
	height: ${(props) => getSizes(props, 0, -22)};
	background-color: ${(props) => getColors(props).black};
	opacity: 0.6;
`

export const UserTag = styled.p``

export const CreationDate = styled.p``

export const TweetDescription = styled.p`
	font-size: ${(props) => getFonts(props, 1, 2)};
	margin-bottom: ${(props) => getIndents(props, 3)};
`

export const TweetImage = styled.img`
	border-radius: ${(props) => getBordersRadii(props, 4, 12)};
	width: ${(props) => getSizes(props, 12, 79)};
	width: 100%;
	margin-bottom: ${(props) => getIndents(props, 3, 2)};

	grid-column: 2 / 3;

	@media ${device.md} {
		grid-column: 1 / 4;
	}
`

export const LikeCounter = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 0, 2)};
	font-size: ${(props) => getFonts(props, 1)};
	color: ${(props) => getColors(props).text};
	grid-row: 3;
	grid-column: 2;

	@media ${device.md} {
		grid-column: 1;
	}
`

export const LikeButton = styled.button<{ $isLiked: boolean }>`
	cursor: pointer;

	&:hover {
		color: ${(props) => getColors(props).error};
	}

	${({ $isLiked }) =>
		$isLiked &&
		css`
			color: ${(props) => getColors(props).error};
		`}
`

export const LikeIcon = styled(Heart)`
	width: ${(props) => getSizes(props, 0)};
	height: ${(props) => getSizes(props, 0)};
`
export const LikeIconActive = styled(HeartActive)`
	width: ${(props) => getSizes(props, 0)};
	height: ${(props) => getSizes(props, 0)};
`

export const LikeNumber = styled.p``

export const OptionsButton = styled.button`
	margin-left: auto;
	width: ${(props) => getSizes(props, 0, -7)};
	height: ${(props) => getSizes(props, 0, -4)};
	font-size: 0;

	@media ${device.md} {
		height: ${(props) => getSizes(props, 0, -9)};
	}
`

export const OptionsPopUp = styled.div`
	position: absolute;
	top: ${(props) => getSizes(props, 1, 8)};
	right: 0px;
	padding: ${(props) => getIndents(props, 3)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 4)};
`

export const OptionsItem = styled.button`
	font-size: ${(props) => getFonts(props, 1)};
	color: ${(props) => getColors(props).error};
`

export const OptionsIcon = styled(Options)`
	color: ${(props) => getColors(props).textColor};
`
