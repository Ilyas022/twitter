import { getFirestore, collection, query, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'

import AddTweet from 'components/AddTweet'
import { ThemeToggler } from 'components/ThemeToggler'
import Tweets from 'components/Tweets'
import UserSearchBar from 'components/UserSearchBar'
import { getTweetsWithAuthors } from 'src/api/getTweetsWithAuthors'
import { TweetType } from 'types/interfaces'

import { Page, PageHeader, Title } from './styled'

function FeedPage() {
	const db = getFirestore()
	const tweetsRef = collection(db, 'tweets')

	const [tweetsData] = useCollection(query(tweetsRef, orderBy('createdAt', 'desc')))
	const [tweets, setTweets] = useState<TweetType[]>()

	useEffect(() => {
		getTweetsWithAuthors(tweetsData, setTweets)
	}, [tweetsData])

	return (
		<>
			<Page>
				<PageHeader>
					<Title>Home</Title>
					<ThemeToggler />
				</PageHeader>
				<AddTweet />
				<Tweets tweets={tweets} />
			</Page>
			<UserSearchBar />
		</>
	)
}

export default FeedPage
