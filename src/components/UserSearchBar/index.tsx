import { collection, getFirestore, query } from 'firebase/firestore'
import { useMemo, useRef, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useNavigate } from 'react-router-dom'

import defaultUserIcon from 'assets/images/userIconLarge.png'
import Loader from 'components/Loader'
import { PROFILE_PAGE_ROUTE } from 'constants/routeLinks'
import { useDebounce } from 'hooks/useDebounce'
import useOnClickOutside from 'hooks/useOnClickOutside'
import { useScreenDetector } from 'hooks/useScreenDetector'
import { UserData } from 'types/interfaces'

import {
	LikeIcon,
	SeacrhContainer,
	SeacrhInput,
	SearchBarItem,
	SearchTweetItem,
	TweetText,
	TweetsContainer,
	NoTweetsText,
	UserImage,
} from './styled'

function UserSearchBar() {
	const [search, setSearch] = useState('')
	const [containerOpened, setContainerOpened] = useState(false)
	const debouncedSearch = useDebounce(search)
	const navigate = useNavigate()

	const inputRef = useRef(null)
	const tweetsContainerRef = useRef(null)

	const { isLargeDesktop } = useScreenDetector()

	const db = getFirestore()
	const usersRef = collection(db, 'users')
	const [values, loading] = useCollection(query(usersRef))

	const users = useMemo(() => {
		return values?.docs.filter((user) => {
			const { name, surname } = user.data() as UserData

			if (name.toLowerCase().includes(search.toLowerCase()) || surname.toLowerCase().includes(search.toLowerCase())) {
				return true
			}
			return false
		})
	}, [values, debouncedSearch])

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const handleUserClick = (id: string) => {
		navigate(`${PROFILE_PAGE_ROUTE}/${id}`)
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
					placeholder="Search User"
					onChange={handleSearchChange}
				/>
				{loading && <Loader />}
			</SeacrhContainer>

			<TweetsContainer ref={tweetsContainerRef} $opened={isLargeDesktop ? true : containerOpened}>
				{users?.length ? (
					users.slice(0, 5).map((user) => {
						const { name, surname, tag, imageUrl } = user.data() as UserData

						return (
							<SearchTweetItem key={user.id} onClick={() => handleUserClick(user.id)}>
								<UserImage src={imageUrl || defaultUserIcon} />
								<div>
									<TweetText>
										{name} {surname}
									</TweetText>
									<TweetText>{tag}</TweetText>
								</div>
							</SearchTweetItem>
						)
					})
				) : (
					<NoTweetsText>There are no users</NoTweetsText>
				)}
			</TweetsContainer>
		</SearchBarItem>
	)
}

export default UserSearchBar
