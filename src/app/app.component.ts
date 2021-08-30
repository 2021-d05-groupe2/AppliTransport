import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
import { EventBusService } from './shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private role: string;
  isLoggedIn = false;
  isAdmin = false;
  isCollaborateur = false;
  username?: string;
  imgUrl: string;

  eventBusSub?: Subscription;

  constructor(private tokenStorageService: TokenStorageService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;

      this.isAdmin = this.role === "ADMIN";
      this.isCollaborateur = (this.role === "ADMIN" || this.role === "COLLABORATEUR");

      this.username = user.username;
      this.imgUrl = user.imgUrl;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }

  logout(): void {
    this.tokenStorageService.signOut();

    this.isLoggedIn = false;
    window.location.reload();
  }
}