import styled from 'styled-components'

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

export const Page = styled.div`
	padding-top: ${(props) => getIndents(props, 4, 1)};
`

export const Title = styled.h2`
	padding-left: ${(props) => getIndents(props, 2)};
	margin-bottom: ${(props) => getIndents(props, 0, 2)};
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 2)};
`
export const TweetsCounter = styled.p`
	padding-left: ${(props) => getIndents(props, 2)};
	margin-bottom: ${(props) => getIndents(props, 2, 1)};
	font-size: ${(props) => getFonts(props, 1)};
`

export const UserInfo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	padding: 0 ${(props) => getIndents(props, 3)} ${(props) => getIndents(props, 6, -4)};
	border-bottom: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
`

export const UserInfoContainer = styled.div`
	position: relative;
	padding-top: ${(props) => getIndents(props, 7)};
`

export const UserImage = styled.img`
	position: absolute;
	border-radius: 50%;
	object-fit: cover;
	top: ${(props) => getSizes(props, 0, -94)};
	left: ${(props) => getSizes(props, 0, -44)};
	width: ${(props) => getSizes(props, 7, 10)};
	height: ${(props) => getSizes(props, 7, 10)};
`

export const UserName = styled.p`
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
	font-size: ${(props) => getFonts(props, 4)};
	margin-bottom: ${(props) => getIndents(props, 0)};
`

export const UserTag = styled.p`
	font-size: ${(props) => getFonts(props, 1)};
	margin-bottom: ${(props) => getIndents(props, 2, 1)};
`

export const UserDescription = styled.p`
	font-size: ${(props) => getFonts(props, 1, 2)};
	margin-bottom: ${(props) => getIndents(props, 6, 1)};
`

export const FollowingsInfo = styled.div`
	display: flex;
	gap: ${(props) => getGaps(props, 4, 1)};
`

export const FollowingsItem = styled.p`
	display: flex;
	font-size: ${(props) => getFonts(props, 1, 2)};
	gap: ${(props) => getGaps(props, 0, -2)};
`

export const FollowingsNumber = styled.span`
	font-weight: ${(props) => getFontWeights(props, 3, 100)};
`
export const FollowingsTitle = styled.span`
	color: ${(props) => getColors(props).black};
	opacity: 0.6;
`

export const EditProfileBtn = styled.button`
	margin-top: ${(props) => getIndents(props, 3)};
	border: ${(props) => getBorders(props, 0)} solid ${(props) => getColors(props).border};
	border-radius: ${(props) => getBordersRadii(props, 4, 42)};
	font-weight: ${(props) => getFontWeights(props, 3)};
	font-size: ${(props) => getFonts(props, 1, 2)};
	padding: ${(props) => getIndents(props, 1, 2)} ${(props) => getIndents(props, 2, -1)};
	transition: all 0.3s;

	&:hover {
		color: ${(props) => getColors(props).white};
		background-color: ${(props) => getColors(props).primary};
	}
`
