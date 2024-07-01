import { useCallback } from 'react'

export const useScrollLock = () => {
	const lockScroll = useCallback(() => {
		document.body.style.overflow = 'hidden'
		document.body.style.touchAction = 'none'
	}, [])

	const unlockScroll = useCallback(() => {
		document.body.style.overflow = 'unset'
		document.body.style.touchAction = 'unset'
	}, [])

	return [lockScroll, unlockScroll]
}
