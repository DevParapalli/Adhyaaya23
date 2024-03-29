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
	is_open: boolean;
}

import virtual_placement_icon from '$lib/assets/icons/virtual-placement.png?url';
import respawn from '$lib/assets/icons/respawn.png?url';
import vaad_vivad from '$lib/assets/icons/vaad-vivad.png?url';
import foodoshit from '$lib/assets/icons/foodoholics.png?url';
import cricbash from '$lib/assets/icons/cricbash.png?url';
import cadoshit from '$lib/assets/icons/cadoshop.png?url';
import jigyasa from '$lib/assets/icons/jigyasa.png?url';
import stargaze from '$lib/assets/icons/stargaze.png?url';
import gdsc from '$lib/assets/icons/gdsc.png?url';
// import multirotor from '$lib/assets/icons/multirotor.png?url';

// import p_coming_soon from '$lib/assets/posters/coming-soon.png?url';
import p_avishkar from '$lib/assets/posters/avishkar.jpg?url';
import p_bridge_o_craft from '$lib/assets/posters/bridge-o-craft.jpg?url';
import p_caddiction from '$lib/assets/posters/caddiction.jpg?url';
import p_codeventure from '$lib/assets/posters/codeventure.jpg?url';
import p_respawn from '$lib/assets/posters/respawn.jpg?url';
import p_virtual_placement from '$lib/assets/posters/vp.jpg?url';
import p_bornpsycos from '$lib/assets/posters/bornpsycos.jpg?url';
import p_cadoshit from '$lib/assets/posters/cad-o-shop.jpg?url';
import p_cricbash from '$lib/assets/posters/cricbash.jpg?url';
import p_foodoholics from '$lib/assets/posters/food-o-holic.jpg?url';
import p_gsdc from '$lib/assets/posters/gsdc.jpg?url';
import p_jigyasa from '$lib/assets/posters/jigyasa.jpg?url';
import p_roborace from '$lib/assets/posters/roborace.jpg?url';
import p_stargaze from '$lib/assets/posters/stargaze.jpg?url';
import p_stock from '$lib/assets/posters/stock.jpg?url';
import p_vaadvivad from '$lib/assets/posters/vaad-vivad.jpg?url';

