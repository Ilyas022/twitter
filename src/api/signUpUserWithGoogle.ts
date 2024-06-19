import { GoogleAuthProvider, getAdditionalUserInfo, getAuth, signInWithPopup } from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

import { UserData } from 'types/interfaces'

export const signUpUserWithGoogle = async () => {
	try {
		const db = getFirestore()
		const auth = getAuth()
		const provider = new GoogleAuthProvider()
		provider.addScope('https://www.googleapis.com/auth/user.birthday.read')
		provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
		const userData = await signInWithPopup(auth, provider)
		const userId = userData.user.uid
		const ref = doc(db, 'users', userId)
		const token = await userData.user.getIdToken()

		const {
			email,
			family_name: surname,
			given_name: name,
		} = (await getAdditionalUserInfo(userData)?.profile) as {
			id: string
			given_name: string
			family_name: string
			email: string
		}

		await setDoc(ref, {
			birthDate: null,
			name,
			surname,
			tag: `@${name.toLowerCase()}_${surname.toLowerCase()}`,
			phone: null,
			email,
			followers: 0,
			following: 0,
			numberOfTweets: 0,
			about: '',
			imageUrl: null,
		})

		const userFields = await getDoc(ref)

		if (!userFields.exists()) return

		const {
			birthDate,
			email: userEmail,
			name: userName,
			phone,
			surname: userSurname,
			tag,
			followers,
			following,
			about,
			numberOfTweets,
			imageUrl,
		} = userFields.data() as UserData

		return {
			name: userName,
			surname: userSurname,
			email: userEmail,
			phone,
			tag,
			birthDate: birthDate || null,
			id: userId,
			token,
			followers,
			about,
			following,
			numberOfTweets,
			imageUrl,
		}
	} catch (error) {
		return undefined
	}
}
