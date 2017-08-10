import { Component } from '@angular/core';
import { MeetupStatusType } from "../shared/meetup-status-type.enum";
import { MeetupGenre } from '../shared/meetup-genre.enum';
import { MeetupSummary } from "../shared/meetup-summary.type";

@Component({
    selector: 'meetup-list',
    templateUrl: './meetup-list.component.html'
})
export class MeetupListComponent {

    //Meetups: MeetupSummary[];
    //activeMeetups: { type: MeetupStatusType.Active };
    //attendedMeetups: { type: MeetupStatusType.Attended };

    activeMeetups: MeetupSummary[];
    attendedMeetups: MeetupSummary[];

    constructor() {
        this.activeMeetups = [
            { meetupId: 123, meetupName: "Facebook",    type: MeetupStatusType.Active,      genreType: MeetupGenre.Technical,   seats: 10,  location: "New York" },
            { meetupId: 142, meetupName: "Google",      type: MeetupStatusType.Active,      genreType: MeetupGenre.Technical,   seats: 20,  location: "California" },
            { meetupId: 166, meetupName: "Amazon",      type: MeetupStatusType.Active,      genreType: MeetupGenre.Art,         seats: 45,  location: "Seattle" }
        ];
        this.attendedMeetups = [
            { meetupId: 222, meetupName: "Apple", type: MeetupStatusType.Attended, genreType: MeetupGenre.Art, seats: 500, location: "Seattle" }
        ];
    }
}
