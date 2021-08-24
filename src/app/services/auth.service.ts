import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(mail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      mail,
      password
    }, httpOptions);
  }

  register(role:string, firstName: string, name: string, tel: string, imgUrl: string, mail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      role,
      firstName,
      name,
      tel,
      imgUrl, 
      mail,
      password
    }, httpOptions);
  }
}