import { TweetType } from 'types/interfaces'

import { TweetsTitle, TweetsContainer, NoTweetsText } from './styled'
import TweetItem from './TweetItem'

function Tweets({ tweets }: { tweets?: TweetType[] }) {
	return (
		<>
			<TweetsTitle>Tweets</TweetsTitle>
			<TweetsContainer>
				{tweets?.length ? (
					tweets.map(({ id, text, createdAt, likes, author, imageUrl }) => (
						<TweetItem
							key={id}
							id={id}
							createdAt={createdAt}
							author={author}
							text={text}
							likes={likes}
							imageUrl={imageUrl}
						/>
					))
				) : (
					<NoTweetsText>User doesn&apos;t have any tweets</NoTweetsText>
				)}
			</TweetsContainer>
		</>
	)
}

export default Tweets
