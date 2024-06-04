import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
import { getColors, getFontWeights, getFonts, getIndents, getSizes } from 'utils/themeGetters'

export const Page = styled.main`
	padding: ${(props) => getIndents(props, 6, 4)};
`

export const Container = styled.div`
	width: ${(props) => getSizes(props, 10, 5)};
	height: ${(props) => getSizes(props, 10, 28)};
	margin: 0 auto;
`

export const LogoIcon = styled(Logo)`
	width: ${(props) => getSizes(props, 2, 2)};
	height: ${(props) => getSizes(props, 2, -7)};
	margin-bottom: ${(props) => getIndents(props, 5, -4)};
	color: ${(props) => getColors(props).primary};
`

export const Title = styled.h1`
	font-weight: ${(props) => getFontWeights(props, 4)};
	font-size: ${(props) => getFonts(props, 6, 4)};
	margin-bottom: ${(props) => getIndents(props, 5, -4)};
`

export const SignUp = styled(Link)`
	display: block;
	font-size: ${(props) => getFonts(props, 1, 2)};
	text-align: right;
	color: ${(props) => getColors(props).primary};
	text-align: right;
	transition: color 0.3s;

	&:hover {
		color: ${(props) => getColors(props).hover};
	}
`
