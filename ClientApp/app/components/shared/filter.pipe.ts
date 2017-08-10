import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'meetupfilter',
    pure: false
})
export class MeetupFilterPipe implements PipeTransform {
    transform(Meetups: any[], filter: Object): any {
        if (!Meetups || !filter) {
            return Meetups;
        }
        // filter items array, items which match and return true will be kept, false will be filtered out
        return Meetups.filter(meetup => meetup.type.indexOf(filter.type) !== -1);
    }
}