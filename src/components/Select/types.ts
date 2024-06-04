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
