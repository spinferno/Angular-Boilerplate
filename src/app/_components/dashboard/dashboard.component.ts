import { Component, OnInit } from '@angular/core';
import { UserProfile } from './../../_models/sessions';
import { Subscription, Observable, combineLatest } from 'rxjs';
import { SessionsService } from './../../_services/sessions.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private subscriptions: Subscription[] = [];
  public userProfile: UserProfile;
  public isLoading: boolean = false;

  constructor(
    //  private readonly store: Store,
    private readonly sessionService: SessionsService,
  ) { }

  ngOnInit() {    
    console.log(this.userProfile);
     this.refreshUserProfileData();
  }

  refreshUserProfileData(): void {
    this.subscriptions.push(
      this.sessionService.getUserProfileDataFromHTTP().subscribe(userProfileData => {
        //this.store.set(StoreName.QrMps, userProfileData);
        this.userProfile = userProfileData[0];
        console.log(this.userProfile);

        this.isLoading = false;
      })
    );
  }
}