export const EVENTS: AdhyaayaEvent[] = [
	{
		// this is a pseudoevent.
		id: '::respawn',
		mode: 'offline',
		category: 'non-technical',
		name: 'Respawn',
		description:
			'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.',
		amount: [0, 0, 0],
		team_members: [0, 0, 0],
		start_date: new Date('10 Mar 2023'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: p_respawn,
		contact: [
			{
				name: 'Rohit Bhoge (Valo & COD)',
				phone: '7972520981'
			},
			{
				name: 'Shiwang Pandey (Chess)',
				phone: '8459795840'
			}
		],
		is_active: true,
		is_open: false,
		custom_properties: [
			{
				type: 'select',
				label: 'Select your game',
				options: ['Valorant - Squad', 'CoD Mobile - Quartet', 'Chess - Solo'],
				redirect: ['respawn-valorant', 'respawn-cod', 'respawn-chess']
			}
		]
	},
	{
		id: 'respawn-valorant',
		mode: 'online',
		category: 'non-technical',
		name: 'Respawn Valorant',
		description:
			'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.',
		amount: [249_00],
		team_members: [5],
		start_date: new Date('10 Mar 2023'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: p_respawn,
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
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/HrCxXF4JBjLLoGQmqe89Rr'
	},
	{
		id: 'respawn-chess',
		mode: 'online',
		category: 'non-technical',
		name: 'Respawn Chess',
		description:
			'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.',
		amount: [49_00],
		team_members: [1],
		start_date: new Date('10 Mar 2023'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: p_respawn,
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
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/HV4NPnppeRQBZ9Oiv5wcJc'
	},
	{
		id: 'respawn-cod',
		mode: 'online',
		category: 'non-technical',
		name: 'Respawn COD',
		description:
			'Respawn is an e-sports event featuring popular games like COD, VALORANT and CHESS, available on Mobile and PC platforms. Open to all ages, COD and VALORANT have a team entry fee, with teams of 4 and 5 players respectively. CHESS has a solo entry fee. Matches in COD and VALORANT last for a maximum of 40 minutes and cheating will result in a ban. Joining information will be provided through a WhatsApp group.',
		amount: [159_00],
		team_members: [4],
		start_date: new Date('10 Mar 2023'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${respawn}`,
		poster: p_respawn,
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
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXRX7DJTXR8HGTk1pE4GUw'
	},
	{
		id: '::avishkar',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar',
		description:
			'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!',
		amount: [159_00, 159_00],
		team_members: [2, 4],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: p_avishkar,
		contact: [
			{
				name: 'Pawan Vishwakarma',
				phone: '7499365703'
			},
			{
				name: 'Anmol Moray',
				phone: '8956886685'
			}
		],
		is_active: false,
		is_open: false,
		custom_properties: [
			{
				type: 'select',
				label: 'Mode of Attendance',
				options: ['Offline', 'Online'],
				redirect: ['avishkar-offline', 'avishkar-online']
			}
		]
	},
	{
		id: 'avishkar-online',
		mode: 'online',
		category: 'technical',
		name: 'Avishkar - Online',
		description:
			'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!',
		amount: [159_00, 159_00],
		team_members: [2, 4],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: p_avishkar,
		contact: [
			{
				name: 'Pawan Vishwakarma',
				phone: '7499365703'
			},
			{
				name: 'Anmol Moray',
				phone: '8956886685'
			}
		],
		is_active: false,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg'
	},
	{
		id: 'avishkar-offline',
		mode: 'offline',
		category: 'technical',
		name: 'Avishkar',
		description:
			'Avishkar is a project competition for engineering students to showcase their innovative ideas. Teams can have up to 5 members and projects can be in hardware or software categories. Competition consists of two rounds: elimination and questionnaire. Register today!',
		amount: [159_00, 159_00, 159_00, 159_00],
		team_members: [1, 2, 3, 4],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'flat-color-icons:idea',
		poster: p_avishkar,
		contact: [
			{
				name: 'Anmol Moray',
				phone: '8956886685'
			},
			{
				name: 'Pawan Vishwakarma',
				phone: '7499365703'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/BPDlJw6eH90LKUv0AGcvAg'
	},
	{
		id: 'caddiction',
		mode: 'offline',
		category: 'technical',
		name: 'Caddiction',
		description:
			"Participate in Adhaaya's CADDICTION, a thrilling 3D designing competition that will test your skills and let you compete with your peers. This exciting event comprises two rounds, an online quiz, and a 3D modeling challenge where you can use any CAD software or parametric software to showcase your abilities. The quiz and challenge questions will be tailored to your branch. The event is open to individuals and duos, and there are exciting prizes worth 8K to be won.",
		amount: [79_00, 149_00],
		team_members: [1, 2],
		start_date: new Date('11 Mar 2023 12:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:cad',
		poster: p_caddiction,
		contact: [
			{
				name: 'Vedant Udapure',
				phone: '7507602580'
			},
			{
				name: 'Aishwarya Dharme',
				phone: '8530676156'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/BIEeiqLyfQg41ZKZBT06WG'
	},
	{
		id: 'virtual-placement',
		mode: 'offline',
		category: 'technical',
		name: 'Virtual Placement',
		description:
			"Attention all students! Are you ready to take the first step towards your dream job? Adhyaaya'23 Virtual Placement is here to help you prepare and excel in your upcoming placements. With an entry fee of only 70/- and a price pool of up to 7k, this is an opportunity you cannot miss! You will be tested on your mental ability, communication skills, stress-handling, and confidence. Don't wait, register now and get ready to impress your future employers!",
		amount: [79_00],
		team_members: [1],
		start_date: new Date('9 Mar 2023 12:30'),
		end_date: new Date('10 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${virtual_placement_icon}`,
		// icon: 'healthicons:group-discussion-meetingx3-negative',
		poster: p_virtual_placement,
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
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Bb6BOwMLprsGoz0sggxGaz'
	},
	{
		id: 'codeventure',
		mode: 'online',
		category: 'technical',
		name: 'CodeVenture',
		description:
			'CodeVenture is a coding competition that tests your debugging and coding skills. Showcase your expertise in mathematics, data structures, algorithms and more. Compete solo using any programming language on a PC with a good internet connection. Join us for a thrilling coding experience!',
		amount: [0],
		team_members: [1],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'carbon:code',
		poster: p_codeventure,
		contact: [
			{
				name: 'Sahil Kuhikar',
				phone: '8668556596'
			},
			{
				name: 'Rushikesh Ghawghawe',
				phone: '9607773343'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BcAeNWFxTmBJyR8FwaQNIW'
	},
	{
		id: 'bridge-o-craft',
		mode: 'offline',
		category: 'technical',
		name: 'Bridge-O-Craft',
		description:
			'Bridge-O-Craft by Adhyaaya offers a chance to test your engineering skills with a Treasure Hunt, Bridge Making and Load Bearing Test. Compete for cash prizes, runner up awards and certificates for all participants. Join now!',
		amount: [249_00, 249_00, 249_00, 249_00, 249_00],
		team_members: [1, 2, 3, 4, 5],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'noto:bridge-at-night',
		poster: p_bridge_o_craft,
		contact: [
			{
				name: 'Kalpana Rathod',
				phone: '8010961439'
			},
			{
				name: 'Pratham Chandankhede',
				phone: '7558281643'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/EV0HsCXDKrvC3xcf6hl1YM'
	},
	{
		id: 'roborace',
		mode: 'offline',
		category: 'technical',
		name: 'RoboRace',
		description:
			"Are you ready to test your driving skills in a high-octane race against the clock? Join us for RoboRace, where you'll have the opportunity to navigate a challenging race track using a bot provided by DROID DEVS. Whether you're a seasoned pro or a first-time racer, this event is open to all students, so grab your friends and sign up for a chance to win big prizes! With an easier track to start and a final round with even more challenging obstacles, the competition will be fierce, but only the fastest will come out on top. So what are you waiting for? Join us for an unforgettable event that's sure to be a highlight of the year!",
		amount: [69_00],
		team_members: [1],
		start_date: new Date('10 Mar 2023 11:00'),
		end_date: new Date('10 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'vscode-icons:file-type-robots',
		poster: p_roborace,
		contact: [
			{
				name: 'Madhur Manekar',
				phone: '9373560404'
			},
			{
				name: 'Rushikesh Pawade',
				phone: '9921152443'
			},
			{
				name: 'Vishal Kesharwani',
				phone: '8788707898'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KXtte17v1QuBEgTSesPT2q'
	},
	{
		id: 'vaad-vivad',
		mode: 'offline',
		category: 'non-technical',
		name: 'Vaad Vivad',
		description:
			'VAAD-VIVAAD is a public speaking event with three rounds. Participants will be given topics related to social issues and will have 2 and 4 minutes to express their ideas respectively. Register now by paying the entry fee of 49/- (solo) and boost your public speaking skills',
		amount: [49_00],
		team_members: [1],
		start_date: new Date('10 Mar 2023 11:00'),
		end_date: new Date('10 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${vaad_vivad}`,
		poster: p_vaadvivad,
		contact: [
			{
				name: 'Aditya Damle',
				phone: '8378847784'
			},
			{
				name: 'Nikita Rahangdale',
				phone: '8806986949'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Fihx9B1pCwCEmE6yyJRIs7'
	},
	{
		id: 'bornpsychos',
		mode: 'offline',
		category: 'non-technical',
		name: 'Born-Psychos',
		description:
			'Born Psychos is an adrenaline-fueled event that tests your aptitude skills through exciting rounds and challenges. Hone your critical thinking, leadership, and teamwork abilities while solving riddles and participating in elimination-style games. Join with a team of 4 for 199/-. Embrace your inner psychos and register today for a thrilling experience!',
		amount: [199_00],
		team_members: [4],
		start_date: new Date('11 Mar 2023 10:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'ri:treasure-map-line',
		poster: p_bornpsycos,
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
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/ErzzKroyiw6IoL5pAWzHC5'
	},
	{
		id: 'food-o-holic',
		mode: 'offline',
		category: 'non-technical',
		name: 'Food-O-Holic',
		description:
			'"Food-o-Holic" is an exciting competition for teams of 4 members with an entry fee of 299. The competition consists of 3 rounds: "Screaming Baloons," "Meri Foodie Kismat," and "Desert Dash." In each round, teams compete in food-related challenges and quizzes, from collecting buns with tied hands to finishing a dessert without using their hands. The winning team is decided by points or speed. Register now for a fun and thrilling culinary adventure.',
		amount: [299_00],
		team_members: [4],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${foodoshit}`,
		poster: p_foodoholics,
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
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/KoKTPhgXNZxEof5xHUBLCh'
	},
	{
		id: 'cricbash',
		mode: 'offline',
		category: 'non-technical',
		name: 'Cricbash',
		description:
			'Join the thrilling Cricbash cricket league with a team of 6 (mixed gender). Compete in 5-over matches with fun challenges and special "Bazooka" spot for bonus runs. Hurry and register your team now as slots are limited!',
		amount: [499_00],
		team_members: [6],
		start_date: new Date('9 Mar 2023 12:30'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${cricbash}`,
		poster: p_cricbash,
		contact: [
			{
				name: 'Pranav Patle',
				phone: '7620117921'
			},
			{
				name: 'Vedant Nimgade',
				phone: '7387246212'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/ETCp1yUYn5U8BEDSp5VtBH'
	},
	{
		id: 'cad-o-shop',
		mode: 'offline',
		category: 'workshops',
		name: 'CAD-O-Shop',
		description:
			'Join CAD-O-SHOP, the ultimate destination for all aspiring engineers and designers! This event is an incredible opportunity to learn about the latest software trends and techniques demanded by the industry. With the guidance of expert professionals, you can explore the world of 3D modelling and turn your imagination into reality.',
		amount: [0],
		team_members: [1],
		start_date: new Date('10 Mar 2023 11:00'),
		end_date: new Date('10 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${cadoshit}`,
		poster: p_cadoshit,
		contact: [
			{
				name: 'Vedant Udapure',
				phone: '7507602580'
			},
			{
				name: 'Sahil Brahme',
				phone: '9552269716'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BIEeiqLyfQg41ZKZBT06WG'
	},
	{
		id: 'jigyasa',
		mode: 'offline',
		category: 'workshops',
		name: 'Jigyasa',
		description:
			"Are you passionate about serving your country technically? Want to gain insights and knowledge from esteemed personalities of Defense services/civil services? Join Trishakti Cell in collaboration with Adhyaaya for JIGYASA- an exclusive live interview with Air Vice Marshal Suryakant Chintaman Chafekar (AVSM,SC) Retd. Discover, Diagnose, and Demystify the ways to achieve your goals through this insightful event. Don't miss out on this opportunity to hear from a seasoned expert in the field! Register now, it's free of cost and open to all!",
		amount: [0],
		team_members: [1],
		start_date: new Date('9 Mar 2023 15:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${jigyasa}`,
		poster: p_jigyasa,
		contact: [
			{
				name: 'Dovesh Aglawe',
				phone: '7385417432'
			},
			{
				name: 'Kunal Rahangdale',
				phone: '9657837613'
			},
			{
				name: 'Rohini Shambharkar',
				phone: '8862065056'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/GwpSrB9MEcL4sW54WL1Hto'
	},
	{
		id: 'stargaze',
		mode: 'offline',
		category: 'workshops',
		name: 'Stargaze',
		description:
			"Explore the depths of the universe at Adhyaaya'23! Join the Astronomy Club at GCOEN for expert guest lectures, hands-on exploration sessions, and more. Come and STARGAZE with us!",
		amount: [59_00],
		team_members: [1],
		start_date: new Date('10 Mar 2023 16:00'),
		end_date: new Date('10 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${stargaze}`,
		poster: p_stargaze,
		contact: [
			{
				name: 'Vedant Gotmare',
				phone: '9921707207'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/Kh6yyGQAQRhDOtQ4tUDJFG'
	},
	// {
	// 	id: 'robotics-workshop',
	// 	mode: 'offline',
	// 	category: 'workshops',
	// 	name: 'build a bot',
	// 	description: 'blah blah blah',
	// 	amount: [1600_00],
	// 	team_members: [1],
	// 	start_date: new Date('9 Mar 2023'),
	// 	end_date: new Date('9 Mar 2023'),
	// 	small_image: 'https://placeimg.com/360/360/tech',
	// 	icon: 'carbon:code',
	// 	poster: p_coming_soon,
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
		name: 'Stock OG',
		description:
			"Unleash the Power of the Stock Market: Join us for an exciting offline workshop where you'll learn the fundamentals of investing, develop your own trading strategies, and gain valuable insights from industry experts. Discover how to navigate the twists and turns of the market and make informed decisions that can lead to financial success. Whether you're a beginner or an experienced trader, this workshop is your opportunity to level up your stock market game and achieve your investment goals.",
		amount: [49_00],
		team_members: [1],
		start_date: new Date('9 Mar 2023 13:00'),
		end_date: new Date('9 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: 'icon-park:stock-market',
		poster: p_stock,
		contact: [
			{
				name: 'Shlok Tajne',
				phone: '8237050035'
			},
			{
				name: 'Mithilesh Zalke',
				phone: '9511652253'
			}
		],
		is_active: true,
		is_open: false,
		whatsapp_link: 'https://chat.whatsapp.com/HhguujUB4Hk4cMsLyw6nRJ'
	},
	{
		id: 'gdsc-lecture',
		mode: 'offline',
		category: 'workshops',
		name: 'Blockchain 101',
		description:
			"Adhyaaya in collaboration with GSDC GCOEN and Lumos Labs is bringing the future to your doorstep with their Into the Web3 Metaverse initiative! Join us on March 11th for an exciting 3-hour session where we'll introduce you to the world of Web3, Blockchain 101, and explore the vast career opportunities available in this exciting new space. Hear from industry experts and learn about  exciting opportunities to elevate your Web3 journey. Don't miss this chance to connect with a vibrant community of 60K developers and explore your future in the Web3 ecosystem!",
		amount: [0],
		team_members: [1],
		start_date: new Date('11 Mar 2023 11:00'),
		end_date: new Date('11 Mar 2023'),
		small_image: 'https://placeimg.com/360/360/tech',
		icon: `url::${gdsc}`,
		poster: p_gsdc,
		contact: [
			{
				name: 'Adarsh Jena',
				phone: '7620426119'
			},
			{
				name: 'Neha Malode',
				phone: '7058441799'
			}
		],
		is_active: true,
		is_open: true,
		whatsapp_link: 'https://chat.whatsapp.com/BD6gqwlO5FC5qL4I4WEKAy'
	}
	// {
	// 	id: 'ev-workshop',
	// 	mode: 'offline',
	// 	category: 'workshops',
	// 	name: 'EV Workshop',
	// 	description: 'blah blah blah',
	// 	amount: [100_00],
	// 	team_members: [1],
	// 	start_date: new Date('9 Mar 2023'),
	// 	end_date: new Date('9 Mar 2023'),
	// 	small_image: 'https://placeimg.com/360/360/tech',
	// 	icon: 'bi:ev-station-fill',
	// 	poster: p_coming_soon,
	// 	contact: [
	// 		{
	// 			name: 'Devansh Parapalli',
	// 			phone: '1234567890'
	// 		}
	// 	],
	// 	is_active: true
	// },
	// {
	// 	id: 'aeromodelling-workshop',
	// 	mode: 'offline',
	// 	category: 'workshops',
	// 	name: 'Multirotor Workshop',
	// 	description:
	// 		"Learn about the exciting world of unmanned aerial vehicles (UAVs) with the Multirotor Workshop at Government College of Engineering in Nagpur. This two-day workshop covers the basics of multi-rotors and offers hands-on experience in assembling and configuring a UAV. Led by experienced instructors, it's perfect for beginners and experts alike. Register now to gain practical knowledge and take the first step towards becoming a UAV expert.",
	// 	amount: [2400_00],
	// 	team_members: [1],
	// 	start_date: new Date('9 Mar 2023'),
	// 	end_date: new Date('9 Mar 2023'),
	// 	small_image: 'https://placeimg.com/360/360/tech',
	// 	icon: `url::${multirotor}`,
	// 	poster: p_coming_soon,
	// 	contact: [
	// 		{
	// 			name: 'Sahil Brahme',
	// 			phone: '9552269716'
	// 		},
	// 		{
	// 			name: 'Parth Tirmare',
	// 			phone: '9028606866'
	// 		}
	// 	],
	// 	is_active: true,
	// is_open: false,
	// 	whatsapp_link: 'https://chat.whatsapp.com/HA17R0Jp55cAe6rq6agUfz'
	// }
];
