import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Timestamp, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

import { FormData } from 'pages/SignUpPage/SignUpPageForm/types'
import { UserData } from 'types/interfaces'

export const signUpUser = async (data: FormData) => {
	try {
		const { birthDay, birthMonth, birthYear, email, name, phone, password, surname } = data
		const birthDateTimestamp = Timestamp.fromDate(
			new Date(Number(birthYear), Number(birthMonth), Number(birthDay))
		)

		const auth = getAuth()
		const userData = await createUserWithEmailAndPassword(auth, email, password)
		const token: string = userData.user.accessToken as string
		const userId = userData.user.uid
		const db = getFirestore()
		const ref = doc(db, 'users', userId)

		await setDoc(ref, {
			birthDate: birthDateTimestamp,
			name,
			surname,
			tag: `@${name.toLowerCase()}_${surname.toLowerCase()}`,
			phone,
			email,
		})

		const userFields = await getDoc(ref)
		if (userFields.exists()) {
			const {
				birthDate,
				email: userEmail,
				name: userName,
				phone: userPhone,
				surname: userSurname,
				tag,
			} = userFields.data() as UserData

			return {
				name: userName,
				surname: userSurname,
				email: userEmail,
				phone: userPhone,
				tag,
				birthDate: birthDate?.seconds || null,
				id: userId,
				token,
			}
		}

		return undefined
	} catch (error) {
		return undefined
	}
}
