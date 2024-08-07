import { Theme } from 'types/interfaces'

const sizes = [24, 32, 48, 72, 94, 100, 120, 140, 255, 350, 445, 540, 600, 740, 1100, 1280, 1400]

const gaps = [8, 16, 20, 24, 30, 40, 120, 220]

const indents = [4, 8, 16, 20, 24, 40, 56, 80, 100, 120, 400]

const fonts = [14, 16, 20, 22, 24, 30, 38, 46, 56]

const fontWeights = [300, 400, 500, 600, 900]

const lineHeights = [24, 28, 33, 40, 60, 112, 150]

const borders = [1, 2, 4, 8, 16]

const bordersRadii = [1, 2, 3, 4, 8]

export const colors = {
	primary: '#1DA1F2',
	secondary: '#f1f1f1',
	hover: '#1d82f2',
	border: '#00000033',
	placeHolder: '#0009',
	popUpBg: '#000000b8',
	error: '#f00',
	white: '#fff',
	black: '#000',
	text: '#536471',
	bg: '#fff',
	textColor: '#000',
}

export const light: Theme = {
	fonts,
	fontWeights,
	colors,
	lineHeights,
	sizes,
	gaps,
	indents,
	borders,
	bordersRadii,
}

export const dark: Theme = {
	fonts,
	fontWeights,
	lineHeights,
	sizes,
	gaps,
	indents,
	borders,
	bordersRadii,
	colors: {
		primary: '#1DA1F2',
		secondary: '#a2a2a2',
		hover: '#1d82f2',
		border: '#ffffff33',
		placeHolder: '#0009',
		popUpBg: '#000000b8',
		error: '#f00',
		white: '#fff',
		black: '#000',
		text: '#536471',
		textColor: '#fff',
		bg: '#000',
	},
}
