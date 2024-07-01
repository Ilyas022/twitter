import { QuerySnapshot, DocumentData, getDoc, Timestamp } from 'firebase/firestore'

import { TweetResponse, TweetType, User } from 'types/interfaces'

export const getTweetsWithAuthors = async (
	tweetsData: QuerySnapshot<DocumentData, DocumentData> | undefined,
	setter: React.Dispatch<React.SetStateAction<TweetType[] | undefined>>
) => {
	if (!tweetsData) return

	const tweetsWithAuthors: TweetType[] = await Promise.all(
		tweetsData.docs.map(async (tweet) => {
			const { author, createdAt, likes, text, imageUrl } = tweet.data() as TweetResponse
			const authorData = await getDoc(author)

			const authorInfo = authorData.data() as User

			return {
				author: {
					id: author.id,
					tag: authorInfo.tag,
					surname: authorInfo.surname,
					name: authorInfo.name,
					imageUrl: authorInfo.imageUrl,
				},
				createdAt: createdAt || Timestamp.now(),
				id: tweet.id,
				likes,
				text,
				imageUrl,
			}
		})
	)
	setter(tweetsWithAuthors)
}
