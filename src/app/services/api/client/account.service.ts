import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {IProfile} from '../../../interfaces/client/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 readonly host =  environment.host;
  constructor(
    private http: HttpClient,
  ) { }

  /** GET /api/v1/profiles
   *
   *
   */
  getAllProfiles(){
    return this.http.get<IProfile[]>(`${this.host}/api/v1/profiles`)
  }
}
