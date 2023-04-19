import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTitulosComponent } from './modal-titulos.component';

describe('ModalTitulosComponent', () => {
  let component: ModalTitulosComponent;
  let fixture: ComponentFixture<ModalTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTitulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
