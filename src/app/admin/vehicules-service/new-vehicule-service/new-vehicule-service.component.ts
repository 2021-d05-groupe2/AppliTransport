import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Administrateur } from 'src/app/model/administrateur.model';
import { Voituresociete } from 'src/app/model/voituresociete.model';
import { VoituresocieteService } from 'src/app/services/voituresociete.service';
declare var $ : any;

@Component({
  selector: 'app-new-vehicule-service',
  templateUrl: './new-vehicule-service.component.html',
  styleUrls: ['./new-vehicule-service.component.css']
})
export class NewVehiculeServiceComponent implements OnInit {

  @ViewChild('newVehiculeModal') newVehiculeModal: ElementRef;

  constructor(private vehiculeService: VoituresocieteService) {

  }

  errorMessage = '';

  ngOnInit(): void {

  }

  categories: Map<String, String> = new Map([
    ["MICRO_URBAINES", "Micro-urbaines"],
    ["MINI_CITADINES", "Mini-citadines"],
    ["CITADINES_POLYVALENTES", "Citadines polyvalentes"],
    ["COMPACTES", "Compactes"],
    ["BERLINE_S", "Berlines Taille S"],
    ["BERLINE_M", "Berlines Taille M"],
    ["BERLINE_L", "Berlines Taille L"],
    ["SUV", "SUV, Tout-terrains et Pick-up"]
  ]);

  // Display/Hide modal since JS of BS5 doesnt work properly with TypeScript
  public open() {
    this.newVehiculeModal.nativeElement.style.display = 'block';
  }

  public close() {
    this.newVehiculeModal.nativeElement.style.display = 'none';
  }

  // ADD FORM
  isSuccess:boolean = false;
  isFail:boolean = false;

  addForm: any = {
    immatriculation: null,
    marque: null,
    modele: null,
    categorie: null,
    nbPlaces: 1,
    imgUrl: null
  };

  onSubmit(f:NgForm): void {
    const {
      immatriculation,
      marque,
      modele,
      categorie,
      nbPlaces,
      imgUrl
    } = this.addForm;

    const data = {
      immatriculation: this.addForm.immatriculation,
      marque: this.addForm.marque,
      modele: this.addForm.modele,
      categorie: this.addForm.categorie,
      imgUrl: this.addForm.imgUrl
    };

    this.vehiculeService.create(data)
    .subscribe(
      response => {
        $('#newVehiculeModal').modal('hide');
        this.isSuccess = true;
        this.isFail = false;
        f.reset();
        window.location.reload();
      },
      err => {
        this.errorMessage = err.error;
        this.isSuccess = false;
        this.isFail = true;
      });
  }

  vehicule: Voituresociete = {
    immatriculation: '',
    marque: '',
    modele: '',
    categorie: '',
    imgUrl: '',
    status: '',
    responsable: new Administrateur()
  }

}
