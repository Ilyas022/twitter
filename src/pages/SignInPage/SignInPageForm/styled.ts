import styled, { css } from 'styled-components'

import { device } from 'constants/breakpoints'
import { getBorders, getBordersRadii, getColors, getFontWeights, getFonts, getGaps, getIndents } from 'utils/themeGetters'

import { InputProps } from './types'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: ${(props) => getGaps(props, 3, 1)};
	margin-bottom: ${(props) => getIndents(props, 5)};

	@media ${device.md} {
		gap: 0;
		margin-bottom: ${(props) => getIndents(props, 5)};

		& > :last-child {
			margin-top: ${(props) => getIndents(props, 2)};
		}
	}
`

export const Input = styled.input<InputProps>`
	display: block;
	width: 100%;
	padding: ${(props) => getIndents(props, 4, 1)} ${(props) => getIndents(props, 3)};
	margin-bottom: ${(props) => getIndents(props, 2, -1)};
	color: ${(props) => getColors(props).textColor};
	font-size: ${(props) => getFonts(props, 1, 2)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	background-color: ${(props) => getColors(props).bg};
	border-radius: ${(props) => getBordersRadii(props, 3, 2)};

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
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
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
