import styled from 'styled-components'

import {
	getBorders,
	getColors,
	getFontWeights,
	getFonts,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

export const TweetsTitle = styled.p`
	display: inline-block;
	width: ${(props) => getSizes(props, 8, -41)};
	padding: ${(props) => getIndents(props, 3)};
	text-align: center;
	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 1, 2)};
`

export const TweetsContainer = styled.div``

export const NoTweetsText = styled.p`
	margin-top: ${(props) => getIndents(props, 3)};
	font-size: ${(props) => getFonts(props, 3)};
	text-align: center;
`
