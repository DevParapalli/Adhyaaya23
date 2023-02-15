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

import orangebits from '$lib/assets/sponsors/orangebits.png?url';
import pythonacademy from '$lib/assets/sponsors/pythonacademy.png?url';
import unisoft from '$lib/assets/sponsors/unisoft.png?url';
import paarangat from '$lib/assets/sponsors/parangat.png?url';
import frostandfeather from '$lib/assets/sponsors/frostandfeather.png?url';

export const SPONSORS: AdhyaayaSponsor[] = [
	{
		name: 'Sponsor Name',
		image: 'https://via.placeholder.com/600x400',
		link: 'https://www.google.com',
		title: 'Title Sponsor',
		category: SponsorCategory.TITLE
	},
	{
		name: 'Orange Bits',
		image: orangebits,
		link: 'https://orangebitsindia.com/',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Python Academy',
		image: pythonacademy,
		link: 'https://www.pythonacademy.in/',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Unisoft Technologies',
		image: unisoft,
		link: 'http://www.unisoftindia.org/',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Paarangat Edu.',
		image: paarangat,
		link: 'https://paarangatedu.com/',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Frost & Feather',
		image: frostandfeather,
		link: 'https://www.google.com',
		title: 'Sponsor',
		category: SponsorCategory.GOLD
	}
];

export const PAST_SPONSORS: AdhyaayaSponsor[] = [];
