import { yupResolver } from '@hookform/resolvers/yup'
import { getFirestore, doc, updateDoc } from 'firebase/firestore'
import { useEffect } from 'react'
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore'
import { useForm } from 'react-hook-form'

import FormItem from 'components/FormItem'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'
import { UserData } from 'types/interfaces'

import { schema } from './config'
import { Button, Form, Input } from './styled'

function EditProfilePopUp() {
	const {
		register,
		handleSubmit,
		formState: { errors, isDirty, isValid },
		reset,
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onTouched',
	})

	const { id } = useTypedSelector(selectUser)
	const db = getFirestore()
	const userRef = doc(db, 'users', id as string)
	const [value] = useDocumentDataOnce(userRef)

	useEffect(() => {
		if (value) {
			const { about, birthDate, email, name, phone, surname, tag } = value as UserData

			const date = new Date(birthDate!.seconds)
			const year = date.getFullYear()
			const month = String(date.getMonth() + 1).padStart(2, '0')
			const day = String(date.getDate()).padStart(2, '0')

			const formattedDate = `${year}-${month}-${day}`
			reset({
				about,
				birthDate: formattedDate,
				email,
				name,
				phone,
				surname,
				tag,
			})
		}
	}, [value])
	const onSubmit = handleSubmit(async (data) => {
		const { birthDate, email, name, phone, surname, tag, about } = data

		await updateDoc(userRef, {
			birthDate,
			email,
			name,
			phone,
			surname,
			tag,
			about,
		})
	})

	return (
		<Form onSubmit={onSubmit}>
			<FormItem errorMessage={errors.name?.message}>
				<Input $error={!!errors.name?.message} placeholder="Add your name" {...register('name')} />
			</FormItem>
			<FormItem errorMessage={errors.surname?.message}>
				<Input
					$error={!!errors.surname?.message}
					placeholder="Add your surname"
					{...register('surname')}
				/>
			</FormItem>
			<FormItem errorMessage={errors.birthDate?.message}>
				<Input
					type="date"
					$error={!!errors.birthDate?.message}
					placeholder="Birth date"
					{...register('birthDate')}
				/>
			</FormItem>
			<FormItem errorMessage={errors.phone?.message}>
				<Input
					$error={!!errors.phone?.message}
					placeholder="Add your phone number"
					{...register('phone')}
				/>
			</FormItem>
			<FormItem errorMessage={errors.tag?.message}>
				<Input $error={!!errors.tag?.message} placeholder="Add your tag" {...register('tag')} />
			</FormItem>
			<FormItem errorMessage={errors.about?.message}>
				<Input
					$error={!!errors.about?.message}
					placeholder="Add your about info"
					{...register('about')}
				/>
			</FormItem>
			<FormItem errorMessage={errors.email?.message}>
				<Input
					$error={!!errors.email?.message}
					placeholder="Add your email"
					{...register('email')}
				/>
			</FormItem>
			<Button type="submit" disabled={!isDirty || !isValid}>
				Next
			</Button>
		</Form>
	)
}

export default EditProfilePopUp
