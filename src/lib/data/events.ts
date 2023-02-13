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

import virtual_placement_icon from '$lib/assets/icons/virtual-placement.png?url'
import respawn from '$lib/assets/icons/respawn.png?url'
import vaad_vivad from '$lib/assets/icons/vaad-vivad.png?url'
import foodoshit from '$lib/assets/icons/foodoholics.png?url'
import cricbash from '$lib/assets/icons/cricbash.png?url'
import cadoshit from '$lib/assets/icons/cadoshop.png?url'
import jigyasa from '$lib/assets/icons/jigyasa.png?url'
import stargaze from '$lib/assets/icons/stargaze.png?url'
import gdsc from '$lib/assets/icons/gdsc.png?url'

export const EVENTS: AdhyaayaEvent[] = [
	
	{	
		// this is a pseudoevent.
		id: '::respawn',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn',
		description: 'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.', 
		amount: [0, 0, 0],
		team_members: [0, 0, 0],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Rohit Bhoge',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey',
				phone: '8459795840'
			},
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
		description: 'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.', 
		amount: [250_00],
		team_members: [5],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,	
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Rohit Bhoge',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey',
				phone: '8459795840'
			}
		],
		is_active: false,
		whatsapp_link: "https://chat.whatsapp.com/HrCxXF4JBjLLoGQmqe89Rr"
	},
	{	
		
		id: 'respawn-chess',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn Chess',
		description: 'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.', 
		amount: [50_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Rohit Bhoge',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey',
				phone: '8459795840'
			}
		],
		is_active: false,
	},
	{	
		
		id: 'respawn-cod',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn COD',
		description: 'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.', 
		amount: [160_00],
		team_members: [4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Rohit Bhoge',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey',
				phone: '8459795840'
			}
		],
		is_active: false,
	},
	{
		id: '::avishkar',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar',
		description: 'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!', 
		amount: [160_00, 160_00, 160_00, 160_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Vikas Yadav',
				phone: '8767666388'
			},
			{
				name: 'Sudarshan Malkar',
				phone: '9763682990'
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
		description: 'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!', 
		amount: [160_00, 160_00, 160_00, 160_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Vikas Yadav',
				phone: '8767666388'
			},
			{
				name: 'Sudarshan Malkar',
				phone: '9763682990'
			}
		],
		is_active: false,
		whatsapp_link: "https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg"
	},
	{
		id: 'avishkar-offline',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar - Offline',
		description: 'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!', 
		amount: [160_00, 160_00, 160_00, 160_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Vikas Yadav',
				phone: '8767666388'
			},
			{
				name: 'Sudarshan Malkar',
				phone: '9763682990'
			}
		],
		is_active: false, 
		whatsapp_link: "https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg"
	},
    {
		id: 'caddiction',
		mode: 'offline',
		category: 'technical',
		name: 'Caddiction',
		description: 'blah blah blah', 
		amount: [70_00, 130_00],
		team_members: [1, 2],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:cad',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Aishwarya Dharme',
				phone: '8530676156'
			},
			{
				name: 'Vedant Udapure',
				phone: '7507602580'
			}
		],
		is_active: true
	},
	{
		id: 'virtual-placement',
		mode: 'offline',
		category: 'technical',
		name: 'Virtual Placement',
		description: 'blah blah blah', 
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
				name: 'Spandan Ghate',
				phone: '8788501277'
			},
			{
				name: 'Shreedhar Shinde',
				phone: '7058180488'
			}
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/Bb6BOwMLprsGoz0sggxGaz"
	},
	{
		id: 'codeventure',
		mode: 'offline',
		category: 'technical',
		name: 'CodeVenture',
		description: 'CodeVenture is a coding competition that tests your debugging and coding skills. Showcase your expertise in mathematics, data structures, algorithms and more. Compete solo using any programming language on a PC with a good internet connection. Join us for a thrilling coding experience!', 
		amount: [50_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Rushikesh Ghawghawe',
				phone: '9607773343'
			},
			{
				name: 'Sahil Kuhikar',
				phone: '8668556596'
			}
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/BcAeNWFxTmBJyR8FwaQNIW"
	},
	{
		id: 'bridge-o-craft',
		mode: 'offline',
		category: 'technical',
		name: 'Bridge-O-Craft',
		description: 'Bridge-O-Craft by Adhyaaya offers a chance to test your engineering skills with a Treasure Hunt, Bridge Making and Load Bearing Test. Compete for cash prizes, runner up awards and certificates for all participants. Join now!', 
		amount: [250_00, 250_00, 250_00, 250_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'noto:bridge-at-night',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Pratham Chandankhede',
				phone: '7558281643'
			},
			{
				name: 'Kalpana Rathod',
				phone: '8010961439'
			}
		],
		is_active: true
	},
	{
		id: 'roborace',
		mode: 'offline',
		category: 'technical',
		name: 'RoboRace',
		description: 'blah blah blah', 
		amount: [100_00], //TODO: Confirm the details for this event
		team_members: [4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'vscode-icons:file-type-robots',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Vishal Kesharwani',
				phone: '8788707898'
			},
			{
				name: 'Madhur Manekar',
				phone: '9373560404'
			},

		],
		is_active: false
	},
	{
		id: 'vaad-vivad',
		mode: 'offline',
		category: 'non-technical',
		name: 'Vaad Vivad',
		description: 'VAAD-VIVAAD is a public speaking event with two rounds: an elocution competition and an extempore round. Participants will be given topics related to social issues and will have 2 and 4 minutes to express their ideas respectively. Register now by paying the entry fee of 50/- (solo) and boost your public speaking skills', 
		amount: [50_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${vaad_vivad}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Nikita',
				phone: '8806986949'
			},
			{
				name: 'Aditya Damble',
				phone: '8378847784'
			}
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/Fihx9B1pCwCEmE6yyJRIs7"
	},
	{
		id: 'bornpsychos',
		mode: 'offline',
		category: 'non-technical',
		name: 'Born-Psychos',
		description: 'Born Psychos is an adrenaline-fueled event that tests your aptitude skills through exciting rounds and challenges. Hone your critical thinking, leadership, and teamwork abilities while solving riddles and participating in elimination-style games. Join with a team of 2 or 4 for a fee of 80/- or 160/- respectively. Embrace your inner psychos and register today for a thrilling experience!',
		amount: [80_00, 160_00],
		team_members: [2, 4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'ri:treasure-map-line',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Reshal Bhati',
				phone: '7447286876'
			},
			{
				name: 'Neha Diwate',
				phone: '9529313858'
			},
			{
				name: 'Janhavi Holey',
				phone: '8767265517'
			},
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/ErzzKroyiw6IoL5pAWzHC5"
	},
	{
		id: 'food-o-holic',
		mode: 'offline',
		category: 'non-technical',
		name: 'Food-O-Holic',
		description: '"Food-o-Holic" is an exciting competition for teams of 4 members with an entry fee of 240. The competition consists of 3 rounds: "Lord of Buns," "Khao to Jane," and "Desert Dash." In each round, teams compete in food-related challenges and quizzes, from collecting buns with tied hands to finishing a dessert without using their hands. The winning team is decided by points or speed. Register now for a fun and thrilling culinary adventure.', 
		amount: [240_00],
		team_members: [4],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${foodoshit}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Riya Pashine',
				phone: '9226720135'
			},
			{
				name: 'Pranav Supare',
				phone: '9370231042'
			}
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/KoKTPhgXNZxEof5xHUBLCh"
	},
	{
		id: 'cricbash',
		mode: 'offline',
		category: 'non-technical',
		name: 'Cricbash',
		description: 'Join the thrilling Cricbash cricket league with a team of 6 (mixed gender). Compete in 5-over matches with fun challenges and special "Bazooka" spot for bonus runs. Hurry and register your team now as slots are limited!', 
		amount: [420_00],
		team_members: [6],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${cricbash}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Pranav Patle',
				phone: '7620117921'
			}
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/ETCp1yUYn5U8BEDSp5VtBH"
	},
	// TODO: Finalize the data for these...
	{
		id: 'cad-o-shop',
		mode: 'offline', 
		category: 'workshops',
		name: 'CAD-O-Shop',
		description: 'blah blah blah', 
		amount: [0],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${cadoshit}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Aishwarya Dharme',
				phone: '8530676156'
			},
			{
				name: 'Vedant Udapure',
				phone: '7507602580'
			}
		],
		is_active: true
	},
	{
		id: 'jigyasa',
		mode: 'offline', 
		category: 'workshops',
		name: 'Jigyasa',
		description: 'blah blah blah', 
		amount: [0],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${jigyasa}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Rushikesh Ghawghawe',
				phone: '9607773343'
			}
		],
		is_active: true,
		whatsapp_link: "https://chat.whatsapp.com/GwpSrB9MEcL4sW54WL1Hto"
	},
	{
		id: 'stargaze',
		mode: 'offline', 
		category: 'workshops',
		name: 'Stargaze',
		description: 'blah blah blah', 
		amount: [40_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${stargaze}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Vedant Gotmare',
				phone: '9921707207'
			}
		],
		is_active: true
	},
	// {
	// 	id: 'robotics-workshop',
	// 	mode: 'offline', 
	// 	category: 'workshops',
	// 	name: 'build a bot',
	// 	description: 'blah blah blah', 
	// 	amount: [1600_00],
	// 	team_members: [1],
	// 	start_date: new Date('28 Feb 2023'),
	// 	end_date: new Date('28 Feb 2023'),
	// 	small_image: 'https://placeimg.com/360/360/tech',
	// 	icon: 'carbon:code',
	// 	poster: 'http://placeimg.com/1280/720/tech',
	// 	contact: [
	// 		{
	// 			name: 'suss',
	// 			phone: '1234567890'
	// 		}
	// 	],
	// 	is_active: true
	// },
	{
		id: 'stock-market-workshop',
		mode: 'offline', 
		category: 'workshops',
		name: 'Stock Market Workshop',
		description: 'blah blah blah', 
		amount: [100_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'icon-park:stock-market',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Shlok Tajne',
				phone: '8237050035'
			},
			{
				name: 'Mithilesh Zalke',
				phone: '9511652253'
			},
		],
		is_active: true
	},
	{
		id: 'gdsc-lecture',
		mode: 'offline', 
		category: 'workshops',
		name: 'when is google',
		description: 'blah blah blah', 
		amount: [0],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${gdsc}`,
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Neha Malode',
				phone: '7058441799'
			}
		],
		is_active: true
	},
	{
		id: 'ev-workshop',
		mode: 'offline', 
		category: 'workshops',
		name: 'EV Workshop',
		description: 'blah blah blah', 
		amount: [100_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'bi:ev-station-fill',
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
		name: 'Aeromodelling Workshop',
		description: 'blah blah blah', 
		amount: [2400_00],
		team_members: [1],
		start_date: new Date('28 Feb 2023'),
		end_date: new Date('28 Feb 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'mdi:aeroplane',
		poster: 'http://placeimg.com/1280/720/tech',
		contact: [
			{
				name: 'Sahil Brahme',
				phone: '9552269716'
			},
			{
				name: 'Parth Tirmare',
				phone: '9028606866'
			},
		],
		is_active: true,
		whatsapp_link: 'https://chat.whatsapp.com/HA17R0Jp55cAe6rq6agUfz'
	},
];
