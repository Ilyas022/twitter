import React from 'react'

import { Container, FormItemError } from './styled'

interface IFormItem {
	errorMessage?: string
	children: React.ReactNode
}

function FormItem({ children, errorMessage }: IFormItem) {
	return (
		<Container>
			<FormItemError>{errorMessage}</FormItemError>
			{children}
		</Container>
	)
}

export default FormItem
