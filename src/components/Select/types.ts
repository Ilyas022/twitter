export interface SelectProps {
	error: boolean
	options: {
		label: string
		value: number
	}[]
	title: string
	value: string
	onChange: (value: number) => void
	onBlur: () => void
}

export interface SelectStyledProps {
	$active: boolean
	$error: boolean
}

export interface IconProps {
	$active: boolean
}
