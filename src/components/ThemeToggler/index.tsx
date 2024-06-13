import { useState } from 'react'

import { ToggleInput, ToggleLabel, ToggleSpan } from './styled'

export function ThemeToggler() {
	const [isToggled, setIsToggled] = useState(false)
	const onToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<ToggleLabel>
			<ToggleInput type="checkbox" checked={isToggled} onChange={onToggle} />
			<ToggleSpan />
		</ToggleLabel>
	)
}
