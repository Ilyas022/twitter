import styled from 'styled-components'

import { device } from 'constants/breakpoints'
import { getIndents, getFonts } from 'utils/themeGetters'

const largeBreakPoint = '1600px'

export const Page = styled.div`
	@media ${`(max-width: ${largeBreakPoint})`} {
		padding-top: ${(props) => getIndents(props, 3)};
	}
`

export const PageHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${(props) => getIndents(props, 2, -1)};

	@media ${`(max-width: ${largeBreakPoint})`} {
		padding: ${(props) => getIndents(props, 1, 2)} 0 ${(props) => getIndents(props, 4, 6)} ${(props) => getIndents(props, 2, -1)};
	}

	@media ${device.sm} {
		padding-top: ${(props) => getIndents(props, 1, 2)};
	}

	& > label {
		display: none;
	}
`

export const Title = styled.h2`
	font-size: ${(props) => getFonts(props, 2)};

	@media ${device.sm} {
		visibility: hidden;
	}
`
