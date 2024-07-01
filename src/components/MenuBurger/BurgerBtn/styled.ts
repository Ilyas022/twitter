import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getBordersRadii, getIndents, getSizes } from 'utils/themeGetters'

const pcTabletBreakPoint = '1000px'

export const BurgerBtn = styled.div`
	display: none;
	position: absolute;
	top: ${(props) => getSizes(props, 0, 2)};
	z-index: 10;
	right: ${(props) => getSizes(props, 1, 8)};

	@media ${`(max-width: ${pcTabletBreakPoint})`} {
		display: block;
	}

	@media ${device.sm} {
		top: ${(props) => getSizes(props, 0, -1)};
		right: ${(props) => getSizes(props, 1, -2)};
	}
`

export const BurgerInput = styled.input.attrs({ type: 'checkbox' })`
	position: absolute;
	visibility: hidden;

	&:checked {
	}

	&:checked + label::before {
		top: ${(props) => getSizes(props, 0, -12)};
		transform: rotate(45deg);
		box-shadow: 0 ${(props) => getIndents(props, 0, 2)} 0 transparent;
		transition:
			box-shadow 0.15s,
			top 0.3s,
			transform 0.3s 0.15s;
		background-color: ${({ theme }) => theme.colors.secondary};

		@media ${device.sm} {
			top: ${(props) => getSizes(props, 0, -15)};
		}
	}

	&:checked + label::after {
		bottom: ${(props) => getSizes(props, 0, -12)};
		transform: rotate(-45deg);
		transition:
			bottom 0.3s,
			transform 0.3s 0.15s;
		background-color: ${({ theme }) => theme.colors.secondary};

		@media ${device.sm} {
			bottom: ${(props) => getSizes(props, 0, -15)};
		}
	}
`

export const BurgerLabel = styled.label`
	position: relative;
	z-index: 10;
	cursor: pointer;
	display: block;
	border: none;
	background: transparent;

	width: ${(props) => getSizes(props, 1, 3)};
	height: ${(props) => getSizes(props, 0, 2)};

	@media ${device.sm} {
		width: ${(props) => getSizes(props, 0, 4)};
		height: ${(props) => getSizes(props, 0, -4)};
	}

	&:before,
	&:after {
		content: '';
		left: 0;
		position: absolute;
		display: block;
		width: 100%;
		height: ${(props) => getSizes(props, 0, -22)};
		border-radius: ${(props) => getBordersRadii(props, 4, 2)};
		background-color: ${({ theme }) => theme.colors.textColor};
	}
	&:before {
		top: 0;
		box-shadow: 0 12px 0 ${({ theme }) => theme.colors.textColor};
		transition:
			box-shadow 0.3s 0.15s,
			top 0.3s 0.15s,
			transform 0.3s;

		@media ${device.sm} {
			box-shadow: 0 9px 0 ${({ theme }) => theme.colors.textColor};
		}
	}
	&:after {
		bottom: 0;
		transition:
			bottom 0.3s 0.15s,
			transform 0.3s;
	}
`
