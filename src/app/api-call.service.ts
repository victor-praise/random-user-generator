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
    return this.httpClient.get('https://randomuser.me/api/?results=20', this.authHeader())
  }

  getFemaleUsers():Observable<any>{
    return this.httpClient.get('https://randomuser.me/api/?results=50&gender=female',this.authHeader())
  }

  getPagination(seed,pageNo):Observable<any>{
    return this.httpClient.get(`https://randomuser.me/api/?page=${pageNo}&results=20&seed=${seed}`)
  }
}
