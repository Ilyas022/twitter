import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

import { FormData } from 'pages/SignInPage/SignInPageForm/types'
import { UserData } from 'types/interfaces'

export const signInUser = async (data: FormData) => {
	try {
		const { emailOrPhone, password } = data

		const db = getFirestore()
		const auth = getAuth()
		const userData = await signInWithEmailAndPassword(auth, emailOrPhone, password)
		const token: string = userData.user.accessToken
		const id = userData.user.uid
		const ref = doc(db, 'users', id)

		const userFields = await getDoc(ref)
		if (userFields.exists()) {
			const {
				birthDate,
				email: userEmail,
				name,
				phone,
				surname,
				tag,
			} = userFields.data() as UserData

			return {
				name,
				surname,
				email: userEmail,
				phone,
				tag,
				birthDate: birthDate?.seconds || null,
				id,
				token,
			}
		}
		return undefined
	} catch (error) {
		return undefined
	}
}