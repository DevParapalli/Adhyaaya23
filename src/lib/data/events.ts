export interface AdhyaayaEventContact {
	name: string;
	phone: string;
}

export interface AdhyaayaCustomProperty {
	type: 'text' | 'select' | 'checkbox';
	label: string;
	options: string[];
	redirect: string[];
}

export interface AdhyaayaEvent {
	// event reference id, used in the url and internally
	id: string;
	mode: 'offline' | 'online'; // Offline / Online etc
	category: 'technical' | 'non-technical' | 'workshops'; // Technical / Non-Technical etc
	// Title of the event, used everywhere publicly
	name: string;
	description: string;
	// Make sure they are paired, amount[0] is for team_members[0]
	amount: number[];
	team_members: number[];
	// Gives the date and time of the event
	start_date: Date;
	end_date: Date;

	small_image: string; // Image for the card
	icon: string; // icon to use where entire image is not required
	poster: string; // Image for the event page
	contact: AdhyaayaEventContact[];
	whatsapp_link?: string;
	custom_instructions?: string[];
	is_active: boolean; // set this to false to hide the event from the list
	// Set values in this for custom props to take.
	custom_properties?: AdhyaayaCustomProperty[];
}

import virtual_placement_icon from '$lib/assets/icons/virtual-placement.png'


export const EVENTS: AdhyaayaEvent[] = [
	
	{	
		// this is a pseudoevent.
		id: '::respawn',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [0, 0, 0],
		team_members: [0, 0, 0],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true,
		custom_properties: [
			{
				type: 'select',
				label: 'Select your game',
				options: [
					'Valorant - Squad',
					'CoD Mobile - Quartet',
					'Chess - Solo',
				],
				redirect: [
					'respawn-valorant',
					'respawn-cod',
					'respawn-chess',
				]
			}
		]
	},
	{	
		
		id: 'respawn-valorant',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn Valorant',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [250_00],
		team_members: [5],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: false,
	},
	{	
		
		id: 'respawn-chess',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn Chess',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [50_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: false,
	},
	{	
		
		id: 'respawn-cod',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn COD',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [160_00],
		team_members: [4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: false,
	},
	{
		id: '::avishkar',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [160_00, 160_00, 160_00, 160_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true,
		custom_properties: [
			{
				type: 'select',
				label: 'Mode of Attendance',
				options: [
					'Offline',
					'Online'
				],
				redirect: [
					'avishkar-offline',
					'avishkar-online'
				]
			}
		]
	},
	{
		id: 'avishkar-online',
		mode: 'online',
		category: 'technical',
		name: 'Avishkar - Online',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [160_00, 160_00, 160_00, 160_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: false
	},
	{
		id: 'avishkar-offline',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar - Offline',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [160_00, 160_00, 160_00, 160_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: false
	},
    {
		id: 'caddiction',
		mode: 'offline',
		category: 'technical',
		name: 'Caddiction',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [70_00, 130_00],
		team_members: [1, 2],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:cad',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'virtual-placement',
		mode: 'offline',
		category: 'technical',
		name: 'Virtual Placement',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [80_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${virtual_placement_icon}`,
		// icon: 'healthicons:group-discussion-meetingx3-negative',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'codeventure',
		mode: 'offline',
		category: 'technical',
		name: 'CodeVenture',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [50_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'bridge-o-craft',
		mode: 'offline',
		category: 'technical',
		name: 'Bridge-O-Craft',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [250_00, 250_00, 250_00, 250_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'noto:bridge-at-night',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'roborace',
		mode: 'offline',
		category: 'technical',
		name: 'RoboRace',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [100_00], //TODO: Confirm the details for this event
		team_members: [4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'vscode-icons:file-type-robots',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'vaad-vivad',
		mode: 'offline',
		category: 'non-technical',
		name: 'Vaad Vivad',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [50_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	// TODO: Respawn
	{
		id: 'bornpsychos',
		mode: 'offline',
		category: 'non-technical',
		name: 'Born-Psychos',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [80_00, 160_00],
		team_members: [2, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'ri:treasure-map-line',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'food-o-holics',
		mode: 'offline',
		category: 'non-technical',
		name: 'Food-O-Holics',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [240_00],
		team_members: [4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'cricbash',
		mode: 'offline',
		category: 'non-technical',
		name: 'Cricbash',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [420_00],
		team_members: [6],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	// TODO: Finalize the data for these...
	{
		id: 'cad-o-shop',
		mode: 'offline', 
		category: 'workshops',
		name: 'CAD-O-Shop',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [0],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'jigyasa',
		mode: 'offline', 
		category: 'workshops',
		name: 'Jigyasa',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [0],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'stargaze',
		mode: 'offline', 
		category: 'workshops',
		name: 'Stargaze',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [40_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'robotics-workshop',
		mode: 'offline', 
		category: 'workshops',
		name: 'build a bot',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [1600_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'gdsc-lecture',
		mode: 'offline', 
		category: 'workshops',
		name: 'when is google',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [1600_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'photography-workshop',
		mode: 'offline', 
		category: 'workshops',
		name: 'i shoot kids',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [1600_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'aeromodelling-workshop',
		mode: 'offline', 
		category: 'workshops',
		name: 'airplane go brrrrrrr',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [1600_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
	{
		id: 'aeromodelling-workshop',
		mode: 'online', 
		category: 'workshops',
		name: 'airplane go brrrrrrr',
		description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
		amount: [1600_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Devansh Parapalli',
				phone: '1234567890'
			}
		],
		is_active: true
	},
];
