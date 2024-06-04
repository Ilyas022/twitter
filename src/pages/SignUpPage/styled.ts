import styled from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
import { getColors, getFontWeights, getFonts, getIndents, getSizes } from 'utils/themeGetters'

export const Page = styled.main``

export const Container = styled.div`
	width: ${(props) => getSizes(props, 13, 10)};
	height: ${(props) => getSizes(props, 13, 130)};
	margin: 0 auto;
	padding: ${(props) => getIndents(props, 4, 6)} ${(props) => getIndents(props, 5)}
		${(props) => getIndents(props, 5)};
`

export const LogoIcon = styled(Logo)`
	width: ${(props) => getIndents(props, 5)};
	height: ${(props) => getSizes(props, 1, 1)};
	margin-bottom: ${(props) => getIndents(props, 5, -4)};
	color: ${(props) => getColors(props).primary};
`

export const Title = styled.h1`
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 5)};
	margin-bottom: ${(props) => getIndents(props, 5)};
`
