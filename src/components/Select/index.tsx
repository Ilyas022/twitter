import { useMemo, useRef, useState } from 'react'

import useOnClickOutside from 'hooks/useOnClickOutside'

import { ArrowIcon, Component, Menu, Option, SelectItem } from './styled'
import { SelectProps } from './types'

function Select({ error, options, title, onChange, onBlur, value }: SelectProps) {
	const [active, setActive] = useState(false)
	const ref = useRef(null)

	const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
		const optionValue = Number(event.currentTarget.value)
		onChange(optionValue)
		setActive(false)
		onBlur()
	}

	const handleClickOutside = () => {
		if (active) {
			setActive(false)
			onBlur()
		}
	}

	useOnClickOutside(ref, handleClickOutside)

	const selectedOption = useMemo(() => {
		if (options) {
			return options.find((option) => option.value === Number(value))
		}
		return undefined
	}, [value])

	return (
		<Component ref={ref}>
			<SelectItem
				$active={active}
				$error={error}
				type="button"
				onClick={() => setActive((prev) => !prev)}
			>
				<p>{selectedOption?.label || title}</p>
				<ArrowIcon $active={active} />
			</SelectItem>
			{active && (
				<Menu>
					{options.map((option) => (
						<Option
							onClick={handleChange}
							type="button"
							key={option.value}
							value={option.value}
							$active={option.value === Number(value)}
						>
							{option.label}
						</Option>
					))}
				</Menu>
			)}
		</Component>
	)
}

export default Select
