export type FormData = {
	name: string
	surname: string
	email: string
	phone: string
	password: string
	birthDay: string
	birthMonth: string
	birthYear: string
}

export interface InputProps {
	$error: boolean
}

export type MonthType = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11'
