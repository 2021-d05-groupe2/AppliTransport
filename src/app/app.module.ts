import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ReservationsComponent } from './reservations/reservations.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { NewAnnonceComponent } from './annonces/new-annonce/new-annonce.component';
import { VehiculesServiceComponent } from './admin/vehicules-service/vehicules-service.component';
import { NewVehiculeServiceComponent } from './admin/new-vehicule-service/new-vehicule-service.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    ReservationsComponent,
    AnnoncesComponent,
    NewAnnonceComponent,
    VehiculesServiceComponent,
    NewVehiculeServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
