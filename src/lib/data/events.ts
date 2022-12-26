export interface AdhyaayaEventContact {
    name: string;
    phone: string;
}

export interface AdhyaayaEvent {
    // event reference id, used in the url and internally
    id: string;
    mode: string; // Offline / Online etc
    category: string; // Technical / Non-Technical etc
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

export const EVENTS: AdhyaayaEvent[] = []