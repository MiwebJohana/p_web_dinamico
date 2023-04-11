import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapizytachitoComponent } from './lapizytachito.component';

describe('LapizytachitoComponent', () => {
  let component: LapizytachitoComponent;
  let fixture: ComponentFixture<LapizytachitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapizytachitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapizytachitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
