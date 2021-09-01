import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailcovoiturage',
  templateUrl: './detailcovoiturage.component.html',
  styleUrls: ['./detailcovoiturage.component.css']
})
export class DetailcovoiturageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
