import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcovoiturageComponent } from './detailcovoiturage.component';

describe('DetailcovoiturageComponent', () => {
  let component: DetailcovoiturageComponent;
  let fixture: ComponentFixture<DetailcovoiturageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcovoiturageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
