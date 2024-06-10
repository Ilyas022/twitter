import defaultUserIcon from 'assets/images/userIconLarge.png'

import {
	Tweet,
	UsetIcon,
	TweetInner,
	TweetInfo,
	UserNamee,
	UserInfoo,
	UserTagg,
	Sepatarot,
	CreationDate,
	TweetDescription,
	LikeCounter,
	LikeButton,
	LikeIcon,
	LikeNumber,
	OptionsButton,
	OptionsIcon,
} from './styled'

function TweetItem() {
	return (
		<Tweet>
			<UsetIcon src={defaultUserIcon} />
			<TweetInner>
				<TweetInfo>
					<UserNamee>Bobur</UserNamee>
					<UserInfoo>
						<UserTagg>@bobur_mavlonov</UserTagg>
						<Sepatarot />
						<CreationDate>Apr 1</CreationDate>
					</UserInfoo>
				</TweetInfo>
				<TweetDescription>
					4-kursni tugatgunimcha kamida bitta biznesim bo&apos;lishini, uylanish uchun moddiy
					jihatdan to&apos;la-to&apos;kis tayyor bo&apos;lishni, sog&apos;lik va jismoniy holatni
					normallashtirishni reja qildim
				</TweetDescription>
				<LikeCounter>
					<LikeButton>
						<LikeIcon />
					</LikeButton>
					<LikeNumber>9</LikeNumber>
				</LikeCounter>
			</TweetInner>
			<OptionsButton>
				<OptionsIcon />
			</OptionsButton>
		</Tweet>
	)
}

export default TweetItem
