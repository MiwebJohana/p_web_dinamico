import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsFormacionPComponent } from './modals-formacion-p.component';

describe('ModalsFormacionPComponent', () => {
  let component: ModalsFormacionPComponent;
  let fixture: ComponentFixture<ModalsFormacionPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsFormacionPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsFormacionPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
