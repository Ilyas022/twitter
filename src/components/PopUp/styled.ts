import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import {
	getBorders,
	getColors,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
	getlineHeights,
} from 'utils/themeGetters'

const smallScreenEnd = '1024px'

export const PopUpComp = styled.div`
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => getColors(props).popUpBg};
`

export const PopUpContainer = styled.div`
	position: relative;
	width: 45%;
	padding: 0 ${(props) => getIndents(props, 3)};
	background-color: ${(props) => getColors(props).secondary};
	border-radius: ${(props) => getBorders(props, 4)};

	@media (max-width: ${smallScreenEnd}) {
		width: 70%;
	}

	@media ${device.sm} {
		width: 90%;
	}
`

export const PopUpHeader = styled.div`
	padding: ${(props) => getIndents(props, 3)} 0;
	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).popUpBg};
`

export const Title = styled.p`
	font-size: ${(props) => getFonts(props, 4, 4)};
	line-height: ${(props) => getlineHeights(props, 5, 8)};
	text-align: center;

	@media ${device.md} {
		font-size: ${(props) => getFonts(props, 2)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 1, 2)};
	}
`

export const PopUpBody = styled.div`
	max-height: 80vh;
	overflow-y: auto;
	scrollbar-width: thin;
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 2)};
	font-size: ${(props) => getFonts(props, 2)};
	line-height: ${(props) => getlineHeights(props, 5, 8)};
	padding: ${(props) => getIndents(props, 3)} 0;

	@media ${device.md} {
		font-size: ${(props) => getFonts(props, 1)};
	}

	@media ${device.sm} {
		font-size: ${(props) => getFonts(props, 0)};
	}
`

export const CloseBtn = styled.button`
	position: absolute;
	right: ${(props) => getIndents(props, 3)};
	top: ${(props) => getIndents(props, 3, 2)};
	width: ${(props) => getSizes(props, 1)};
	height: ${(props) => getSizes(props, 1)};
	opacity: 0.5;
	transition: opacity 0.3s ease 0s;

	@media ${device.md} {
		top: ${(props) => getIndents(props, 2, 1)};
	}

	&:hover {
		opacity: 1;
	}

	&:before,
	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		height: 100%;
		width: ${(props) => getSizes(props, 0, -22)};
		background-color: ${(props) => getColors(props).primary};
	}
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`
