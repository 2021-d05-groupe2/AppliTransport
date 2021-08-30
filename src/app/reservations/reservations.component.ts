import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  constructor() { }

  public show:any=null;


  ngOnInit(): void {
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
