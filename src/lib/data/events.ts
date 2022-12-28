export interface AdhyaayaEventContact {
    name: string;
    phone: string;
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
    is_active: boolean; // set this to false to hide the event from the list
}

export const EVENTS: AdhyaayaEvent[] = [
    {
        id: 'avishkar',
        mode: 'offline',
        category: 'technical',
        name: 'Avishkar',
        description: 'blah blah blah', //Avishkar is a technical event that tests your knowledge in the field of computer science and technology. It is a 24-hour event that will test your skills in programming, debugging, and logical thinking. It is a team event with a maximum of 3 members per team. The event will be held on 27th and 28th February 2021.
        amount: [160, 160, 160, 160, 160],
        team_members: [1, 2, 3, 4, 5],
        start_date: new Date('28 Feb 2023'),
        end_date: new Date('28 Feb 2023'),
        small_image: 'https://placeimg.com/360/360/tech',
        icon: 'carbon:code',
        poster: 'http://placeimg.com/640/480/tech',
        contact: [
            {
                name: 'Devansh Parapalli',
                phone: '1234567890'
            }
        ],
        is_active: true
    }
]