import * as yup from 'yup'

export const validationSchema = yup.object().shape({
	name: yup.string().min(2, 'less then 2').required('Required'),
	surname: yup.string().min(2, 'less then 2').required('Required'),
	email: yup.string().email().min(5, 'less then 5').required('Required'),
	password: yup.string().min(6, 'less then 6').required('Required'),
	phone: yup
		.string()
		.matches(/^\+375/, 'Incorrect code')
		.matches(/^\+375(17|25|29|33|44)/, 'Incorrect phone operator')
		.length(13, 'wrong number')
		.required('Required'),
	birthDay: yup.string().required('Required'),
	birthMonth: yup.string().required('Required'),
	birthYear: yup.string().required('Required'),
})

export const monthsArray = [
	{ label: 'Январь', value: 0 },
	{ label: 'Февраль', value: 1 },
	{ label: 'Март', value: 2 },
	{ label: 'Апрель', value: 3 },
	{ label: 'Май', value: 4 },
	{ label: 'Июнь', value: 5 },
	{ label: 'Июль', value: 6 },
	{ label: 'Август', value: 7 },
	{ label: 'Сентябрь', value: 8 },
	{ label: 'Октябрь', value: 9 },
	{ label: 'Ноябрь', value: 10 },
	{ label: 'Декабрь', value: 11 },
]

export const numberOfDaysInMonth = {
	'0': 31,
	'1': 28,
	'2': 31,
	'3': 30,
	'4': 31,
	'5': 30,
	'6': 31,
	'7': 31,
	'8': 30,
	'9': 31,
	'10': 30,
	'11': 31,
}

export const getDays = (numberOfDays: number) => {
	return Array(numberOfDays)
		.fill(undefined)
		.map((_, i) => ({ label: `${i + 1}`, value: i + 1 }))
}

const deductible = 80
const date = new Date()
const startYear = date.getFullYear() - deductible

export const years = Array(81)
	.fill(undefined)
	.map((_, i) => {
		return { label: `${i + startYear}`, value: i + startYear }
	})
	.reverse()
