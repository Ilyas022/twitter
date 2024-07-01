import { useEffect, useRef } from 'react'

import { useScrollLock } from 'hooks/useScrollLock'

import { CloseBtn, PopUpComp, PopUpBody, PopUpContainer, PopUpHeader, Title } from './styled'
import { PopUpProps } from './types'

function PopUp({ children, title, handleClose }: PopUpProps) {
	const [lockScroll, unlockScroll] = useScrollLock()
	const ref = useRef(null)

	useEffect(() => {
		lockScroll()
		return () => unlockScroll()
	}, [])

	const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === ref.current) handleClose()
	}

	return (
		<PopUpComp onMouseDown={handleClickOutside} ref={ref}>
			<PopUpContainer>
				<PopUpHeader>
					<Title>{title}</Title>
					<CloseBtn onClick={handleClose} />
				</PopUpHeader>
				<PopUpBody>{children}</PopUpBody>
			</PopUpContainer>
		</PopUpComp>
	)
}

export default PopUp
