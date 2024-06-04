import * as yup from 'yup'

export const validationSchema = yup.object().shape({
	email: yup.string().email().min(5, 'less then 5').required('Required'),
	password: yup.string().min(8, 'less then 8').required('Required'),
})
