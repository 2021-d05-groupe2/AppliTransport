import { formatDate } from '@angular/common';
import { Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/model/reservation.model';
import { Voituresociete } from 'src/app/model/voituresociete.model';
import { VoituresocieteService } from 'src/app/services/voituresociete.service';

@Component({
  selector: 'app-reserver-vehicule',
  templateUrl: './reserver-vehicule.component.html',
  styleUrls: ['./reserver-vehicule.component.css']
})
export class ReserverVehiculeComponent implements OnInit {

  @ViewChild('reserverVehiculeModal') reserverCovoitModal: ElementRef;



  constructor(private vehiculeService: VoituresocieteService, @Inject(LOCALE_ID) private locale: string) { }
  

  availableVehicules: Voituresociete[];
  selectedVehicule: Voituresociete;
  reservation: Reservation;

  updateSelected(v:Voituresociete, go:boolean){
    if(go){
      this.selectedVehicule = v;
    }
  }


  categories: Map<String, String> = new Map([
    ["MICRO_URBAINES", "Micro-urbaines"],
    ["MINI_CITADINES", "Mini-citadines"],
    ["CITADINES_POLYVALENTES", "Citadines polyvalentes"],
    ["COMPACTES", "Compactes"],
    ["BERLINE_S", "Berlines Taille S"],
    ["BERLINE_M", "Berlines Taille M"],
    ["BERLINE_L", "Berlines Taille L"],
    ["SUV", "SUV, Tout-terrains et Pick-up"]
  ]);

  arrayHeures = [];
  arrayMinutes = [];
  minDate:string = this.tomorrow();

  tomorrow(){
    //Set date minimum
    let nowPlusOneDay = new Date(Date.now());
    nowPlusOneDay.setDate(nowPlusOneDay.getDate() + 1);
    return formatDate(nowPlusOneDay,'yyyy-MM-dd',this.locale);
  }

  ngOnInit(): void {
    this.searchSubmitted = false;

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
    this.reserverCovoitModal.nativeElement.style.display = 'block';
  }

  public close() {
    this.searchSubmitted = false;
    this.isSuccess = false;
    this.isFail = false;
    this.reserverCovoitModal.nativeElement.style.display = 'none';
  }

 // SEARCH FORM

  searchSubmitted:boolean = false;
  isSuccess:boolean = false;
  isFail:boolean = false;
  errorMessage:string = '';

  searchForm: any = {
    dateAller: this.minDate,
    heuresAller: "09",
    minutesAller: "00",
    dateRetour: this.minDate,
    heuresRetour: "18",
    minutesRetour: "00"
  };

  search(f:NgForm){
    const {
      dateAller,
      heuresAller,
      minutesAller,
      dateRetour,
      heuresRetour,
      minutesRetour
    } = this.searchForm;

    const data = {
      dateAller: this.searchForm.dateAller,
      heuresAller: this.searchForm.heuresAller,
      minutesAller: this.searchForm.minutesAller,
      dateRetour: this.searchForm.dateRetour,
      heuresRetour: this.searchForm.heuresRetour,
      minutesRetour: this.searchForm.minutesRetour
    }

    this.vehiculeService.getAvailableVehicules(data)
          .subscribe(res => {
            this.availableVehicules = res as Voituresociete[];
          }
    );
  }

  reserver(){

    const data = {
      dateAller: this.searchForm.dateAller,
      heuresAller: this.searchForm.heuresAller,
      minutesAller: this.searchForm.minutesAller,
      dateRetour: this.searchForm.dateRetour,
      heuresRetour: this.searchForm.heuresRetour,
      minutesRetour: this.searchForm.minutesRetour,
      vehicule: this.selectedVehicule
    }

    this.searchSubmitted = true;
    this.vehiculeService.reserverVoiture(this.reservation).subscribe(
      (resp)=>{
        this.isSuccess = true;
        window.location.reload();
      },
      (error) =>{
        this.errorMessage = error.error;
        this.isSuccess = false;
        this.isFail = true;
      }
    )
  }
}
