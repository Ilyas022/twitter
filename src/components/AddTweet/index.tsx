import ImagePlaceHolder from 'assets/images/defaultUserIcon.png'

import {
	AddImageBtn,
	AddTweetBtn,
	Container,
	ControlsContainer,
	AddImageIcon,
	Input,
	Item,
	TextArea,
	UserIcon,
} from './styled'

function AddTweet() {
	return (
		<Item>
			<UserIcon src={ImagePlaceHolder} />
			<Container>
				<TextArea placeholder="What’s happening Tweet" />
				<ControlsContainer>
					<AddImageBtn>
						<AddImageIcon />
						<Input type="file" />
					</AddImageBtn>
					<AddTweetBtn>Tweet</AddTweetBtn>
				</ControlsContainer>
			</Container>
		</Item>
	)
}

export default AddTweet
