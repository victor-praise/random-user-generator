import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpClient: HttpClient) { }

  authHeader() {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    return { headers };
  }

  getUser():Observable<any>{
    return this.httpClient.get('https://randomuser.me/api/?results=200', this.authHeader())
  }

  getFemaleUsers():Observable<any>{
    return this.httpClient.get('https://randomuser.me/api/?results=100&gender=female',this.authHeader())
  }
  getMaleUsers():Observable<any>{
    return this.httpClient.get('https://randomuser.me/api/?results=100&gender=male',this.authHeader())
  }
}
