import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { DetailcovoiturageComponent } from './detailcovoiturage/detailcovoiturage.component';
import { VehiculesServiceComponent } from './admin/vehicules-service/vehicules-service.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'reservations', component: ReservationsComponent},
  { path: 'annonces', component: AnnoncesComponent},
  { path: 'details', component: DetailcovoiturageComponent},
  { path: 'admin/vehicules', component: VehiculesServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
