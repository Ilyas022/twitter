import profileBgImage from 'assets/images/profileBgImage.png'
import defaultUserIcon from 'assets/images/userIconLarge.png'
import AddTweet from 'components/AddTweet'
import Tweets from 'components/Tweets'

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
	return (
		<Page>
			<Title>Bobur</Title>
			<TweetsCounter>tweets</TweetsCounter>
			<img src={profileBgImage} alt="" />
			<UserInfo>
				<UserInfoContainer>
					<UserImage src={defaultUserIcon} />
					<UserName>Bobur</UserName>
					<UserTag>@bobur_mavlonov</UserTag>
					<UserDescription>UX&UI designer at @abutechuz</UserDescription>
					<FollowingsInfo>
						<FollowingsItem>
							<FollowingsNumber>67</FollowingsNumber>
							<FollowingsTitle>Following</FollowingsTitle>
						</FollowingsItem>
						<FollowingsItem>
							<FollowingsNumber>67</FollowingsNumber>
							<FollowingsTitle>Following</FollowingsTitle>
						</FollowingsItem>
					</FollowingsInfo>
				</UserInfoContainer>
				<EditProfileBtn>Edit profile</EditProfileBtn>
			</UserInfo>
			<AddTweet />
			<Tweets />
		</Page>
	)
}

export default ProfilePage
