import { useState } from 'react'

import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectTheme } from 'store/selectors/themeSelectors'

import { ToggleInput, ToggleLabel, ToggleSpan } from './styled'

export function ThemeToggler() {
	const { name } = useTypedSelector(selectTheme)
	const [isToggled, setIsToggled] = useState(name === 'dark')
	const { setTheme } = useActions()

	const onToggle = () => {
		setIsToggled(!isToggled)
		setTheme(isToggled ? 'light' : 'dark')
	}

	return (
		<ToggleLabel>
			<ToggleInput type="checkbox" checked={isToggled} onChange={onToggle} />
			<ToggleSpan />
		</ToggleLabel>
	)
}
