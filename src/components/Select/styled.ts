import styled, { css } from 'styled-components'

import Arrow from 'assets/icons/ArrowIcon.svg?react'
import { getBorders, getBordersRadii, getColors, getIndents, getSizes } from 'utils/themeGetters'

export const Component = styled.div`
	position: relative;
`

export const SelectItem = styled.button<{ $active: boolean; $error: boolean }>`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding: ${(props) => getIndents(props, 3)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 3, 2)};

	${({ $active }) =>
		$active &&
		css`
			border-bottom: 0;
			border-bottom-right-radius: 0;
			border-bottom-left-radius: 0;
		`}
	${({ $error }) =>
		$error &&
		css`
			border-color: ${(props) => getColors(props).error};
		`}
`

export const ArrowIcon = styled(Arrow)<{ $active: boolean }>`
	width: ${(props) => getSizes(props, 0, -10)};
	height: ${(props) => getSizes(props, 0, -16)};
	color: ${(props) => getColors(props).black};

	${({ $active }) =>
		$active &&
		css`
			transform: rotate(180deg);
		`}
`

export const Menu = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	display: flex;
	flex-direction: column;
	width: 100%;
	background-color: ${(props) => getColors(props).white};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-bottom-right-radius: ${(props) => getBordersRadii(props, 2, 2)};
	border-bottom-left-radius: ${(props) => getBordersRadii(props, 2, 2)};
	max-height: ${(props) => getSizes(props, 7, 10)};
	overflow-y: auto;

	& > *:not(:last-child) {
		border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	}
`

export const Option = styled.button<{ $active: boolean }>`
	padding: ${(props) => getIndents(props, 1, 2)} ${(props) => getIndents(props, 3)};
	transition: background-color 0.3s;
	text-align: center;

	${({ $active }) =>
		$active &&
		css`
			background-color: ${(props) => getColors(props).primary};
		`}

	&:hover {
		background-color: ${(props) => getColors(props).hover};
	}
`
