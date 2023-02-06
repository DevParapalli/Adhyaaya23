export enum SponsorCategory {
	BRONZE = 'BRONZE',
	SILVER = 'SILVER',
	GOLD = 'GOLD',
	TITLE = 'TITLE'
}

export interface AdhyaayaSponsor {
	name?: string; // Name of the sponsor
	image: string; // Image for the card
	link: string; // Link to their website/creatives etc
	title: string; // Advertizing Partner
	category?: SponsorCategory; // SILVER, GOLD, PLATINUM, DIAMOND, TITLE
}

export const SPONSORS: AdhyaayaSponsor[] = [
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/600x400',
		link: 'https://www.google.com',
		title: 'Title Sponsor',
		category: SponsorCategory.TITLE
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/200x200',
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	}
];
