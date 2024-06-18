import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { Timestamp, doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

import { FormData } from 'pages/SignUpPage/SignUpPageForm/types'
import { UserData } from 'types/interfaces'

export const signUpUser = async (data: FormData) => {
	try {
		const { birthDay, birthMonth, birthYear, email, name, phone, password, surname } = data
		const birthDateFromData = new Date(Number(birthYear), Number(birthMonth), Number(birthDay))
		const birthDateTimestamp = Timestamp.fromDate(birthDateFromData)

		const auth = getAuth()
		const userData = await createUserWithEmailAndPassword(auth, email, password)
		const userId = userData.user.uid
		const db = getFirestore()
		const ref = doc(db, 'users', userId)
		const token = await userData.user.getIdToken()

		await setDoc(ref, {
			birthDate: birthDateTimestamp,
			name,
			surname,
			tag: `@${name.toLowerCase()}_${surname.toLowerCase()}`,
			phone,
			email,
			followers: 0,
			following: 0,
			numberOfTweets: 0,
			about: '',
			imageUrl: null,
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
				about,
				followers,
				following,
				numberOfTweets,
				imageUrl,
			} = userFields.data() as UserData

			return {
				name: userName,
				surname: userSurname,
				email: userEmail,
				phone: userPhone,
				tag,
				birthDate: birthDate || null,
				id: userId,
				token,
				about,
				followers,
				following,
				numberOfTweets,
				imageUrl,
			}
		}

		return undefined
	} catch (error) {
		return undefined
	}
}
