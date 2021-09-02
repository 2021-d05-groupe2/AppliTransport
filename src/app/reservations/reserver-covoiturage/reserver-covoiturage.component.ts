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

  isSuccess:boolean = false;
  isFail:boolean = false;
  errorMessage:string = '';

  availableCovoiturages: Covoiturage[];
  selectedCovoiturages: Covoiturage[] = [];

  constructor(private covoiturageService: CovoiturageService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  // Display/Hide modal since JS of BS5 doesnt work properly with TypeScript
  public open() {
    this.getAvailableCovoits();
    this.reserverCovoitModal.nativeElement.style.display = 'block';
  }

  public close() {
    this.availableCovoiturages = [];
    this.selectedCovoiturages = []
    this.reserverCovoitModal.nativeElement.style.display = 'none';
  }

  displayDate(date:Date){
    return this.datePipe.transform(date,"EEE d MMM hh:mm");
  }
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
    this.covoiturageService.reserverCovoits(this.selectedCovoiturages).subscribe(
      (resp)=>{
        this.isSuccess = true;
        window.location.reload();
      },
      (error) =>{
        this.errorMessage = error.error;
        this.isSuccess = false;
        this.isFail = true;
      }
    )
  }

  getAvailableCovoits(){
    this.covoiturageService.getAvailableCovoits().subscribe(
      (resp)=>{
        this.availableCovoiturages = resp;
        console.log(resp);
      },
      (error) =>{
        console.log(error);
      }
    )
  }
}
