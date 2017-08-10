import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { HomeComponent } from './components/home/home.component';
import { MeetupListComponent } from './components/meetup-list/meetup-list.component';
import { MeetupSummaryComponent } from './components/meetup-summary/meetup-summary.component';
import { MeetupDetailComponent } from './components/meetup-detail/meetup-detail.component';
import { HeaderComponent } from './components/shared/header.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        MeetupListComponent,
        MeetupDetailComponent,
        MeetupSummaryComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'meetup', pathMatch: 'full' },
            { path: 'meetup', component: MeetupListComponent },
            { path: 'meetup/:id', component: MeetupDetailComponent },
            { path: '**', redirectTo: 'meetup' }
        ])
    ]
};
