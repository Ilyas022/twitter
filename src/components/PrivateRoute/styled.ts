import styled from 'styled-components'

import { getIndents, getSizes } from 'utils/themeGetters'

export const Wrapper = styled.main`
	display: flex;
	width: 100%;
	max-width: ${(props) => getSizes(props, 16, 200)};
	margin: 0 auto;

	&:first-child {
		margin-right: ${(props) => getIndents(props, 6, -2)};
	}
`
