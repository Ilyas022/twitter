import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Google from 'assets/icons/googleIcon.svg?react'
import Logo from 'assets/icons/logoIcon.svg?react'
import {
	getBorders,
	getBordersRadii,
	getColors,
	getFontWeights,
	getFonts,
	getGaps,
	getIndents,
	getSizes,
} from 'utils/themeGetters'

export const Page = styled.main`
	display: flex;
	align-items: center;
`

export const Container = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 5)};
	width: 100%;
	max-width: ${(props) => getSizes(props, 16, 500)};
	margin: 0 auto;
	justify-content: center;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Title = styled.h1`
	font-weight: ${(props) => getFontWeights(props, 4)};
	font-size: ${(props) => getFonts(props, 8, 28)};
	margin-bottom: ${(props) => getIndents(props, 5, 6)};
`

export const SubTitle = styled.h2`
	font-weight: ${(props) => getFontWeights(props, 4)};
	font-size: ${(props) => getFonts(props, 7, -4)};
	margin-bottom: ${(props) => getIndents(props, 4, 7)};
`

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: ${(props) => getGaps(props, 0, -3)};
	max-width: ${(props) => getSizes(props, 10, -42)};
	padding: ${(props) => getIndents(props, 2, -1)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 4, 38)};
	text-align: center;
	font-weight: ${(props) => getFontWeights(props, 2)};
	font-size: ${(props) => getFonts(props, 2)};

	&:first-of-type {
		margin-bottom: ${(props) => getIndents(props, 3, 1)};
	}

	&:last-of-type {
		margin-bottom: ${(props) => getIndents(props, 5, -9)};
	}
`

export const Warning = styled.p`
	max-width: ${(props) => getSizes(props, 9, 23)};
	font-size: ${(props) => getFonts(props, 0)};
	line-height: 143%;
	margin-bottom: ${(props) => getIndents(props, 3, 1)};

	& > a {
		color: ${(props) => getColors(props).primary};
		transition: color 0.3s;

		&:hover {
			color: ${(props) => getColors(props).black};
		}
	}
`

export const Login = styled.p`
	font-size: ${(props) => getFonts(props, 1)};

	& > a {
		color: ${(props) => getColors(props).primary};
		transition: color 0.3s;

		&:hover {
			color: ${(props) => getColors(props).black};
		}
	}
`

export const AuthImg = styled.img`
	height: calc(100vh - ${(props) => getSizes(props, 2, 1)});
`

export const LogoIcon = styled(Logo)`
	width: ${(props) => getSizes(props, 2, 2)};
	height: ${(props) => getSizes(props, 2, -7)};
	margin-bottom: ${(props) => getIndents(props, 6, -5)};
	color: ${(props) => getColors(props).primary};
`

export const GoogleIcon = styled(Google)`
	width: ${(props) => getSizes(props, 1, -1)};
	height: ${(props) => getSizes(props, 1)};
`

export const Footer = styled.footer`
	display: flex;
	gap: ${(props) => getGaps(props, 2)};
	width: 100%;
	max-width: ${(props) => getSizes(props, 16)};
	margin: 0 auto;
`

export const FooterLink = styled(Link)`
	padding: ${(props) => getIndents(props, 2, 2)} 0;
	text-align: center;
	font-size: ${(props) => getFonts(props, 0, -1)};
	color: ${(props) => getColors(props).black};
	white-space: nowrap;
	transition: color 0.3s;

	&:hover {
		color: ${(props) => getColors(props).primary};
	}
`
