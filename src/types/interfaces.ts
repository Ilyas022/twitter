import { DocumentReference, Timestamp } from 'firebase/firestore'

interface ThemeColors {
	primary: string
	secondary: string
	hover: string
	border: string
	placeHolder: string
	popUpBg: string
	error: string
	white: string
	black: string
	text: string
	bg: string
	textColor: string
}

export interface Theme {
	fonts: number[]
	fontWeights: number[]
	lineHeights: number[]
	colors: ThemeColors
	sizes: number[]
	gaps: number[]
	indents: number[]
	borders: number[]
	bordersRadii: number[]
}

export type UserData = {
	birthDate: { seconds: number; nanoseconds: number } | null
	email: string
	name: string
	phone: string | null
	surname: string
	tag: string
	uid: string
	numberOfTweets: number
	followers: number
	following: number
	about: string
	imageUrl: string | null
}

export interface TweetResponse {
	author: DocumentReference
	createdAt: Timestamp
	likes: DocumentReference[]
	imageUrl: string | null
	text: string
}

export interface AuthorType {
	id: string
	tag: string
	surname: string
	name: string
}

export interface User {
	birthDate: Timestamp
	email: string
	name: string
	phone: string
	surname: string
	tag: string
}

export interface TweetType {
	text: string
	createdAt: Timestamp
	author: AuthorType
	likes: DocumentReference[]
	imageUrl: string | null
	id: string
}
