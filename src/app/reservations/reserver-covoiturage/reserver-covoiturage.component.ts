import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Covoiturage } from 'src/app/model/covoiturage.model';
import { CovoiturageService } from 'src/app/services/covoiturage.service';

@Component({
  selector: 'app-reserver-covoiturage',
  templateUrl: './reserver-covoiturage.component.html',
  styleUrls: ['./reserver-covoiturage.component.css']
})
export class ReserverCovoiturageComponent implements OnInit {

  @ViewChild('reserverCovoitModal') reserverCovoitModal: ElementRef;

  
  availableCovoiturages: Covoiturage[];
  selectedCovoiturages: Covoiturage[] = [];

  constructor(private covoiturageService: CovoiturageService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getAvailableCovoits();
  }

  // Display/Hide modal since JS of BS5 doesnt work properly with TypeScript
  public open() {
    this.reserverCovoitModal.nativeElement.style.display = 'block';
  }

  public close() {
    this.reserverCovoitModal.nativeElement.style.display = 'none';
  }

  displayDate(date:Date){
    return this.datePipe.transform(date,"EEE d MMM hh:mm");
  }

  // ADD FORM
  isSuccess:boolean = false;
  isFail:boolean = false;

  updateChecked(covoit:Covoiturage){
    let index:number = this.selectedCovoiturages.indexOf(covoit);
    if(index != -1){
      this.selectedCovoiturages.splice(index, 1);
    }
    else{
      this.selectedCovoiturages.push(covoit);
    }
  }

  onSubmit(f:NgForm){
    this.covoiturageService.reserverCovoits(this.selectedCovoiturages);
  }

  getAvailableCovoits(){
    this.covoiturageService.getAvailableCovoits().subscribe(
      (resp)=>{
        this.availableCovoiturages = resp;
        console.log(resp);
      },
      (error) =>{
        console.log("ici");
        console.log(error);
      }
    )
  }
}
