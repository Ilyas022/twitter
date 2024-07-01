import {
	BOOKMARKS_PAGE_ROUTE,
	EXPLORE_PAGE_ROUTE,
	FEED_PAGE_ROUTE,
	LISTS_PAGE_ROUTE,
	MESSAGES_PAGE_ROUTE,
	MORE_PAGE_ROUTE,
	NOTIFICATIONS_PAGE_ROUTE,
	PROFILE_PAGE_ROUTE,
} from 'constants/routes'

import { BookmarksIcon, HomeIcon, ExploreIcon, ListsIcon, MessagesIcon, MoreIcon, NotificationIcon, ProfileIcon } from './styled'

export const navbarLinks = [
	{
		icon: HomeIcon,
		title: 'Home',
		path: FEED_PAGE_ROUTE,
	},
	{
		icon: ExploreIcon,
		title: 'Explore',
		path: EXPLORE_PAGE_ROUTE,
	},
	{
		icon: NotificationIcon,
		title: 'Notification',
		path: NOTIFICATIONS_PAGE_ROUTE,
	},
	{
		icon: MessagesIcon,
		title: 'Messages',
		path: MESSAGES_PAGE_ROUTE,
	},
	{
		icon: BookmarksIcon,
		title: 'Bookmarks',
		path: BOOKMARKS_PAGE_ROUTE,
	},
	{
		icon: ListsIcon,
		title: 'Lists',
		path: LISTS_PAGE_ROUTE,
	},
	{
		icon: ProfileIcon,
		title: 'Profile',
		path: PROFILE_PAGE_ROUTE,
	},
	{
		icon: MoreIcon,
		title: 'More',
		path: MORE_PAGE_ROUTE,
	},
]
