import { Component, OnInit, Input } from '@angular/core';
import { UserProfile } from './../../_models/sessions';

@Component({
  selector: 'app-member-badge',
  templateUrl: './member-badge.component.html',
  styleUrls: ['./member-badge.component.scss']
})
export class MemberBadgeComponent implements OnInit {

  @Input() userProfile: UserProfile;

  constructor() { }

  ngOnInit() {
  }

}
