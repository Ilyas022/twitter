import { yupResolver } from '@hookform/resolvers/yup'
import { getFirestore, doc, updateDoc, Timestamp } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { useEffect } from 'react'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { useUploadFile } from 'react-firebase-hooks/storage'
import { useForm } from 'react-hook-form'

import FormItem from 'components/FormItem'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'
import { UserData } from 'types/interfaces'

import { formItems, schema } from './config'
import { Button, Form, Input } from './styled'
import { EditProfilePopUpProps, FormItemType } from './types'

function EditProfilePopUp({ onClose }: EditProfilePopUpProps) {
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
	const [value] = useDocumentData(userRef)
	const storage = getStorage()
	const [uploadFile] = useUploadFile()
	const { updateUser } = useActions()

	useEffect(() => {
		if (value) {
			const { about, birthDate, email, name, phone, surname, tag } = value as UserData
			let formattedDate = ''

			if (birthDate) {
				const date = new Date((birthDate as Timestamp).toDate())
				const year = date.getFullYear()
				const month = String(date.getMonth() + 1).padStart(2, '0')
				const day = String(date.getDate()).padStart(2, '0')

				formattedDate = `${year}-${month}-${day}`
			}

			reset({
				about,
				birthDate: formattedDate as unknown as Date,
				email,
				name,
				phone,
				surname,
				tag,
			})
		}
	}, [value])
	const onSubmit = handleSubmit(async (data) => {
		const { birthDate, email, name, phone, surname, tag, about, image } = data
		const { imageUrl: userImage } = value as UserData

		let imageUrl = null
		let imageItem

		if (image) {
			const [img] = image as File[]
			imageItem = img
		}

		if (imageItem) {
			const storageRef = ref(storage, `images/${imageItem.name}`)
			const result = await uploadFile(storageRef, imageItem)
			const url = await getDownloadURL(result!.ref)
			imageUrl = url
		}

		await updateDoc(userRef, {
			birthDate: Timestamp.fromDate(birthDate),
			// birthDate,
			email,
			name,
			phone,
			surname,
			tag,
			about,
			imageUrl: imageUrl || userImage,
		})

		updateUser(userRef)
		onClose()
	})
	return (
		<Form onSubmit={onSubmit}>
			{formItems.map((formItem) => {
				const field = formItem.field as FormItemType
				const { placeholder } = formItem
				return (
					<FormItem key={field} errorMessage={errors[field]?.message}>
						<Input
							{...(field === 'image' && { type: 'file', accept: 'image/*' })}
							{...(field === 'birthDate' && { type: 'date' })}
							$error={!!errors[field]?.message}
							placeholder={placeholder}
							{...register(field)}
						/>
					</FormItem>
				)
			})}
			<Button type="submit" disabled={!isDirty || !isValid}>
				Next
			</Button>
		</Form>
	)
}

export default EditProfilePopUp
