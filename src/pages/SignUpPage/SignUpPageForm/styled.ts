import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

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
	getlineHeights,
} from 'utils/themeGetters'

import { InputProps } from './types'

export const SubTitle = styled.h2`
	margin-bottom: ${(props) => getIndents(props, 4, 8)};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 1, 2)};

	@media ${device.md} {
		margin-bottom: ${(props) => getIndents(props, 3)};
	}
`

export const Text = styled.p`
	margin-bottom: ${(props) => getIndents(props, 4, 8)};
	font-size: ${(props) => getFonts(props, 1)};
	line-height: ${(props) => getlineHeights(props, 6)};

	@media ${device.md} {
		margin-bottom: ${(props) => getIndents(props, 1)};
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: ${(props) => getIndents(props, 5)};
`

export const Input = styled.input<InputProps>`
	display: block;
	width: 100%;
	padding: ${(props) => getIndents(props, 4, 1)} ${(props) => getIndents(props, 3)};
	margin-bottom: ${(props) => getIndents(props, 2, -1)};
	color: ${(props) => getColors(props).placeHolder};
	font-size: ${(props) => getFonts(props, 1, 2)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 3, 2)};
	background-color: ${(props) => getColors(props).bg};
	color: ${(props) => getColors(props).textColor};

	${({ $error }) =>
		$error &&
		css`
			border-color: ${(props) => getColors(props).error};
		`}

	@media ${device.md} {
		padding: ${(props) => getIndents(props, 3)};
		margin-bottom: ${(props) => getIndents(props, 1)};
	}
`

export const Button = styled.button`
	padding: ${(props) => getIndents(props, 3)};
	background-color: ${(props) => getColors(props).primary};
	border-radius: ${(props) => getBordersRadii(props, 4, 68)};
	text-align: center;
	color: ${(props) => getColors(props).white};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	font-size: ${(props) => getFonts(props, 1, 2)};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => getColors(props).hover};
	}

	&:disabled {
		background-color: ${(props) => getColors(props).placeHolder};

		&:hover {
			background-color: ${(props) => getColors(props).secondary};
		}
	}
`

export const AuthLink = styled(Link)`
	margin-bottom: ${(props) => getIndents(props, 2, 1)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	color: ${(props) => getColors(props).primary};
	transition: color 0.3s;

	&:hover {
		color: ${(props) => getColors(props).hover};
	}
`

export const SelectContainer = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 2)};
	margin-bottom: ${(props) => getIndents(props, 5, -2)};

	& > * {
		flex-grow: 1;
	}

	& > :first-child {
		width: ${(props) => getSizes(props, 9, -38)};
	}

	@media ${device.md} {
		margin-bottom: ${(props) => getIndents(props, 3)};
	}
`
