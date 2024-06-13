import {
	addDoc,
	collection,
	doc,
	getFirestore,
	serverTimestamp,
	updateDoc,
} from 'firebase/firestore'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { useState } from 'react'
import { useUploadFile } from 'react-firebase-hooks/storage'

import ImagePlaceHolder from 'assets/images/defaultUserIcon.png'
import { useActions } from 'hooks/useActions'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import {
	AddImageBtn,
	AddTweetBtn,
	Container,
	ControlsContainer,
	AddImageIcon,
	Input,
	Item,
	TextArea,
	UserIcon,
} from './styled'
import { AddTweetProps } from './types'

function AddTweet({ onClose }: AddTweetProps) {
	const [tweetText, setTweetText] = useState('')
	const [image, setImage] = useState<File | null>(null)
	const [uploadFile] = useUploadFile()

	const { id, numberOfTweets } = useTypedSelector(selectUser)
	const { incTweetsNumber } = useActions()

	const db = getFirestore()
	const userRef = doc(db, 'users', id)
	const tweetsRef = collection(db, 'tweets')
	const storage = getStorage()

	const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTweetText(e.target.value)
	}
	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) {
			return
		}
		setImage(e.target.files[0])
	}
	const handleSubmit = async () => {
		if (!tweetText) return
		let imageUrl = null
		if (image) {
			const storageRef = ref(storage, `images/${image.name}`)
			const result = await uploadFile(storageRef, image)
			const url = await getDownloadURL(result!.ref)
			imageUrl = url
		}

		await addDoc(tweetsRef, {
			text: tweetText.trim(),
			createdAt: serverTimestamp(),
			author: userRef,
			likes: [],
			imageUrl,
		})

		await updateDoc(userRef, {
			numberOfTweets: numberOfTweets + 1,
		})
		incTweetsNumber()
		setTweetText('')
		setImage(null)
		if (onClose) {
			onClose()
		}
	}

	return (
		<Item>
			<UserIcon src={ImagePlaceHolder} />
			<Container>
				<TextArea
					value={tweetText}
					onChange={handleTextChange}
					placeholder="What's happening Tweet"
				/>
				<ControlsContainer>
					<AddImageBtn>
						<AddImageIcon />
						<Input type="file" onChange={handleImageChange} accept="image/*" />
					</AddImageBtn>
					<AddTweetBtn onClick={handleSubmit} disabled={!tweetText}>
						Tweet
					</AddTweetBtn>
				</ControlsContainer>
			</Container>
		</Item>
	)
}

export default AddTweet
