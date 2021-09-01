import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voituresociete } from '../model/voituresociete.model';
import { TokenStorageService } from './token-storage.service';

const baseURL = 'http://localhost:8090/api/admin/vehicule';

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
    return this.http.post(baseURL + '/newVehicule', data, httpOptions);
  }

  getAllVehicules(): Observable<Voituresociete[]>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token,
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    };

    return this.http.get<Voituresociete[]>(baseURL + '/listVehicules', httpOptions);
  }
}
