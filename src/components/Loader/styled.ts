import styled, { keyframes } from 'styled-components'

import { getBorders, getColors, getIndents } from 'utils/themeGetters'

const prixClipFix = keyframes`
	0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
	25%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
	50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
	75%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)}
	100% {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)}
`

const rotate = keyframes`
to {
	transform: rotate(360deg)
	}
`

export const LoaderItem = styled.span`
	width: ${(props) => getIndents(props, 4, 6)};
	height: ${(props) => getIndents(props, 4, 6)};
	border-radius: 50%;
	position: relative;
	animation: ${rotate} 1s linear infinite;
	&:before {
		content: '';
		box-sizing: border-box;
		position: absolute;
		inset: 0px;
		border-radius: 50%;
		border: ${(props) => getBorders(props, 2, 1)} solid ${(props) => getColors(props).black};
		animation: ${prixClipFix} 2s linear infinite;
	}
`
