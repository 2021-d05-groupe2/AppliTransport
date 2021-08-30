import { formatDate } from '@angular/common';
import { Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { Collaborateur } from 'src/app/model/collaborateur.model';
import { Covoiturage } from 'src/app/model/covoiturage.model';
import { Voitureprive } from 'src/app/model/voitureprive.model';
import { CovoiturageService } from 'src/app/services/covoiturage.service';

@Component({
  selector: 'app-new-annonce',
  templateUrl: './new-annonce.component.html',
  styleUrls: ['./new-annonce.component.css']
})
export class NewAnnonceComponent implements OnInit {

  @ViewChild('newAnnonceModal') newAnnonceModal: ElementRef;

  constructor(private covoiturageService: CovoiturageService, @Inject(LOCALE_ID) private locale: string) {

  }

  date: Date;

  arrayHeures = [];
  arrayMinutes = [];
  minDate:string = this.tomorrow();
  errorMessage = '';

  ngOnInit(): void {

    //Set heures
    for(let i = 0; i <= 24; i++){
      let displayValue = ""+i;
      if(i<10){
        displayValue = "0"+displayValue;
      }
      this.arrayHeures.push(displayValue);
    }

    //Set minutes
    this.arrayMinutes.push("00");
    for(let i = 10; i < 60; i=i+10){
      this.arrayMinutes.push(i+"");
    }

  }

  // Display/Hide modal since JS of BS5 doesnt work properly with TypeScript
  public open() {
    this.newAnnonceModal.nativeElement.style.display = 'block';
  }

  public close() {
    this.newAnnonceModal.nativeElement.style.display = 'none';
  }

  // PUBLICATION FORM
  isSuccess:boolean = false;
  isFail:boolean = false;

  publishForm: any = {
    adresseDepart: null,
    adresseDestination: null,
    duree: null,
    distance: null,
    immatriculation: null,
    marque: null,
    modele: null,
    nbPlaces: 1,
    date: this.minDate,
    heures: "09",
    minutes: "00"
  };

  tomorrow(){

    //Set date minimum
    let nowPlusOneDay = new Date(Date.now());
    nowPlusOneDay.setDate(nowPlusOneDay.getDate() + 1);
    return formatDate(nowPlusOneDay,'yyyy-MM-dd',this.locale);
  }

  onSubmit(): void {
    const {
      adresseDepart,
      adresseDestination,
      duree,
      distance,
      immatriculation,
      marque,
      modele,
      nbPlaces,
      date,
      heures,
      minutes
    } = this.publishForm;

    const data = {
      adresseDepart: this.publishForm.adresseDepart,
      adresseDestination: this.publishForm.adresseDestination,
      date: this.publishForm.date,
      heures: this.publishForm.heures,
      minutes: this.publishForm.minutes,
      duree: this.publishForm.duree,
      organisateur: this.publishForm.organisateur,
      immatriculation: this.publishForm.immatriculation,
      marque: this.publishForm.marque,
      modele: this.publishForm.modele,
      nbPlaces: this.publishForm.nbPlaces
    };

    this.covoiturageService.create(data)
      .subscribe(
        response => {
          this.close();
          this.isSuccess = true;
          this.isFail = false;
        },
        err => {
          this.errorMessage = err.error;
          this.isSuccess = false;
          this.isFail = true;
        });

  }

  covoiturage: Covoiturage = {
      id: 0,
      adresseDepart: '',
      adresseDestination: '',
      date: new Date(),
      duree: 0,
      nbPassagers: 0,
      organisateur: new Collaborateur(),
      passagers: [],
      status: '',
      vehicule: new Voitureprive()
  }

}
