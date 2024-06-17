import { collection, getDoc, getFirestore, query, where } from 'firebase/firestore'
import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useCollection } from 'react-firebase-hooks/firestore'

import Loader from 'components/Loader'
import PopUp from 'components/PopUp'
import TweetItem from 'components/Tweets/TweetItem'
import { useDebounce } from 'hooks/useDebounce'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useScreenDetector } from 'hooks/useScreenDetector'
import { TweetResponse, User } from 'types/interfaces'

import {
	LikeIcon,
	SeacrhContainer,
	SeacrhInput,
	SearchBarItem,
	TweetImage,
	SearchTweetItem,
	TweetText,
	TweetsContainer,
	NoTweetsText,
} from './styled'
import { AuthorType, TweetStateType, TweetType } from './types'

function TweetSearchBar() {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounce(search)
	const [popUpOpen, setPopUpOpen] = useState(false)
	const [currentTweet, setCurrentTweet] = useState<TweetStateType>()
	const [currentAuthor, setCurrentAuthor] = useState<AuthorType>()
	const [containerOpened, setContainerOpened] = useState(false)

	const inputRef = useRef(null)
	const tweetsContainerRef = useRef(null)

	const { isLargeDesktop } = useScreenDetector()

	const db = getFirestore()
	const tweetsRef = collection(db, 'tweets')
	const [values, loading] = useCollection(
		query(
			tweetsRef,
			where('text', '>=', debouncedSearch),
			where('text', '<=', `${debouncedSearch}\uf8ff`)
		)
	)

	useEffect(() => {
		async function getUser() {
			if (currentTweet) {
				const authorRes = await getDoc(currentTweet.author)
				const authorInfo = authorRes.data() as User
				setCurrentAuthor({
					id: authorRes.id,
					tag: authorInfo.tag,
					surname: authorInfo.surname,
					name: authorInfo.name,
				})
			}
		}
		getUser()
	}, [currentTweet])

	useEffect(() => {
		const newTweet = values?.docs.find((tweet) => tweet.id === currentTweet?.id)
		if (newTweet) {
			const newTweetData = { ...newTweet.data(), id: newTweet.id }

			if (JSON.stringify(newTweetData) !== JSON.stringify(currentTweet)) {
				setCurrentTweet(newTweetData as TweetType)
			}
		}
	}, [values])

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const handleTweetClick = (data: TweetType) => () => {
		if (currentTweet?.id !== data.id) {
			setCurrentTweet(data)
		}

		setContainerOpened(false)
		setPopUpOpen(true)
	}

	const handlePopUpOpen = () => {
		setPopUpOpen((prev) => !prev)
	}

	const handleFocus = () => {
		if (!isLargeDesktop) {
			setContainerOpened(true)
		}
	}

	useOnClickOutside(inputRef, (e) => {
		let tweetsContainerClass = ''

		if (tweetsContainerRef.current && e.target && inputRef.current) {
			tweetsContainerClass = `.${(tweetsContainerRef.current as HTMLElement).className.split(' ')[0]}`

			if (!(e?.target as HTMLElement).closest(tweetsContainerClass)) {
				setContainerOpened(false)
			}
		}
	})

	return (
		<SearchBarItem>
			<SeacrhContainer>
				<LikeIcon />
				<SeacrhInput
					ref={inputRef}
					onFocus={handleFocus}
					type="text"
					value={search}
					placeholder="Search Twitter"
					onChange={handleSearchChange}
				/>
				{loading && <Loader />}
			</SeacrhContainer>

			<TweetsContainer ref={tweetsContainerRef} $opened={isLargeDesktop ? true : containerOpened}>
				{values?.docs.length ? (
					values.docs.slice(0, 5).map((tweet) => {
						const { imageUrl, text } = tweet.data() as TweetResponse

						return (
							<SearchTweetItem
								key={tweet.id}
								onClick={handleTweetClick({ ...(tweet.data() as TweetResponse), id: tweet.id })}
							>
								{imageUrl && <TweetImage src={imageUrl} />}
								<TweetText>{text}</TweetText>
							</SearchTweetItem>
						)
					})
				) : (
					<NoTweetsText>There no tweets</NoTweetsText>
				)}
			</TweetsContainer>

			{popUpOpen &&
				currentTweet &&
				currentAuthor &&
				createPortal(
					<PopUp handleClose={handlePopUpOpen} title="Tweet">
						<TweetItem
							onClose={handlePopUpOpen}
							id={currentTweet.id}
							createdAt={currentTweet.createdAt}
							author={currentAuthor}
							text={currentTweet.text}
							likes={currentTweet.likes}
							imageUrl={currentTweet.imageUrl}
						/>
					</PopUp>,
					document.body
				)}
		</SearchBarItem>
	)
}

export default TweetSearchBar
