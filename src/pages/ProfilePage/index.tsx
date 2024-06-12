import { collection, doc, getFirestore, query, where } from 'firebase/firestore'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore'
import { Navigate, useParams } from 'react-router-dom'

import profileBgImage from 'assets/images/profileBgImage.png'
import defaultUserIcon from 'assets/images/userIconLarge.png'
import AddTweet from 'components/AddTweet'
import PopUp from 'components/PopUp'
import EditProfilePopUp from 'components/PopUps/EditProfilePopUp'
import Tweets from 'components/Tweets'
import { NOT_FOUND_PAGE_ROUTE } from 'constants/routes'
import { UserData } from 'types/interfaces'

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

	const db = getFirestore()
	const userRef = doc(db, 'users', id as string)
	const [userData, userLoading] = useDocumentData(userRef)

	const tweetsRef = collection(db, 'tweets')

	const [tweetsData, tweetsLoading] = useCollectionData(
		query(tweetsRef, where('author', '==', userRef))
	)

	if ((userLoading && tweetsLoading) || userLoading || tweetsLoading) {
		return <div>loading</div>
	}
	if (!userData) {
		return <Navigate to={NOT_FOUND_PAGE_ROUTE} />
	}
	const { name, surname, tag, followers, following, numberOfTweets, about } = userData as UserData

	const handleOpenPopUp = () => {
		setPopUpOpen((prev) => !prev)
	}

	return (
		<Page>
			<Title>{name}</Title>
			<TweetsCounter>{tweetsData?.length || 0} Tweets</TweetsCounter>
			<img src={profileBgImage} alt="" />
			<UserInfo>
				<UserInfoContainer>
					<UserImage src={defaultUserIcon} />
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
				<EditProfileBtn onClick={handleOpenPopUp}>Edit profile</EditProfileBtn>
			</UserInfo>
			<AddTweet numberOfTweets={numberOfTweets} />
			<Tweets />
			{popUpOpen &&
				createPortal(
					<PopUp handleClose={handleOpenPopUp} title="Edit profile">
						<EditProfilePopUp onClose={handleOpenPopUp} />
					</PopUp>,
					document.body
				)}
		</Page>
	)
}

export default ProfilePage
