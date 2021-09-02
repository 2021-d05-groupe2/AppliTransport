import { Covoiturage } from './../model/covoiturage.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovoiturageService } from '../services/covoiturage.service';
import { VehiculesocieteService } from '../services/vehiculesociete.service';
import { Reservationvoiture } from '../model/reservationvoiture.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  covoituragesencours: Covoiturage[];
  covoituragesfinis: Covoiturage[];
  reservationsencours: Reservationvoiture[];

  constructor(private route: ActivatedRoute, private router: Router,
    private covoiturageService: CovoiturageService, private vehiculeSocieteService: VehiculesocieteService,
    private datePipe: DatePipe) {
      this.getcovoitencours();
      this.getcovoitfinis();
    }

  public show:any=null;


  ngOnInit(): void {
    this.getcovoitencours();
  }

  toggle1(){
    if (this.show!='covoit') {
      this.show = 'covoit';
      this.getcovoitencours();
      this.getcovoitfinis();
    } else {
      this.show = null;
    }
  }

  toggle2(){
    if (this.show!='service') {
      this.show ='service';
      this.getresaencours();
    } else {
      this.show = null;
    }
  }

  getcovoitencours(){
    this.covoiturageService.getcovoitencours().subscribe(
      (resp)=>{
        this.covoituragesencours = resp;
        console.log(resp);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  getcovoitfinis(){
    this.covoiturageService.getcovoitfinis().subscribe(
      (resp)=>{
        this.covoituragesfinis = resp;
        console.log(resp);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  getresaencours(){
    this.vehiculeSocieteService.getresavehiculeencours().subscribe(
      (resp)=>{
        this.reservationsencours = resp;
        console.log(resp);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

  displayDate(date:Date){
    return this.datePipe.transform(date,"EEE d MMM hh:mm");
  }

}
