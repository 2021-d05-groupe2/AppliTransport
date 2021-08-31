import { Covoiturage } from './../model/covoiturage.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CovoiturageService } from '../services/covoiturage.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  covoiturages: Covoiturage[];

  constructor(private route: ActivatedRoute,
    private covoiturageService: CovoiturageService) {
      this.getallcovoit();
    }

  public show:any=null;


  ngOnInit(): void {
    this.getallcovoit();
  }

  toggle1(){
    if (this.show!='covoit') {
      this.show = 'covoit';
      this.getallcovoit();
    } else {
      this.show = null;
    }

  }

  toggle2(){
    if (this.show!='service') {
      this.show ='service';
    } else {
      this.show = null;
    }
  }

  getallcovoit(){
    this.covoiturageService.getallCovoit().subscribe(
      (resp)=>{
        this.covoiturages = resp;
        console.log(resp);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
