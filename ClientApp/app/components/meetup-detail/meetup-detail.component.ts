import { Component } from '@angular/core';

@Component({
    selector: 'meetup-detail',
    templateUrl: './meetup-detail.component.html'
})
export class MeetupDetailComponent {
    name: string;

    constructor() {
        this.name = "Sam Gamgee";
    }
}
