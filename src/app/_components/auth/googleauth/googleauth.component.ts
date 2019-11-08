import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-googleauth',
  templateUrl: './googleauth.component.html',
  styleUrls: ['./googleauth.component.scss']
})
export class GoogleAuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // btnClick = function () {
  //   this.router.navigateByUrl('/https://azapp-tektrak-mobileappservices-poc.azurewebsites.net/.auth/login/google?response_type=token&redirect_uri=http%3A%2F%2F127.0.0.1%3A5500%2Fo2c.html&realm=na&client_id=na&state=authClient&session_mode=token&post_login_redirect_url=http%3A%2F%2F127.0.0.1%3A5500%2Fo2c.html');
  // };

}
