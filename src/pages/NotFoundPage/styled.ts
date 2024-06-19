import styled from 'styled-components'

import { getFonts, getIndents } from 'utils/themeGetters'

export const Text = styled.h2`
	padding-top: ${(props) => getIndents(props, 8)};
	font-size: ${(props) => getFonts(props, 3)};
	text-align: center;
`
