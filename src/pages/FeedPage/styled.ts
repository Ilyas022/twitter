import styled from 'styled-components'

import { getIndents, getFonts } from 'utils/themeGetters'

export const PageHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => getIndents(props, 2, -1)};
`

export const Title = styled.h2`
	font-size: ${(props) => getFonts(props, 2)};
`
