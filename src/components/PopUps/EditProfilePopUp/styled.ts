import styled, { css } from 'styled-components'

import AddImage from 'assets/icons/placeHolderImageIcon.svg?react'
import {
	getIndents,
	getColors,
	getFonts,
	getBorders,
	getBordersRadii,
	getFontWeights,
	getSizes,
	getGaps,
} from 'utils/themeGetters'

export const Form = styled.form`
	padding-right: ${(props) => getIndents(props, 1)};
`

export const Input = styled.input<{ $error: boolean }>`
	display: block;
	width: 100%;
	padding: ${(props) => getIndents(props, 1, 2)};
	margin-bottom: ${(props) => getIndents(props, 2, -1)};
	color: ${(props) => getColors(props).placeHolder};
	font-size: ${(props) => getFonts(props, 1, 2)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 3, 2)};

	${({ $error }) =>
		$error &&
		css`
			border-color: ${(props) => getColors(props).error};
		`}
`

export const Button = styled.button`
	margin-top: ${(props) => getIndents(props, 5)};
	display: block;
	width: 100%;
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

	&:disabled {
		background-color: ${(props) => getColors(props).placeHolder};

		&:hover {
			background-color: ${(props) => getColors(props).popUpBg};
		}
	}
`

export const ImageContainer = styled.label`
	display: flex;
	gap: ${(props) => getGaps(props, 4)};
`

export const ImageText = styled.p``

export const AddImageBtn = styled.label`
	width: ${(props) => getSizes(props, 0)};
	height: ${(props) => getSizes(props, 0)};
	cursor: pointer;
	color: ${(props) => getColors(props).primary};
	transition: color 0.3s;

	&:hover {
		color: ${(props) => getColors(props).hover};
	}
`

export const ImageInput = styled.input`
	display: none;
`

export const AddImageIcon = styled(AddImage)``
