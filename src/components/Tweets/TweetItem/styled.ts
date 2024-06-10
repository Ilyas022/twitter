import styled from 'styled-components'

import Heart from 'assets/icons/heartIcon.svg?react'
import Options from 'assets/icons/optionsIcon.svg?react'
import {
	getBorders,
	getColors,
	getFontWeights,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

export const Tweet = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 0)};
	padding: ${(props) => getIndents(props, 1, 2)} ${(props) => getIndents(props, 5, -5)}
		${(props) => getIndents(props, 3)};
	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
`

export const UsetIcon = styled.img`
	width: ${(props) => getSizes(props, 2, 1)};
	height: ${(props) => getSizes(props, 2, 6)};
`

export const TweetInfo = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: ${(props) => getGaps(props, 0, -3)};
	margin-bottom: ${(props) => getIndents(props, 0, 1)};
`

export const UserNamee = styled.p`
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 2)};
`

export const TweetInner = styled.div``

export const UserInfoo = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 0, -5)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	opacity: 0.6;
`

export const Sepatarot = styled.span`
	display: block;
	width: ${(props) => getSizes(props, 0, -22)};
	height: ${(props) => getSizes(props, 0, -22)};
	background-color: ${(props) => getColors(props).black};
	opacity: 0.6;
`

export const UserTagg = styled.p``

export const CreationDate = styled.p``

export const TweetDescription = styled.p`
	font-size: ${(props) => getFonts(props, 1, 2)};
	margin-bottom: ${(props) => getIndents(props, 3)};
`

export const LikeCounter = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => getGaps(props, 0, 2)};
	font-size: ${(props) => getFonts(props, 1)};
	color: ${(props) => getColors(props).text};
`

export const LikeButton = styled.button`
	cursor: pointer;
	&:hover {
		color: ${(props) => getColors(props).error};
	}
`

export const LikeIcon = styled(Heart)`
	width: ${(props) => getSizes(props, 0)};
	height: ${(props) => getSizes(props, 0)};
`

export const LikeNumber = styled.p``

export const OptionsButton = styled.button`
	width: ${(props) => getSizes(props, 0, -7)};
	height: ${(props) => getSizes(props, 0, -20)};
`

export const OptionsIcon = styled(Options)`
	color: ${(props) => getColors(props).black};
`
