import styled from 'styled-components'

import { getColors, getFonts, getIndents } from 'utils/themeGetters'

export const Container = styled.div`
	position: relative;
	padding-top: ${(props) => getIndents(props, 3)};
`

export const FormItemError = styled.p`
	font-size: ${(props) => getFonts(props, 0)};
	position: absolute;
	top: 0;
	left: ${(props) => getIndents(props, 1, 2)};
	color: ${(props) => getColors(props).error};
`
