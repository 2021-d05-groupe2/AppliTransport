import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Covoiturage } from '../model/covoiturage.model';

const createUrl = 'http://localhost:8090/api/travel/newAnnonce';
const api = 'http://localhost:8090/api';
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

  public getallCovoit(): Observable<Covoiturage[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token,
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    };
    return this.http.get<Covoiturage[]>(api+'/travel/listcovoiturage/',httpOptions);
  }

  public getcovoitencours(): Observable<Covoiturage[]>{
    return this.http.get<Covoiturage[]>(api + '/travel/listcoivoiturageencours');
  }
}
