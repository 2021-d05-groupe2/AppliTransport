import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const createUrl = 'http://localhost:8090/api/travel/newAnnonce';

@Injectable({
  providedIn: 'root'
})
export class CovoiturageService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  create(data: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token
      })
    };
    return this.http.post(createUrl, data, httpOptions);
  }

}
