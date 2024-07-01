import styled from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
import { device } from 'constants/breakpoints'
import { getColors, getFontWeights, getFonts, getIndents, getSizes } from 'utils/themeGetters'

const signUpContainerLgWidth = 70
const signUpContainerMdWidth = 95

export const Page = styled.main``

export const Container = styled.div`
	width: ${(props) => getSizes(props, 13, 10)};
	margin: 0 auto;
	padding: ${(props) => getIndents(props, 4, 6)} ${(props) => getIndents(props, 5)} ${(props) => getIndents(props, 5)};

	@media ${device.lg} {
		width: ${signUpContainerLgWidth};
	}

	@media ${device.md} {
		width: ${signUpContainerMdWidth} 'vw';
		padding: ${(props) => getIndents(props, 2)};
	}
`

export const LogoIcon = styled(Logo)`
	width: ${(props) => getIndents(props, 5)};
	height: ${(props) => getSizes(props, 1, 1)};
	margin-bottom: ${(props) => getIndents(props, 5, -4)};
	color: ${(props) => getColors(props).primary};

	@media ${device.md} {
		margin-bottom: ${(props) => getIndents(props, 3)};
	}
`

export const Title = styled.h1`
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 5)};
	margin-bottom: ${(props) => getIndents(props, 5)};

	@media ${device.md} {
		margin-bottom: ${(props) => getIndents(props, 2)};
	}
`
