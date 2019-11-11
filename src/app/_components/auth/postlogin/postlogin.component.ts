import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../_services/authentication.service';
import { AuthObject } from './../../../_models/auth';

@Component({
  selector: 'app-postlogin',
  templateUrl: './postlogin.component.html',
  styleUrls: ['./postlogin.component.scss']
})
export class PostLoginComponent implements OnInit {
  //  public href = '';
  public access_token = '';
  public state = '';
  public currentAuthObject: AuthObject = {};

  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit() {
    // this.href = this.router.url;
    console.log(this.router.url);
    this.currentAuthObject = this.parseURIparameters(this.router.url);
    this.authService.updateAuthObject(this.currentAuthObject);
    this.authService.loginViaGoogle(this.currentAuthObject.access_token.toString(), this.currentAuthObject.state.toString());
  }

  private parseURIparameters(href: string): AuthObject {
    let tokenAsJson = null;
    const qp: AuthObject = {};
    let error = '';

    let i = href.indexOf('#token=');
    if (i > 0) {
        tokenAsJson = decodeURIComponent(href.substring(i + 7));
    } else {
        i = location.href.indexOf('#error=');
        if (i > 0) {
            error = decodeURIComponent(href.substring(i + 7));
        }
    }

    if (tokenAsJson !== null) {
        try {
            qp.access_token = JSON.parse(tokenAsJson).authenticationToken;
            // parse the token to get the idp
            const base64Url = qp.access_token.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
            const parsedJwt = JSON.parse(window.atob(base64));
            qp.state = parsedJwt.idp;
        } catch (e) {
            qp.error = e;
        }
    }

    return qp;
  }
}
