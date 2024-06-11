import {
	arrayRemove,
	arrayUnion,
	deleteDoc,
	doc,
	getFirestore,
	updateDoc,
} from 'firebase/firestore'
import { useRef, useState } from 'react'

import defaultUserIcon from 'assets/images/userIconLarge.png'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'
import { TweetType } from 'types/interfaces'

import {
	Tweet,
	UsetIcon,
	TweetInner,
	TweetInfo,
	UserNamee,
	UserInfoo,
	UserTagg,
	Sepatarot,
	CreationDate,
	TweetDescription,
	LikeCounter,
	LikeButton,
	LikeIcon,
	LikeNumber,
	OptionsButton,
	OptionsIcon,
	LikeIconActive,
	TweetImage,
	OptionsPopUp,
	OptionsItem,
} from './styled'

function TweetItem({ author, createdAt, id, likes, text, imageUrl }: TweetType) {
	const [optionsOpened, setOptionsOpened] = useState(false)
	const date = createdAt.toDate()
	const month = date.toLocaleString('en', { month: 'long' })
	const day = date.getDate()

	const ref = useRef(null)
	const { id: userId } = useTypedSelector(selectUser)

	const db = getFirestore()
	const tweetRef = doc(db, 'tweets', id)
	const userRef = doc(db, 'users', userId)

	const isLiked = !!likes.find((like) => like.id === userId)

	const handleLikeClick = () => {
		if (isLiked) {
			updateDoc(tweetRef, { likes: arrayRemove(userRef) })
		} else {
			updateDoc(tweetRef, { likes: arrayUnion(userRef) })
		}
	}

	const handleDeleteClick = async () => {
		await deleteDoc(doc(db, 'tweets', id))
	}

	const handleOptionsOpen = () => {
		setOptionsOpened((prev) => !prev)
	}

	useOnClickOutside(ref, () => {
		setOptionsOpened(false)
	})

	return (
		<Tweet>
			<UsetIcon src={defaultUserIcon} />
			<TweetInner>
				<TweetInfo>
					<UserNamee>{`${author.name} ${author.surname}`}</UserNamee>
					<UserInfoo>
						<UserTagg>{author.tag}</UserTagg>
						<Sepatarot />
						<CreationDate>{`${day} ${month}`}</CreationDate>
					</UserInfoo>
				</TweetInfo>
				<TweetDescription>{text}</TweetDescription>
				{imageUrl && <TweetImage src={imageUrl} />}
				<LikeCounter>
					<LikeButton onClick={handleLikeClick} $isLiked={isLiked}>
						{isLiked ? <LikeIconActive /> : <LikeIcon />}
					</LikeButton>
					<LikeNumber>{likes.length}</LikeNumber>
				</LikeCounter>
			</TweetInner>
			<OptionsButton onClick={handleOptionsOpen}>
				<OptionsIcon />
			</OptionsButton>
			{optionsOpened && (
				<OptionsPopUp ref={ref}>
					<OptionsItem onClick={handleDeleteClick}>Delete tweet</OptionsItem>
				</OptionsPopUp>
			)}
		</Tweet>
	)
}

export default TweetItem
