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
}
