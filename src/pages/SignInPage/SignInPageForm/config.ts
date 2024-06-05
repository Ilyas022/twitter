import * as yup from 'yup'

const validateEmail = (email: string) => {
	return yup.string().email().isValidSync(email)
}

const validatePhone = (phone: string) => {
	return yup
		.string()
		.matches(/^\+375/, 'Incorrect code')
		.matches(/^\+375\((17|25|29|33|44)\)/, 'Incorrect phone operator')
		.length(17, 'wrong number')
		.required('Required')
		.isValidSync(phone)
}

export const validationSchema = yup.object().shape({
	emailOrPhone: yup
		.string()
		.required('Email / Phone is required')
		.test('email_or_phone', 'Email / Phone is invalid', (value) => {
			return validateEmail(value) || validatePhone(value)
		}),
	password: yup.string().min(6, 'less then 6').required('Required'),
})
