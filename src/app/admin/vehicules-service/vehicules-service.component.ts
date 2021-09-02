import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Voituresociete } from 'src/app/model/voituresociete.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { VoituresocieteService } from 'src/app/services/voituresociete.service';

@Component({
  selector: 'app-vehicules-service',
  templateUrl: './vehicules-service.component.html',
  styleUrls: ['./vehicules-service.component.css']
})
export class VehiculesServiceComponent implements OnInit {

  currentUser: any;
  vehicules: Observable<Voituresociete[]>;

  constructor(private token: TokenStorageService, private router: Router, private vehiculeService: VoituresocieteService){

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

  ngOnInit(): void {

    // Roles redirections
    this.currentUser = this.token.getUser();
    if(!this.token.getToken()){
      this.router.navigate(['/login'])
        .then(() => {
          window.location.reload();
        });
    }
    else if(this.currentUser.role != "ADMIN"){
      this.router.navigate(['/profile'])
        .then(() => {
          window.location.reload();
        });
    }
    this.vehicules = this.vehiculeService.getAllVehicules();
  }

}
