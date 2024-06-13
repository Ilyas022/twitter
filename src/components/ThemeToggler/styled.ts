import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getBorders, getBordersRadii, getColors, getIndents, getSizes } from 'utils/themeGetters'

export const ToggleLabel = styled.label`
	position: relative;
	display: inline-block;
	width: ${(props) => getSizes(props, 2, 2)};
	height: ${(props) => getSizes(props, 0, 1)};
	margin-top: ${(props) => getIndents(props, 0, 1)};

	@media ${device.lg} {
		margin-top: 0px;
	}

	@media ${device.sm} {
		width: ${(props) => getSizes(props, 1, 8)};
		height: ${(props) => getSizes(props, 0, -4)};
	}

	@media ${device.xs} {
		width: ${(props) => getSizes(props, 1, -2)};
		height: ${(props) => getSizes(props, 0, -9)};
	}
`
export const ToggleInput = styled.input`
	display: none;

	&:checked + span::before {
		transform: translateX(${(props) => getIndents(props, 4, 1)});
		background-color: ${(props) => getColors(props).primary};

		@media ${device.sm} {
			transform: translateX(${(props) => getIndents(props, 3)});
		}

		@media ${device.xs} {
			transform: translateX(${(props) => getIndents(props, 2, -1)});
		}
	}
`

export const ToggleSpan = styled.span`
	position: absolute;
	cursor: pointer;
	background-color: transparent;
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 4, 17)};
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: background-color 0.2s ease;
	&::before {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		width: ${(props) => getSizes(props, 0, 1)};
		height: ${(props) => getSizes(props, 0, 1)};
		border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
		border-radius: 50%;
		transition: transform 0.3s ease;

		@media ${device.sm} {
			width: ${(props) => getSizes(props, 0, -4)};
			height: ${(props) => getSizes(props, 0, -4)};
		}

		@media ${device.xs} {
			width: ${(props) => getSizes(props, 0, -9)};
			height: ${(props) => getSizes(props, 0, -9)};
		}
	}
`
