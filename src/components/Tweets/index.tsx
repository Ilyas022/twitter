import { TweetsTitle, TweetsContainer } from './styled'
import TweetItem from './TweetItem'

function Tweets() {
	return (
		<>
			<TweetsTitle>Tweets</TweetsTitle>
			<TweetsContainer>
				<TweetItem />
			</TweetsContainer>
		</>
	)
}

export default Tweets
