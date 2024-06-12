import styled from 'styled-components'

import { getColors, getSizes } from 'utils/themeGetters'

export const Wrapper = styled.main`
	display: grid;
	grid-template-columns: ${(props) => getSizes(props, 8, 26)} ${(props) => getSizes(props, 13, 170)} ${(
			props
		) => getSizes(props, 9, 33)};
	width: 100%;
	max-width: ${(props) => getSizes(props, 16, 200)};
	margin: 0 auto;

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
