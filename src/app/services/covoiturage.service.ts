import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
import { Covoiturage } from '../model/covoiturage.model';

const apiTravel = 'http://localhost:8090/api/travel';
@Injectable({
  providedIn: 'root'
})
export class CovoiturageService {

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
    return this.http.post(apiTravel + '/newAnnonce', data, this.httpOptions);
  }

  public getallCovoit(): Observable<Covoiturage[]>{
    return this.http.get<Covoiturage[]>(apiTravel+'/listcovoiturage/',this.httpOptions);
  }

  public getcovoitencours(): Observable<Covoiturage[]>{
    return this.http.get<Covoiturage[]>(apiTravel + '/listcoivoiturageencours',this.httpOptions);
  }

  public getAvailableCovoits(): Observable<Covoiturage[]>{
    return this.http.get<Covoiturage[]>(apiTravel + '/listAvailablesCovoiturages',this.httpOptions);
  }

  public getcovoitfinis(): Observable<Covoiturage[]>{
    return this.http.get<Covoiturage[]>(apiTravel + '/travel/listcoivoituragetermine', this.httpOptions);
  }

  public reserverCovoits(covoits:Covoiturage[]): Observable<Covoiturage[]>{
    return this.http.post<Covoiturage[]>(apiTravel + '/reserverCovoits', covoits, this.httpOptions);
  }

  public getCovoitById(id:number): Observable<Covoiturage>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenStorageService.getUser().token,
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      })
    };
    return this.http.get<Covoiturage>(api +'/travel/covoituragebyid/'+ `${id}`, httpOptions)
  }
}
