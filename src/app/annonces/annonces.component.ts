import { Component, ElementRef, Inject, LOCALE_ID, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Covoiturage } from '../model/covoiturage.model';
import { CovoiturageService } from '../services/covoiturage.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, private router: Router, private covoiturageService: CovoiturageService){

  }

  mesAnnonces:Covoiturage;

  ngOnInit(): void {
    
    this.covoiturageService.getAnnonces()
        .subscribe(
          response => {
            this.mesAnnonces = response;
          },
          err => {
          });
      
    

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
}
