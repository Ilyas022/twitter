import styled from 'styled-components'

import Search from 'assets/icons/searchIcon.svg?react'
import {
	getBordersRadii,
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

export const SearchBarItem = styled.div`
	padding-top: ${(props) => getIndents(props, 3)};
	padding-left: ${(props) => getIndents(props, 5)};
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
`

export const SeacrhInput = styled.input`
	background-color: transparent;
	font-size: ${(props) => getFonts(props, 1, 2)};
	color: ${(props) => getColors(props).text};
	margin-right: auto;
`

export const LikeIcon = styled(Search)`
	width: ${(props) => getSizes(props, 0)};
	height: ${(props) => getSizes(props, 0)};
`

export const TweetsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 0, 2)};
	min-height: ${(props) => getSizes(props, 5)};
	background-color: ${(props) => getColors(props).secondary};
	border-radius: ${(props) => getBordersRadii(props, 4, 2)};
	overflow: hidden;
`

export const SearchTweetItem = styled.button`
	display: flex;
	gap: ${(props) => getGaps(props, 0, 2)};
	transition: all 0.3s;
	border-radius: ${(props) => getBordersRadii(props, 4, 2)};
	overflow: hidden;

	&:hover {
		background-color: ${(props) => getColors(props).border};
	}
`

export const TweetImage = styled.img`
	width: ${(props) => getSizes(props, 6, 3)};
	height: ${(props) => getSizes(props, 3, 16)};
	border-radius: ${(props) => getBordersRadii(props, 4, 2)};
`

export const TweetText = styled.p`
	padding: ${(props) => getIndents(props, 1, 2)};
	font-size: ${(props) => getFonts(props, 1)};
`

export const NoTweetsText = styled.p`
	font-size: ${(props) => getFonts(props, 1)};
	text-align: center;
	margin: auto 0;
`
