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

import orangebits from '$lib/assets/sponsors/orangebits.webp?url';
import pythonacademy from '$lib/assets/sponsors/pythonacademy.webp?url';
import unisoft from '$lib/assets/sponsors/unisoft.webp?url';
import paarangat from '$lib/assets/sponsors/parangat.webp?url';
import frostandfeather from '$lib/assets/sponsors/frostandfeather.webp?url';
import foodisland from '$lib/assets/sponsors/foodisland.webp?url';
import siuk from '$lib/assets/sponsors/siuk.webp?url'
import barcode from '$lib/assets/sponsors/barcode.webp?url'

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
		title: 'Tech Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Python Academy',
		image: pythonacademy,
		link: 'https://www.pythonacademy.in/',
		title: 'Tech Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Unisoft Technologies',
		image: unisoft,
		link: 'http://www.unisoftindia.org/',
		title: 'Tech Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Paarangat Edu.',
		image: paarangat,
		link: 'https://paarangatedu.com/',
		title: 'Tech Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Frost & Feather',
		image: frostandfeather,
		link: 'https://www.instagram.com/frostandfeatherngp/',
		title: 'F&B Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Food Island',
		image: foodisland,
		link: 'https://www.instagram.com/foodislandnagpur/',
		title: 'F&B Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'SIUK',
		image: siuk,
		link: 'https://www.studyin-uk.in/',
		title: 'Edu. Sponsor',
		category: SponsorCategory.GOLD
	},
	{
		name: 'Barcode',
		image: barcode,
		link: '/',
		title: 'Gaming Sponsor',
		category: SponsorCategory.GOLD
	}
];

export const PAST_SPONSORS: AdhyaayaSponsor[] = [];
