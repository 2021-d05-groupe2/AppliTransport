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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };

  create(data: any): Observable<any> {
    return this.http.post(baseURL + '/newVehicule', data, this.httpOptions);
  }

  getAllVehicules(): Observable<Voituresociete[]>{
    return this.http.get<Voituresociete[]>(baseURL + '/listVehicules', this.httpOptions);
  }

  getAvailableVehicules(data: any): Observable<any[]>{
    return this.http.post<Voituresociete[]>(baseURL + '/listAvailablesVehicules', data, this.httpOptions);
  }

  reserverVoiture(data: any): Observable<any>{
    return this.http.post<any>(baseURL + '/reserverVehicule', data, this.httpOptions);
  }
}
