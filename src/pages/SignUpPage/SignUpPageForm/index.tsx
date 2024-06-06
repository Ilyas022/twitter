import { yupResolver } from '@hookform/resolvers/yup'
import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import FormItem from 'components/FormItem'
import Select from 'components/Select'
import { AUTH_PAGE_ROUTE, HOME_PAGE_ROUTE } from 'constants/routes'
import { useActions } from 'hooks/useActions'
import { signUpUser } from 'src/api/signUpUser'

import { getDays, monthsArray, numberOfDaysInMonth, validationSchema, years } from './config'
import { AuthLink, Button, Form, Input, SelectContainer, SubTitle, Text } from './styled'
import { FormData, MonthType } from './types'

function SignUpPageForm() {
	const formData = useForm<FormData>({
		resolver: yupResolver(validationSchema),
		mode: 'onTouched',
	})
	const { setUser } = useActions()
	const navigate = useNavigate()

	const {
		register,
		watch,
		control,
		handleSubmit,
		formState: { errors, isDirty, isValid },
	} = formData

	const onSubmit = handleSubmit(async (data) => {
		const userData = await signUpUser(data)

		if (userData) {
			setUser(userData)
			navigate(HOME_PAGE_ROUTE)
		}
	})

	const birthMonth = watch('birthMonth')

	const daysInMonth = useMemo(() => {
		const numberOfDays = birthMonth ? numberOfDaysInMonth[birthMonth as MonthType] : 31
		return getDays(numberOfDays)
	}, [birthMonth])

	return (
		<Form onSubmit={onSubmit}>
			<FormItem errorMessage={errors.name?.message}>
				<Input $error={!!errors.name?.message} placeholder="Name" {...register('name')} />
			</FormItem>
			<FormItem errorMessage={errors.surname?.message}>
				<Input $error={!!errors.surname?.message} placeholder="Surname" {...register('surname')} />
			</FormItem>
			<FormItem errorMessage={errors.phone?.message}>
				<Input
					$error={!!errors.phone?.message}
					placeholder="Phone number | follow mask +xxx(xx)xxx-xx-xx"
					{...register('phone')}
					maxLength={17}
				/>
			</FormItem>
			<FormItem errorMessage={errors.email?.message}>
				<Input $error={!!errors.email?.message} placeholder="Email" {...register('email')} />
			</FormItem>
			<FormItem errorMessage={errors.password?.message}>
				<Input
					type="password"
					$error={!!errors.password?.message}
					placeholder="Password"
					{...register('password')}
				/>
			</FormItem>
			<AuthLink to={AUTH_PAGE_ROUTE}>Use email</AuthLink>
			<SubTitle>Date of birth</SubTitle>
			<Text>
				Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante
				phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id
				ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit
				congue.
			</Text>
			<SelectContainer>
				<FormItem errorMessage={errors.birthMonth?.message}>
					<Controller
						name="birthMonth"
						control={control}
						render={({ field }) => (
							<Select
								error={!!errors.birthMonth?.message}
								options={monthsArray}
								title="Month"
								value={field.value}
								onChange={field.onChange}
								onBlur={field.onBlur}
							/>
						)}
					/>
				</FormItem>
				<FormItem errorMessage={errors.birthDay?.message}>
					<Controller
						name="birthDay"
						control={control}
						render={({ field }) => (
							<Select
								error={!!errors.birthDay?.message}
								options={daysInMonth}
								title="Day"
								value={field.value}
								onChange={field.onChange}
								onBlur={field.onBlur}
							/>
						)}
					/>
				</FormItem>
				<FormItem errorMessage={errors.birthYear?.message}>
					<Controller
						name="birthYear"
						control={control}
						render={({ field }) => (
							<Select
								error={!!errors.birthYear?.message}
								options={years}
								title="Year"
								value={field.value}
								onChange={field.onChange}
								onBlur={field.onBlur}
							/>
						)}
					/>
				</FormItem>
			</SelectContainer>
			<Button type="submit" disabled={!isDirty || !isValid}>
				Next
			</Button>
		</Form>
	)
}

export default SignUpPageForm
