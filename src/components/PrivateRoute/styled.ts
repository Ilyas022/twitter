import styled from 'styled-components'

import { getColors, getIndents, getSizes } from 'utils/themeGetters'

const largeBreakPoint = '1600px'
const pcTabletBreakPoint = '1000px'

export const Wrapper = styled.main`
	position: relative;
	display: grid;
	grid-template-columns: ${(props) => getSizes(props, 8, 26)} ${(props) => getSizes(props, 13, 170)} auto;
	width: 100%;
	max-width: ${(props) => getSizes(props, 16, 240)};
	padding: 0 ${(props) => getIndents(props, 3)};
	margin: 0 auto;

	@media ${`(max-width: ${largeBreakPoint})`} {
		grid-template-columns: 1fr 3fr;
		max-width: ${(props) => getSizes(props, 15, -80)};
	}

	@media ${`(max-width: ${pcTabletBreakPoint})`} {
		grid-template-columns: 1fr;
		max-width: ${(props) => getSizes(props, 13, 60)};
	}

	& > :nth-child(2) {
		position: relative;

		&::before,
		&::after {
			content: '';
			position: absolute;
			top: 0;
			width: ${(props) => getSizes(props, 0, -23)};
			height: ${(props) => getSizes(props, 13, 152)};
			background-color: ${(props) => getColors(props).border};
		}
		&::before {
			left: 0;
		}
		&::after {
			right: 0;
		}
	}
`
