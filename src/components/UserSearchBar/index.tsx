import { collection, getFirestore, query } from 'firebase/firestore'
import { useMemo, useState } from 'react'
import { useCollectionOnce } from 'react-firebase-hooks/firestore'
import { useNavigate } from 'react-router-dom'

import defaultUserIcon from 'assets/images/userIconLarge.png'
import Loader from 'components/Loader'
import { PROFILE_PAGE_ROUTE } from 'constants/routes'
import { useDebounce } from 'hooks/useDebounce'
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
	const debouncedSearch = useDebounce(search)
	const navigate = useNavigate()

	const db = getFirestore()
	const usersRef = collection(db, 'users')
	const [values, loading] = useCollectionOnce(query(usersRef))

	const users = useMemo(() => {
		return values?.docs.filter((user) => {
			const { name, surname } = user.data() as UserData
			if (
				name.toLowerCase().includes(search.toLowerCase()) ||
				surname.toLowerCase().includes(search.toLowerCase())
			) {
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

	return (
		<SearchBarItem>
			<SeacrhContainer>
				<LikeIcon />
				<SeacrhInput
					type="text"
					value={search}
					placeholder="Search User"
					onChange={handleSearchChange}
				/>
				{loading && <Loader />}
			</SeacrhContainer>

			<TweetsContainer>
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
