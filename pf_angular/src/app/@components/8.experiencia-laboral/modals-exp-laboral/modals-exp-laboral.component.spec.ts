import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsExpLaboralComponent } from './modals-exp-laboral.component';

describe('ModalsExpLaboralComponent', () => {
  let component: ModalsExpLaboralComponent;
  let fixture: ComponentFixture<ModalsExpLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsExpLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsExpLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
