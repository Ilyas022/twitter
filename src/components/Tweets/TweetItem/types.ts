import { TweetType } from 'types/interfaces'

export type TweetItemProps = TweetType & { onClose?: () => void }
