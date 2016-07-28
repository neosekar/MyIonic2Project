import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OwnPage } from '../own/own';
import { ContributedPage } from '../contributed/contributed';
import { InvitationPage } from '../invitation/invitation';


@Component({
  templateUrl: 'build/pages/topic/topic.html'
})
export class TopicPage {
    tab1Root:any;
    tab2Root:any;
    tab3Root:any;

      constructor(private nav: NavController) {
        // set the root pages for each tab
        this.tab1Root = OwnPage;
        this.tab2Root = ContributedPage;
        this.tab3Root = InvitationPage;

      }

}
