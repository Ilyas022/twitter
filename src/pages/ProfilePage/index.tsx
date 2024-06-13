import { collection, doc, getFirestore, orderBy, query, where } from 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import { useCollection, useDocumentData } from 'react-firebase-hooks/firestore'
import { Navigate, useParams } from 'react-router-dom'

import profileBgImage from 'assets/images/profileBgImage.png'
import defaultUserIcon from 'assets/images/userIconLarge.png'
import AddTweet from 'components/AddTweet'
import PopUp from 'components/PopUp'
import EditProfilePopUp from 'components/PopUps/EditProfilePopUp'
import Tweets from 'components/Tweets'
import TweetSearchBar from 'components/TweetSearchBar'
import { NOT_FOUND_PAGE_ROUTE } from 'constants/routes'
import { useTypedSelector } from 'hooks/useTypedSelector'
import { getTweetsWithAuthors } from 'src/api/getTweetsWithAuthors'
import { selectUser } from 'store/selectors/userSelectors'
import { TweetType, UserData } from 'types/interfaces'

import {
	EditProfileBtn,
	Title,
	Page,
	TweetsCounter,
	UserImage,
	UserInfo,
	UserInfoContainer,
	UserName,
	UserTag,
	UserDescription,
	FollowingsInfo,
	FollowingsItem,
	FollowingsNumber,
	FollowingsTitle,
} from './styled'

function ProfilePage() {
	const { id } = useParams()
	const [popUpOpen, setPopUpOpen] = useState(false)
	const { id: userId } = useTypedSelector(selectUser)

	const db = getFirestore()
	const userRef = doc(db, 'users', id as string)
	const [userData, userLoading] = useDocumentData(userRef)

	const tweetsRef = collection(db, 'tweets')

	const [tweetsData, tweetsLoading] = useCollection(
		query(tweetsRef, where('author', '==', userRef), orderBy('createdAt', 'desc'))
	)
	const [tweets, setTweets] = useState<TweetType[]>()

	const IsOnwner = useMemo(() => {
		return id === userId
	}, [])

	useEffect(() => {
		getTweetsWithAuthors(tweetsData, setTweets)
	}, [tweetsData])

	if ((userLoading && tweetsLoading) || userLoading || tweetsLoading) {
		return <div>loading</div>
	}
	if (!userData) {
		return <Navigate to={NOT_FOUND_PAGE_ROUTE} />
	}
	const { name, surname, tag, followers, following, about, imageUrl } = userData as UserData

	const handleOpenPopUp = () => {
		setPopUpOpen((prev) => !prev)
	}

	return (
		<>
			<Page>
				<Title>{name}</Title>
				<TweetsCounter>{tweets?.length || 0} Tweets</TweetsCounter>
				<img src={profileBgImage} alt="" />
				<UserInfo>
					<UserInfoContainer>
						<UserImage src={imageUrl || defaultUserIcon} />
						<UserName>{`${name} ${surname}`}</UserName>
						<UserTag>{tag}</UserTag>
						{about && <UserDescription>{about}</UserDescription>}
						<FollowingsInfo>
							<FollowingsItem>
								<FollowingsNumber>{following || 0}</FollowingsNumber>
								<FollowingsTitle>Following</FollowingsTitle>
							</FollowingsItem>
							<FollowingsItem>
								<FollowingsNumber>{followers || 0}</FollowingsNumber>
								<FollowingsTitle>Followers</FollowingsTitle>
							</FollowingsItem>
						</FollowingsInfo>
					</UserInfoContainer>
					{IsOnwner && <EditProfileBtn onClick={handleOpenPopUp}>Edit profile</EditProfileBtn>}
				</UserInfo>
				{IsOnwner && <AddTweet />}
				<Tweets tweets={tweets} />
				{popUpOpen &&
					createPortal(
						<PopUp handleClose={handleOpenPopUp} title="Edit profile">
							<EditProfilePopUp onClose={handleOpenPopUp} />
						</PopUp>,
						document.body
					)}
			</Page>
			<TweetSearchBar />
		</>
	)
}

export default ProfilePage
