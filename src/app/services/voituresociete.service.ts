import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const createUrl = 'http://localhost:8090/api/admin/vehicule/newVehicule';

@Injectable({
  providedIn: 'root'
})
export class VoituresocieteService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) {
  }

  create(data: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token,
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    };
    return this.http.post(createUrl, data, httpOptions);
  }
}
