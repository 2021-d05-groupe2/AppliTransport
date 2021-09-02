import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehiculeServiceComponent } from './new-vehicule-service.component';

describe('NewVehiculeServiceComponent', () => {
  let component: NewVehiculeServiceComponent;
  let fixture: ComponentFixture<NewVehiculeServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVehiculeServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVehiculeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
