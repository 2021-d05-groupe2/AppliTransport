import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-vehicules-service',
  templateUrl: './vehicules-service.component.html',
  styleUrls: ['./vehicules-service.component.css']
})
export class VehiculesServiceComponent implements OnInit {

  currentUser: any;

  constructor(private token: TokenStorageService, private router: Router){

  }

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
  }

}
