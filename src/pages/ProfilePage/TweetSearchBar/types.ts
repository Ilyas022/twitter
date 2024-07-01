import { TweetResponse } from 'types/interfaces'

export type AuthorType = {
	id: string
	tag: string
	surname: string
	name: string
	imageUrl: string | null
} | null

export type TweetStateType = (TweetResponse & { id: string }) | null
export type TweetType = TweetResponse & { id: string }

export interface TweetsContainerProps {
	$opened: boolean
}
