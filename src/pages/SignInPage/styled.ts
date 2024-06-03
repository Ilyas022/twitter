import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
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

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 3, 1)};
	width: ${(props) => getSizes(props, 10, 5)};
	margin-bottom: ${(props) => getIndents(props, 5)};
`

export const Input = styled.input`
	padding: ${(props) => getIndents(props, 4, 1)} ${(props) => getIndents(props, 3)};
	color: ${(props) => getColors(props).placeHolder};
	font-size: ${(props) => getFonts(props, 1, 2)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 3, 2)};
`

export const Button = styled.button`
	padding: ${(props) => getIndents(props, 3)};
	background-color: ${(props) => getColors(props).primary};
	border-radius: ${(props) => getBordersRadii(props, 4, 68)};
	text-align: center;
	color: ${(props) => getColors(props).white};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => getColors(props).hover};
	}
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
