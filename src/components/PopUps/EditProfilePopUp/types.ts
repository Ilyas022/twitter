export interface EditProfilePopUpProps {
	onClose: () => void
}

export interface InputProps {
	$error: boolean
}

export type FormItemType = 'phone' | 'about' | 'image' | 'name' | 'surname' | 'birthDate' | 'tag' | 'email'
