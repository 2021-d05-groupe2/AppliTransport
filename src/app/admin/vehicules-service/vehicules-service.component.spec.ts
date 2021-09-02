import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculesServiceComponent } from './vehicules-service.component';

describe('VehiculesServiceComponent', () => {
  let component: VehiculesServiceComponent;
  let fixture: ComponentFixture<VehiculesServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculesServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
