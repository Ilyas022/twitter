import { arrayRemove, arrayUnion, deleteDoc, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { useRef, useState } from 'react'

import defaultUserIcon from 'assets/images/userIconLarge.png'
import { useActions } from 'hooks/useActions'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { selectUser } from 'store/selectors/userSelectors'

import {
	Tweet,
	UsetIcon,
	TweetInner,
	TweetInfo,
	UserName,
	UserInfo,
	UserTag,
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
import { TweetItemProps } from './types'

function TweetItem({ author, createdAt, id, likes, text, imageUrl, onClose }: TweetItemProps) {
	const [optionsOpened, setOptionsOpened] = useState(false)
	const date = createdAt.toDate()
	const month = date.toLocaleString('en', { month: 'long' })
	const day = date.getDate()

	const ref = useRef(null)
	const { id: userId, numberOfTweets } = useTypedSelector(selectUser)
	const { decTweetsNumber } = useActions()

	const db = getFirestore()
	const tweetRef = doc(db, 'tweets', id)
	const userRef = doc(db, 'users', userId)

	const isLiked = !!likes.find((like) => like.id === userId)
	const canDeleteTweet = author.id === userId

	const handleLikeClick = () => {
		if (isLiked) {
			updateDoc(tweetRef, { likes: arrayRemove(userRef) })
		} else {
			updateDoc(tweetRef, { likes: arrayUnion(userRef) })
		}
	}

	const handleDeleteClick = async () => {
		if (canDeleteTweet) {
			await deleteDoc(doc(db, 'tweets', id))

			updateDoc(userRef, { numberOfTweets: numberOfTweets - 1 })
			decTweetsNumber()
			if (onClose) {
				onClose()
			}
		}
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
					<UserName>{`${author.name} ${author.surname}`}</UserName>
					<UserInfo>
						<UserTag>{author.tag}</UserTag>
						<Sepatarot />
						<CreationDate>{`${day} ${month}`}</CreationDate>
					</UserInfo>
				</TweetInfo>
				<TweetDescription>{text}</TweetDescription>
			</TweetInner>
			{canDeleteTweet && (
				<OptionsButton onClick={handleOptionsOpen}>
					<OptionsIcon />
				</OptionsButton>
			)}
			{optionsOpened && (
				<OptionsPopUp ref={ref}>
					<OptionsItem onClick={handleDeleteClick}>Delete tweet</OptionsItem>
				</OptionsPopUp>
			)}
			{imageUrl && <TweetImage src={imageUrl} />}
			<LikeCounter>
				<LikeButton onClick={handleLikeClick} $isLiked={isLiked}>
					{isLiked ? <LikeIconActive /> : <LikeIcon />}
				</LikeButton>
				<LikeNumber>{likes.length}</LikeNumber>
			</LikeCounter>
		</Tweet>
	)
}

export default TweetItem
