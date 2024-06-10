import styled from 'styled-components'

import AddImage from 'assets/icons/placeHolderImageIcon.svg?react'
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

export const Item = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 4, -2)};
	padding: ${(props) => getIndents(props, 1, 2)} ${(props) => getIndents(props, 2, -1)}
		${(props) => getIndents(props, 4, 4)};
	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
`

export const UserIcon = styled.img`
	width: ${(props) => getSizes(props, 2, 1)};
	height: ${(props) => getSizes(props, 2, 6)};
`

export const Container = styled.div`
	flex-grow: 1;
`

export const TextArea = styled.textarea`
	width: 100%;
	font-weight: ${(props) => getFontWeights(props, 3)};
	font-size: ${(props) => getFonts(props, 2, 2)};
	color: ${(props) => getColors(props).text};
	resize: none;
`

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

export const Input = styled.input`
	display: none;
`

export const AddImageIcon = styled(AddImage)``

export const AddTweetBtn = styled.button`
	border-radius: ${(props) => getBordersRadii(props, 4, 112)};
	padding: ${(props) => getIndents(props, 2, -1)} ${(props) => getIndents(props, 4, 6)}
		${(props) => getIndents(props, 2, 2)} ${(props) => getIndents(props, 4, 6)};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 1, 1)};
	line-height: 100%;
	color: ${(props) => getColors(props).white};
	background-color: ${(props) => getColors(props).primary};
	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => getColors(props).hover};
	}
`

export const ControlsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`
