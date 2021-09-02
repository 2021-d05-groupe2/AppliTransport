import { Covoiturage } from './../model/covoiturage.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CovoiturageService } from '../services/covoiturage.service';

@Component({
  selector: 'app-detailcovoiturage',
  templateUrl: './detailcovoiturage.component.html',
  styleUrls: ['./detailcovoiturage.component.css']
})
export class DetailcovoiturageComponent implements OnInit {
  covoitId: any;
  detailcovoit: Covoiturage;
  constructor(private route: ActivatedRoute, private router: Router, private covoiturageService: CovoiturageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.covoitId=params['id'];
      console.log(this.covoitId);
      this.getCovoitWithId(this.covoitId);
    })
  }

  getCovoitWithId(param:number){
    this.covoiturageService.getCovoitById(param).subscribe(
      (resp)=>{
        this.detailcovoit = resp;
        console.log(resp);
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
