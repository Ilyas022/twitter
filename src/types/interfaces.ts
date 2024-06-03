// Theme
interface ThemeColors {
	primary: string
	secondary: string
	border: string
	popUpBg: string
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
