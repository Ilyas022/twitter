import {
	collection,
	doc,
	getDoc,
	getFirestore,
	onSnapshot,
	orderBy,
	query,
	Timestamp,
	where,
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TweetResponse, TweetType, User } from 'types/interfaces'

import { TweetsTitle, TweetsContainer, NoTweetsText } from './styled'
import TweetItem from './TweetItem'

function Tweets() {
	const [tweets, setTweets] = useState<TweetType[]>([])

	const { id: userPageId } = useParams()

	const db = getFirestore()
	const userRef = doc(db, 'users', userPageId as string)
	const messagesRef = collection(db, 'tweets')
	const queryMessages = query(
		messagesRef,
		where('author', '==', userRef),
		orderBy('createdAt', 'desc')
	)

	useEffect(() => {
		const unsuscribe = onSnapshot(queryMessages, async (snapshot) => {
			const tweetsArr: TweetType[] = await Promise.all(
				snapshot.docs.map(async (tweetDoc) => {
					const { author, createdAt, likes, text, imageUrl } = tweetDoc.data() as TweetResponse
					const authorData = await getDoc(author)
					const authorInfo = authorData.data() as User

					return {
						author: {
							id: authorData.id,
							tag: authorInfo.tag,
							surname: authorInfo.surname,
							name: authorInfo.name,
						},
						createdAt: tweetDoc.metadata.hasPendingWrites ? Timestamp.now() : createdAt,
						id: tweetDoc.id,
						likes,
						text,
						imageUrl,
					}
				})
			)

			setTweets(tweetsArr)
		})
		return () => unsuscribe()
	}, [])

	return (
		<>
			<TweetsTitle>Tweets</TweetsTitle>
			<TweetsContainer>
				{tweets.length ? (
					tweets.map(({ id, text, createdAt, likes, author, imageUrl }) => (
						<TweetItem
							key={id}
							id={id}
							createdAt={createdAt}
							author={author}
							text={text}
							likes={likes}
							imageUrl={imageUrl}
						/>
					))
				) : (
					<NoTweetsText>User doesn&apos;t have any tweets</NoTweetsText>
				)}
			</TweetsContainer>
		</>
	)
}

export default Tweets
