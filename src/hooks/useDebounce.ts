import { useEffect, useState } from 'react'

const defaultDebounceDelay = 500

export const useDebounce = <T>(value: T, delay = defaultDebounceDelay) => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedValue(value)
		}, delay)
		return () => clearTimeout(timeout)
	}, [value, delay])

	return debouncedValue
}
