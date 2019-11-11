import { Injectable } from '@angular/core';
import { UserProfile } from './../_models/sessions';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionsService {

  constructor(private readonly http: HttpClient) { }

  getUserProfileDataFromHTTP(): Observable<UserProfile> {
    return this.http
      .get<UserProfile>(`${environment.BASE_URI}${environment.GET_USERPROFILE_PATH}`);
  }
}
