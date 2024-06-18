import * as yup from 'yup'

export const schema = yup.object({
	name: yup
		.string()
		.required('Name is required')
		.matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Invalid Name')
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters'),
	surname: yup
		.string()
		.required('Surname is required')
		.matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Invalid Name')
		.min(2, 'Name must be at least 2 characters')
		.max(50, 'Name must be at most 50 characters'),
	birthDate: yup
		.date()
		.max(new Date(Date.now() - 567648000000), 'You must be at least 18 years')
		.required('Required'),
	phone: yup
		.string()
		.matches(/^\+375/, 'Incorrect code')
		.matches(/^\+375\((17|25|29|33|44)\)/, 'Incorrect phone operator')
		.length(17, 'wrong number')
		.notRequired(),
	tag: yup.string().required('Tag is required'),
	about: yup.string().trim('Remove whitespaces before and after').strict(true),
	email: yup.string().required('Email is required').email('Invalid email address'),
	image: yup.mixed().test('imageFormat', 'Only JPEG, PNG, GIF, BMP, or SVG files are allowed', (value) => {
		const item: File | undefined = value && (value as FileList)[0]
		if (item) {
			const supportedFormats = ['jpeg', 'png', 'gif', 'bmp', 'svg+xml']
			return supportedFormats.includes(item.type.split('/')[1])
		}
		return true
	}),
})

export const formItems = [
	{
		field: 'name',
		placeholder: 'Add your name',
	},
	{
		field: 'surname',
		placeholder: 'Add your surname',
	},
	{
		field: 'birthDate',
		placeholder: 'Birth date',
	},
	{
		field: 'phone',
		placeholder: 'Add your phone number',
	},
	{
		field: 'tag',
		placeholder: 'Add your tag',
	},
	{
		field: 'about',
		placeholder: 'Add your about info',
	},
	{
		field: 'email',
		placeholder: 'Add your email',
	},
	{
		field: 'image',
		placeholder: 'Add your image',
	},
]
