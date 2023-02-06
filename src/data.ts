import Webber from "./assets/images/avatar-mark-webber.webp";
import Angela from "./assets/images/avatar-angela-gray.webp";
import Jacob from "./assets/images/avatar-jacob-thompson.webp";
import Rizky from "./assets/images/avatar-rizky-hasanuddin.webp";
import Kimberly from "./assets/images/avatar-kimberly-smith.webp";
import Nathan from "./assets/images/avatar-nathan-peterson.webp";
import Anna from "./assets/images/avatar-anna-kim.webp";
import Chess from "./assets/images/image-chess.webp";

export interface Props extends data {
	changeStatusById: any;
}

interface data {
	id: string;
	name: string;
	action?: string;
	message?: string;
	place?: string;
	picture: string;
	picComment?: string;
	time: string;
	privateMsg?: string;
	read: boolean;
}

export const data: data[] = [
	{
		id: "1",
		name: "Mark Webber",
		picture: Webber,
		action: "reacted to your recent post",
		message: "My first tournament today!",
		time: "1m ago",
		read: false,
	},
	{
		id: "2",
		name: "Angela Gray",
		picture: Angela,
		action: "followed you",
		time: "5m ago",
		read: false,
	},
	{
		id: "3",
		name: "Jacob Thompson",
		picture: Jacob,
		action: "has joined your group",
		place: "Chess Club",
		time: "1 day ago",
		read: false,
	},
	{
		id: "4",
		name: "Rizky Hasanuddin",
		picture: Rizky,
		action: "sent you a private message",
		privateMsg:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		time: "5 days ago",
		read: true,
	},
	{
		id: "5",
		name: "Kimberly Smith",
		picture: Kimberly,
		action: "commented on your picture",
		picComment: Chess,
		time: "1 week ago",
		read: true,
	},
	{
		id: "6",
		name: "Nathan Peterson",
		picture: Nathan,
		action: "reacted to your recent post",
		message: "5 end-game strategies to increase your win rate",
		time: "2 weeks ago",
		read: true,
	},
	{
		id: "7",
		name: "Anna Kim",
		picture: Anna,
		action: "left the group",
		place: "Chess Club",
		time: "2 weeks ago",
		read: true,
	},
];
