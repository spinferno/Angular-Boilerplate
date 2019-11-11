import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly authenticationService: AuthenticationService) {}

    public headers: HttpHeaders;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // //append headers
        this.headers = new HttpHeaders();
        // // this.headers.set("Content-Type", 'application/json');
        // // this.headers.set("Access-Control-Allow-Origin", "*");
        // // this.headers.set("Access-Control-Allow-Headers", "Origin, Authorization, Content-Type, Accept");
        this.headers.set("ZUMO-API-VERSION", "2.0.0");
        this.headers.set("X-ZUMO-AUTH", this.authenticationService.token);  

        request = request.clone({
            headers: this.headers
        });

        // add authorization header with jwt token if available
        // let currentUser = JSON.parse(localStorage.getItem('user'));
        // if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    'ZUMO-API-VERSION': `2.0.0`,
                    'X-ZUMO-AUTH': this.authenticationService.token
                }
            });
        // }

        return next.handle(request);
    }
}
