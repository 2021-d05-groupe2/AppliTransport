import { Reservationvoiture } from './../model/reservationvoiture.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Covoiturage } from '../model/covoiturage.model';

const apiTravel = 'http://localhost:8090/api/travel';
@Injectable({
  providedIn: 'root'
})
export class VehiculesocieteService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorageService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token,
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };

  public getresavehiculeencours(): Observable<Reservationvoiture[]>{
    return this.http.get<Reservationvoiture[]>(apiTravel + '/listresavehiculeencours',this.httpOptions);
  }
}
