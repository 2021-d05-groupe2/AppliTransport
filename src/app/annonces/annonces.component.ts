import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
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
