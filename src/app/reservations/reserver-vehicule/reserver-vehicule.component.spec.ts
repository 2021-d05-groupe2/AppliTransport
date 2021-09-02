import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverVehiculeComponent } from './reserver-vehicule.component';

describe('ReserverVehiculeComponent', () => {
  let component: ReserverVehiculeComponent;
  let fixture: ComponentFixture<ReserverVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReserverVehiculeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserverVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
