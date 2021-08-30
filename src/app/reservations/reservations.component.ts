import { Covoiturage } from './../model/covoiturage.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  covoiturages: Covoiturage[];

  constructor(private route: ActivatedRoute) { }

  public show:any=null;


  ngOnInit(): void {
    this.covoiturages = this.route.snapshot.data.covoiturages;
  }

  toggle1(){
    if (this.show!='covoit') {
      this.show = 'covoit';
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

}
