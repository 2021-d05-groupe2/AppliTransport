import { formatDate } from '@angular/common';
import { Component, ElementRef, Inject, LOCALE_ID, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
declare var $ : any;

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  currentUser: any;
  @ViewChild('newAnnonceModal') newAnnonceModal: ElementRef;

  constructor(private token: TokenStorageService, private router: Router, @Inject(LOCALE_ID) private locale: string) { }

  heures = new Map();
  minutes = new Map();
  minDate:string;

  ngOnInit(): void {

    //Mapping heures
    for(let i = 0; i <= 24; i++){
      let displayValue = ""+i;
      if(i<10){
        displayValue = "0"+displayValue;
      }
      this.heures.set(i,  displayValue);
    }

    //Mapping minutes
    this.minutes.set(0, "00");
    for(let i = 10; i < 60; i=i+10){
      this.minutes.set(i,  i);
    }

    //Set date minimum
    let nowPlusOneDay = new Date(Date.now());
    nowPlusOneDay.setDate(nowPlusOneDay.getDate() + 1);
    this.minDate = formatDate(nowPlusOneDay,'yyyy-MM-dd',this.locale);

    // Roles redirections
    this.currentUser = this.token.getUser();
    if(!this.token.getToken()){
      this.router.navigate(['/login'])
        .then(() => {
          window.location.reload();
        });
    }
    else if(this.currentUser.role === "CHAUFFEUR"){
      this.router.navigate(['/profile'])
        .then(() => {
          window.location.reload();
        });
    }
  }

  public open() {
    this.newAnnonceModal.nativeElement.style.display = 'block';
  }

  public close() {
    this.newAnnonceModal.nativeElement.style.display = 'none';
  }

}
