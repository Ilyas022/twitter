import styled, { css } from 'styled-components'

import Logo from 'assets/icons/logoIcon.svg?react'
import { getBordersRadii, getColors, getFontWeights, getFonts, getIndents, getSizes } from 'utils/themeGetters'

import { MenuProps } from './types'

const pcTabletBreakPoint = '1000px'

export const Menu = styled.div<MenuProps>`
	position: absolute;
	top: 0px;
	right: 0px;
	bottom: 0px;
	z-index: 5;
	display: none;
	width: 100%;
	align-items: stretch;
	background-color: ${({ theme }) => theme.colors.popUpBg};
	transform: translateX(100%);
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

	@media ${`(max-width: ${pcTabletBreakPoint})`} {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: ${(props) => getIndents(props, 1, 2)};
		color: ${(props) => getColors(props).white};
	}

	${(props) =>
		props.$open &&
		css`
			transform: translateX(0);
		`}

	> a {
		text-align: center;
		color: ${({ theme }) => theme.colors.white};
		font-size: ${(props) => getFonts(props, 1)};
	}
	> *:not(:last-child) {
		margin-bottom: ${(props) => getIndents(props, 1, 2)};
	}
`

export const TogglerContainer = styled.div`
	background-color: ${(props) => getColors(props).secondary};
	border-radius: ${(props) => getBordersRadii(props, 4, 17)};
	height: min-content;

	& > label {
		display: block;
	}
`

export const LogoIcon = styled(Logo)`
	color: ${(props) => getColors(props).primary};
	width: ${(props) => getSizes(props, 1, 8)};
	height: ${(props) => getSizes(props, 1, 1)};
	margin-bottom: ${(props) => getIndents(props, 5, 9)};
`

export const Button = styled.button`
	width: 100%;
	text-align: center;
	padding: ${(props) => getIndents(props, 2, 2)};
	background-color: ${(props) => getColors(props).primary};
	border-radius: ${(props) => getBordersRadii(props, 4, 19)};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	color: ${(props) => getColors(props).white};
	margin-bottom: ${(props) => getIndents(props, 9, 4)};

	transition: background-color 0.3s;

	&:hover {
		background-color: ${(props) => getColors(props).hover};
	}
`
