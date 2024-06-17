import { BurgerBtn, BurgerInput, BurgerLabel } from './styled'
import { BurgerBtnProps } from './types'

function BurgerButton({ isOpened, setOpened }: BurgerBtnProps) {
	const handleClick = () => {
		setOpened()
	}

	return (
		<BurgerBtn>
			<BurgerInput id="menuBurger" onChange={handleClick} checked={isOpened} />
			<BurgerLabel htmlFor="menuBurger" />
		</BurgerBtn>
	)
}

export default BurgerButton
