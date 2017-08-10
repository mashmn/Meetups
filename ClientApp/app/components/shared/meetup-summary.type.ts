import { MeetupStatusType } from './meetup-status-type.enum';
import { MeetupGenre } from './meetup-genre.enum';

export class MeetupSummary {
    meetupId: number;
    meetupName: string;
    type: MeetupStatusType;
    genreType: MeetupGenre;
    seats: number;
    location: string;
}