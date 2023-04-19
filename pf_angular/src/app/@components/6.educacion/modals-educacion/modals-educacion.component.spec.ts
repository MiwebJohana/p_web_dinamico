import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsEducacionComponent } from './modals-educacion.component';

describe('ModalsEducacionComponent', () => {
  let component: ModalsEducacionComponent;
  let fixture: ComponentFixture<ModalsEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalsEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalsEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
