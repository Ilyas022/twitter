import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import FormItem from 'components/FormItem'

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

	const onSubmit = handleSubmit((data) => {
		console.log(data)
	})

	return (
		<Form onSubmit={onSubmit}>
			<FormItem errorMessage={errors.email?.message}>
				<Input
					$error={!!errors.email?.message}
					placeholder="Phone number, email address"
					{...register('email')}
				/>
			</FormItem>
			<FormItem errorMessage={errors.password?.message}>
				<Input
					$error={!!errors.password?.message}
					placeholder="Password"
					{...register('password')}
				/>
			</FormItem>
			<Button type="submit" disabled={!isDirty || !isValid}>
				Log In
			</Button>
		</Form>
	)
}

export default SignInPageForm
