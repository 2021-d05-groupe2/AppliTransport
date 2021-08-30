import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
  }
}