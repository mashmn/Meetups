import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MeetupSummary } from '../shared/meetup-summary.type';

@Component({
    selector: 'meetup-summary',
    templateUrl: './meetup-summary.component.html',
    styleUrls: ['./meetup-summary.component.css']
})
export class MeetupSummaryComponent {

    @Input() meetupSummary: MeetupSummary
    constructor(private router: Router) {
    }

    navigateToDetail() {
        this.router.navigate(["meetup", "12345"]);
    }
}