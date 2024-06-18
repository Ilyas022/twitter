import { TweetResponse } from 'types/interfaces'

export type AuthorType = {
	id: string
	tag: string
	surname: string
	name: string
} | null

export type TweetStateType = (TweetResponse & { id: string }) | null
export type TweetType = TweetResponse & { id: string }

export interface ContainerProps {
	$opened: boolean
}
