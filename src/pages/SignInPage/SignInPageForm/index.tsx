import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import FormItem from 'components/FormItem'
import { useActions } from 'hooks/useActions'
import { signInUser } from 'src/api/signInUser'

import { validationSchema } from './config'
import { Button, Form, Input } from './styled'
import { FormData } from './types'

function SignInPageForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = useForm<FormData>({
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
	})
	const { setUser } = useActions()

	const onSubmit = handleSubmit(async (data) => {
		const userData = await signInUser(data)

		if (userData) {
			setUser(userData)
		}
	})

	return (
		<Form onSubmit={onSubmit}>
			<FormItem errorMessage={errors.emailOrPhone?.message}>
				<Input $error={!!errors.emailOrPhone?.message} placeholder="Phone number, email address" {...register('emailOrPhone')} />
			</FormItem>
			<FormItem errorMessage={errors.password?.message}>
				<Input $error={!!errors.password?.message} placeholder="Password" {...register('password')} />
			</FormItem>
			<Button type="submit" disabled={!isDirty || !isValid}>
				Log In
			</Button>
		</Form>
	)
}

export default SignInPageForm
